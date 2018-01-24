const express = require("express");
const Product = require("../model/product");
const router = express.Router();

router.get("/detail:id", (req, res) => {

    Product.findById(req.params.id, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/", (req, res) => {

    Product.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/accessories", (req, res) => {

    Product.find({ categoryProduct: "accessories" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/denim", (req, res) => {

    Product.find({ categoryProduct: "denim" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/footwear", (req, res) => {

    Product.find({ categoryProduct: "footwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/jeans", (req, res) => {

    Product.find({ categoryProduct: "jeans" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/outwear", (req, res) => {

    Product.find({ categoryProduct: "outwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/pants", (req, res) => {

    Product.find({ categoryProduct: "pants" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/shirt", (req, res) => {

    Product.find({ categoryProduct: "shirt" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/t-shirt", (req, res) => {

    Product.find({ categoryProduct: "t-shirt" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/short", (req, res) => {

    Product.find({ categoryProduct: "short" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.post("/", (req, res) => {

    if (!req.files.profileProduct) {
        return res.status(400).send("No files were upload");
    }
    let image = req.files.profileProduct;
    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/profile" + imageName, (error) => {
        if (error) return res.status(500).send(error);
        
        let newProduct = new Product({
            nameProduct: req.body.nameProduct,
            categoryProduct: req.body.categoryProduct,
            priceProduct: req.body.priceProduct,
            profileProduct: "http://localhost:3003/profile/" + imageName
        });

        newProduct.save((error) => {
            if (error) {
                res.statusCode(500).send(error);
            }
            else {
                res.json(newProduct);
            }
        });
    });
});

router.delete("/:id", (req, res) => {

    Product.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json({ message: "Data deleted" })
        }
    });

});

router.put("/", (req, res) => {

    let newObj = {
        nameProduct: req.body.nameProduct,
        categoryProduct: req.body.categoryProduct,
        priceProduct: req.body.priceProduct
    };
    Product.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json({ message: "Data Updated" })
        }
    });
});

module.exports = (function () {
    return router;
})();