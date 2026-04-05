import express from "express";
import orderRoutes from "./routes/order.routes";
import { logger } from "./middleware/logger.middleware";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use(logger);

app.use("/orders", orderRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server running on port 3000"));