import { Router } from "express";
import { CategoryController } from "../modules/category/category.controller";

const categoryRoutes = Router();
const controller = new CategoryController();

categoryRoutes.get("/", controller.list.bind(controller));
categoryRoutes.get("/:id", controller.show.bind(controller));
categoryRoutes.post("/", controller.create.bind(controller));
categoryRoutes.put("/:id", controller.update.bind(controller));
categoryRoutes.delete("/:id", controller.delete.bind(controller));

export default categoryRoutes;