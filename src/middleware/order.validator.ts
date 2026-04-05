import { body } from "express-validator";

export const orderValidator = [
  body("portfolio").isArray({ min: 1 }),
  body("portfolio.*.symbol").notEmpty(),
  body("portfolio.*.weight").isFloat({ gt: 0 }),
  body("totalAmount").isFloat({ gt: 0 }),
  body("orderType").isIn(["BUY", "SELL"])
];