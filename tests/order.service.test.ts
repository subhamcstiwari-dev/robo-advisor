import { splitOrder } from "../src/services/order.service";

describe("Order Service", () => {
  it("should split order correctly", () => {
    const input = {
      portfolio: [
        { symbol: "AAPL", weight: 60 },
        { symbol: "TSLA", weight: 40 }
      ],
      totalAmount: 100,
      orderType: "BUY" as const
    };

    const result = splitOrder(input);

    expect(result.orders.length).toBe(2);
    expect(result.orders[0].amount).toBe(60);
    expect(result.orders[1].amount).toBe(40);
  });

  it("should use default price when not provided", () => {
    const input = {
      portfolio: [{ symbol: "TSLA", weight: 100 }],
      totalAmount: 100,
      orderType: "BUY" as const
    };

    const result = splitOrder(input);

    expect(result.orders[0].price).toBe(100);
  });

  it("should throw error if weights not 100", () => {
    const input = {
      portfolio: [
        { symbol: "AAPL", weight: 70 },
        { symbol: "TSLA", weight: 20 }
      ],
      totalAmount: 100,
      orderType: "BUY" as const
    };

    expect(() => splitOrder(input)).toThrow();
  });
});