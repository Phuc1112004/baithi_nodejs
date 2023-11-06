const express = require("express");
const router = express.Router();
const controller = require("../controller/auth.controller");

router.get("/create",controller.product);
router.post("/create",controller.postProduct);

// router.get("/product/edit/:id", controller.editProduct);
router.put("/product/edit/:id", controller.putProduct);


router.get("/product/delete/:id", controller.deleteProduct)


module.exports = router;