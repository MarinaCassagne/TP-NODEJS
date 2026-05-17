import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/all", productController.getAllProducts);
router.get("/", productController.getcreateProductView);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
