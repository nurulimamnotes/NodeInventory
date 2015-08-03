"use strict";

const restful = require("node-restful");
const mongoose = restful.mongoose;

//schema
let productSchema = new mongoose.Schema({
	name : String,
	sku : String,
	price : Number
});

module.exports = restful.model("Products",productSchema);