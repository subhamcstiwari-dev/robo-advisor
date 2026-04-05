import request from "supertest";
import express from "express";
import orderRoutes from "../src/routes/order.routes";
import { errorHandler } from "../src/middleware/error.middleware";

const app = express();
app.use(express.json());
app.use("/orders", orderRoutes);
app.use(errorHandler);

describe("Order API", () => {
  it("should create order successfully", async () => {
    const res = await request(app)
      .post("/orders/split")
      .send({
        portfolio: [
          { symbol: "AAPL", weight: 60 },
          { symbol: "TSLA", weight: 40 }
        ],
        totalAmount: 100,
        orderType: "BUY"
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should fail validation", async () => {
    const res = await request(app)
      .post("/orders/split")
      .send({
        portfolio: [],
        totalAmount: -10,
        orderType: "INVALID"
      });

    expect(res.status).toBe(400);
  });
});