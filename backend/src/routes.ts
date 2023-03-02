import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { AddItemController } from "./controllers/order/AddItemController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//User Routes

router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

//Category Routes

router.post("/category", isAuthenticated, new CreateCategoryController().handle);

router.get("/category", isAuthenticated, new ListCategoriesController().handle);

//Product Routes

router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);

router.get("/category/product", isAuthenticated, new ListByCategoryController().handle);

//Order Routes

router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

router.post("/order/item", isAuthenticated, new AddItemController().handle);

router.delete("/order/item", isAuthenticated, new RemoveItemController().handle);

router.put("/order/send", isAuthenticated, new SendOrderController().handle);

router.get("/orders", isAuthenticated, new ListOrdersController().handle);

router.get("/order/detail", isAuthenticated, new DetailOrderController().handle);

router.put("/order/finish", isAuthenticated, new FinishOrderController().handle);

export { router };
