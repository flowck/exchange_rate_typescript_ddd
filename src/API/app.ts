/**
 * exchange_rate
*/
import apiV1 from "./v1";
import helmet from "helmet";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import { ENV } from "Infrastructure/constants";
import guardErrors from "./middleware/guardsErrors";

const app = express();
const { NODE_ENV } = process.env;
const PORT = Number(NODE_ENV) || 8080;

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

app.use("/api", apiV1);

app.use(guardErrors);

if (NODE_ENV !== ENV.TEST) app.listen(PORT, () => console.log(`exchange_rate service up at ${PORT} port.`));

export default app;
