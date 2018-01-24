const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/product");

const Schema = mongoose.Schema;

const productSchema = new Schema({

    nameProduct: String,
    categoryProduct: String,
    priceProduct: Number,
    profileProduct: String

});

const Product = mongoose.model("product", productSchema);

module.exports = Product;

