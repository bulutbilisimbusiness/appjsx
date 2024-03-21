"use strict";

const { mongoose } = require("../configs/dbConnection");

const PurchaseSchema = new mongoose.Schema(
	{
		name: { type: String, trim: true, required: true, unique: true },
		image: { type: String, trim: true },
	},

	{
		collection: "Purchases",
		timestamps: true,
	}
);
PurchaseSchema.pre("init", function (data) {
	data.id = data._id;
	data.createds = data.createdAt.toLocaleDateString("tr-tr");
});
module.exports = mongoose.model("Purchase", PurchaseSchema);
