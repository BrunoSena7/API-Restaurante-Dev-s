import { Router } from "express";
import { CategoryController } from "../modules/categories/category.controller";

const categoryRoutes = Router();
const controller = new CategoryController();

categoryRoutes.get("/", controller.getAll);
categoryRoutes.get("/:id", controller.getById);
categoryRoutes.post("/", controller.create);
categoryRoutes.put("/:id", controller.update);
categoryRoutes.delete("/:id", controller.delete);

export default categoryRoutes;