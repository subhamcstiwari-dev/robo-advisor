import { CONFIG } from "../config/config";
import { ordersDB } from "../models/order.model";
import { OrderRequest, OrderResponse } from "../models/order.model";
import { AppError } from "../utils/appError";
import { formatQuantity, getExecutionDate } from "../utils/order.util";

interface StoredOrder {
  id: number;
  orders: OrderResponse[];
  executionDate: Date;
  createdAt: Date;
}

export const splitOrder = (data: OrderRequest): StoredOrder => {
  const { portfolio, totalAmount } = data;

  const totalWeight = portfolio.reduce(
    (sum, stock) => sum + stock.weight,
    0
  );

  if (totalWeight !== 100) {
    throw new AppError("Weights must sum to 100", 400);
  }

  const orders: OrderResponse[] = portfolio.map((stock) => {
    const price = stock.price ?? CONFIG.DEFAULT_PRICE;

    const amount = (totalAmount * stock.weight) / 100;
    const quantity = formatQuantity(amount / price);

    return {
      symbol: stock.symbol,
      amount,
      price,
      quantity
    };
  });

  const result: StoredOrder = {
    id: Date.now(),
    orders,
    executionDate: getExecutionDate(),
    createdAt: new Date()
  };

  ordersDB.push(result);

  return result;
};

export const getOrders = (): StoredOrder[] => {
  return ordersDB;
};