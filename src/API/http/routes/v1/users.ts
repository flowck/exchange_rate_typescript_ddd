import { Router } from "express";
import * as userGuards from "API/http/guards/users";
import selfish from "Infrastructure/utils/selfish";
import { validate as guard } from "express-validation";
import UserController from "API/http/controllers/v1/UserController";

const router = Router();
const controller = selfish(new UserController());

router.get("/", controller.getUser);
router.get("/login", guard(userGuards.login), controller.login);

export default router;
