"use strict";

const User = require("../models/user");
module.exports = {
	list: async (req, res) => {
		/*
    #swagger.tags = ["Users"]
    #swagger.summary = "List Users"
    #swagger.description = `
        You can send query with endpoint for search[], sort[], page and limit.
        <ul> Examples:
            <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
            <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
            <li>URL/?<b>page=2&limit=1</b></li>
        </ul>
    `
*/
		const filters = req.user?.is_superadmin ? {} : { _id: req.user._id };
		const data = await res.getModelList(User, filters);
		//FOR REACT PROJECT
		res.status(200).send(data);
	},
	create: async (req, res) => {
		/*
    #swagger.tags = ["Users"]
    #swagger.summary = "Create User"
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            "username": "test",
            "password": "1234",
            "email": "test@site.com",
            "first_name": "test",
            "last_name": "test",
        }
    }
*/
		req.body.is_staff = false;
		req.body.is_superadmin = false;
		const data = await User.create(req.body);
		res.status(201).send({
			error: false,
			data,
		});
	},
	read: async (req, res) => {
		/*
    #swagger.tags = ["Users"]
    #swagger.summary = "Get Single User"
*/
		const filters = req.user?.is_superadmin
			? { _id: req.params.id }
			: { _id: req.user._id };
		const data = await User.findOne(filters);
		res.status(200).send({
			error: false,
			data,
		});
	},
	update: async (req, res) => {
		/*
    #swagger.tags = ["Users"]
    #swagger.summary = "Update User"
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            "username": "test",
            "password": "1234",
            "email": "test@site.com",
            "first_name": "test",
            "last_name": "test",
        }
    }
*/
		const filters = req.user?.is_superadmin
			? { _id: req.params.id }
			: { _id: req.user._id };
		req.body.is_superadmin = req.user?.is_superadmin
			? req.body.is_superadmin
			: false;
		const data = await User.updateOne(filters, req.body, {
			runValidators: true,
		});
		res.status(202).send({
			error: false,
			data,
			new: await User.findOne({ _id: req.params.id }),
		});
	},
	delete: async (req, res) => {
		/*
    #swagger.tags = ["Users"]
    #swagger.summary = "Delete User"
*/
		const filters = req.user?.is_superadmin
			? { _id: req.params.id }
			: { _id: req.user._id };
		const data = await User.deleteOne(filters);
		res.status(data.deletedCount ? 204 : 404).send({
			error: !data.deletedCount,
			data,
		});
	},
};
