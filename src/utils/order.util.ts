import { CONFIG } from "../config/config";

export const formatQuantity = (value: number): number => {
  return parseFloat(value.toFixed(CONFIG.DECIMAL_PRECISION));
};

export const getExecutionDate = (): Date => {
  const now = new Date();
  const day = now.getDay();

  if (day === 6) now.setDate(now.getDate() + 2);
  if (day === 0) now.setDate(now.getDate() + 1);

  return now;
};