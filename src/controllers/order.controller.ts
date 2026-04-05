import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { splitOrder, getOrders } from "../services/order.service";
import { AppError } from "../utils/appError";
import { OrderRequest } from "../models/order.model";

export const createOrder = (
  req: Request<{}, {}, OrderRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(
        new AppError("Validation failed", 400, errors.array())
      );
    }

    const result = splitOrder(req.body);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const fetchOrders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = getOrders();

    res.status(200).json({
      success: true,
      data: orders
    });
  } catch (error) {
    next(error);
  }
};