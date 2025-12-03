import { Router } from "express";

import categoryRoutes from "../modules/category/category.routes";
import productRoutes from "../modules/product/product.routes";
import orderRoutes from "../modules/order/order.routes";
import orderItemRoutes from "../modules/orderItem/orderItem.routes";
import customerRoutes from "../modules/customer/customer.routes";


const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/products", productRoutes);
routes.use("/orders", orderRoutes);
routes.use("/orderItem", orderItemRoutes);
routes.use("/clientes", customerRoutes );

export default routes;
