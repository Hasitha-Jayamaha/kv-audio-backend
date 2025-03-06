import express from "express";
import { addProduct , getProduct , updateProduct} from "../controllers/productController.js ";
import { deleteProduct } from "../controllers/productcontroller.js";

const productRouter = express.Router();

productRouter.post("/",addProduct)
productRouter.get("/",getProduct)
productRouter.put("/:key",updateProduct)
productRouter.delete("/:key",deleteProduct)

export default productRouter;