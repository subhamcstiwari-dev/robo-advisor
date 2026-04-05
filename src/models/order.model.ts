export interface Stock {
  symbol: string;
  weight: number;
  price?: number;
}

export interface OrderRequest {
  portfolio: Stock[];
  totalAmount: number;
  orderType: "BUY" | "SELL";
}

export interface OrderResponse {
  symbol: string;
  amount: number;
  price: number;
  quantity: number;
}

export const ordersDB: any[] = [];