import { Router } from "express";
import selfish from "Infrastructure/utils/selfish";
import RateController from "API/http/controllers/v1/RateController";

const router = Router();
const controller = selfish(new RateController());

router.get("/", controller.getRates);
router.post("/", controller.registRate);

export default router;
