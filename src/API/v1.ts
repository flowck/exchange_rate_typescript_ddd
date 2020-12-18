import { Router } from "express";
import { userRoutes } from "./controllers/UserController";
import { ratesRoutes } from "./controllers/RateController";

const router = Router();

router.use("/v1/users", userRoutes);
router.use("/v1/rates", ratesRoutes);

export default router;