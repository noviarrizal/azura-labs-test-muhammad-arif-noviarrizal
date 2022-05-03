const mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: String,
});

const Productdb = mongoose.model("productdb", schema);

module.exports = Productdb;
