"use strict";

const Product = require("../models/product");
const Sale = require("../models/sale");
module.exports = {
	list: async (req, res) => {
		/*
    #swagger.tags = ["Sales"]
    #swagger.summary = "List Sales"
    #swagger.description = `
        You can send query with endpoint for search[], sort[], page and limit.
        <ul> Examples:
            <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
            <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
            <li>URL/?<b>page=2&limit=1</b></li>
        </ul>
    `
*/
		const data = await res.getModelList(Sale, {}, ["brand_id", "product_id"]);
		//FOR REACT PROJECT
		res.status(200).send(data);
	},
	create: async (req, res) => {
		/*
    #swagger.tags = ["Sales"]
    #swagger.summary = "Create Sale"
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            $ref:  '#/definitions/Sale'
        }
    }
*/

		req.body.user_id = req.user?._id;
		const currentProduct = await Product.findOne({ _id: req.body.product_id });
		if (currentProduct.stock >= req.body.quantityt) {
			const data = await Sale.create(req.body);
			const updateProduct = await Product.updateOne(
				{ _id: data.product_id },
				{ $inc: { stock: -data.quantity } }
			);
			res.status(201).send({
				error: false,
				data,
			});
		} else {
			res.errorStatusCode = 422;
			throw new Error("There is not enough stock for this sale", {
				cause: { currentProduct },
			});
		}
	},
	read: async (req, res) => {
		/*
    #swagger.tags = ["Sales"]
    #swagger.summary = "Get Single Sale"
*/
		const data = await Sale.findOne({ _id: req.params.id }).populate([
			"brand_id",
			"product_id",
		]);
		res.status(200).send({
			error: false,
			data,
		});
	},
	update: async (req, res) => {
		/*
    #swagger.tags = ["Sales"]
    #swagger.summary = "Update Sale"
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
           $ref:  '#/definitions/Sale'
        }
    }
*/
		if (req.body?.quantity) {
			const currentSale = await Sale.findOne({ _id: req.params.id });
			const quantity = req.body.quantity - currentSale.quantity;
			const updateProduct = await Product.updateOne(
				{ _id: currentSale.product_id, stock: { $gte: quantity } },
				{ $inc: { stock: -quantity } }
			);
			if (updateProduct.modifiedCount == 0) {
				res.errorStatusCode = 422;
				throw new Error("There is not enough stock for this sale.");
			}
		}
		const data = await Sale.updateOne({ _id: req.params.id }, req.body, {
			runValidators: true,
		});
		res.status(202).send({
			error: false,
			data,
			new: await Sale.findOne({ _id: req.params.id }),
		});
	},
	delete: async (req, res) => {
		/*
    #swagger.tags = ["Sales"]
    #swagger.summary = "Delete Sale"
*/
		const currentPurchase = await Purchase.findOne({ _id: req.params.id });
		const data = await Purchase.deleteOne({ _id: req.params.id });
		const updateProduct = await Product.updateOne(
			{ _id: currentPurchase.product_id },
			{ $inc: { stock: +currentPurchase.quantity } }
		);
		res.status(data.deletedCount ? 204 : 404).send({
			error: !data.deletedCount,
			data,
		});
	},
};
