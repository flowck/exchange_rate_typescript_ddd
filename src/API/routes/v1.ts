import { Router } from "express";
import users from "API/routes/users";
import rates from "API/routes/rates";

const router = Router();

router.use("/v1/users", users);
router.use("/v1/rates", rates);

export default router;