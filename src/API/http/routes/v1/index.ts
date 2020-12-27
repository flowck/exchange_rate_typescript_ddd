import { Router } from "express";
import users from "API/http/routes/v1/users";
import rates from "API/http/routes/v1/rates";

const router = Router();

router.use("/v1/users", users);
router.use("/v1/rates", rates);

export default router;
