## 🚀 Overview

This project implements a backend API for a **robo-advisor system** that automates investment order splitting based on a model portfolio.

The API:

* Accepts a portfolio with stock allocations
* Splits the total investment amount based on weights
* Calculates number of shares
* Determines execution date (market days)
* Stores historic orders (in-memory)

---

## 🛠️ Tech Stack

* Node.js
* TypeScript
* Express.js
* Jest (Testing)
* Supertest (API testing)
* express-validator (Validation)

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```
npm install
```

---

### 2️⃣ Run the server

```
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

---

### 🔹 Create Order

**POST** `/orders/split`

#### Request Body

```json
{
  "portfolio": [
    { "symbol": "AAPL", "weight": 60, "price": 150 },
    { "symbol": "TSLA", "weight": 40 }
  ],
  "totalAmount": 100,
  "orderType": "BUY"
}
```

---

#### Response

```json
{
  "success": true,
  "data": {
    "id": 1712300000000,
    "orders": [
      {
        "symbol": "AAPL",
        "amount": 60,
        "price": 150,
        "quantity": 0.4
      },
      {
        "symbol": "TSLA",
        "amount": 40,
        "price": 100,
        "quantity": 0.4
      }
    ],
    "executionDate": "2026-04-06T..."
  }
}
```

---

### 🔹 Get All Orders

**GET** `/orders`

---

## ⚙️ Features

* Order splitting based on weights
* Supports BUY and SELL
* Default stock price = 100
* Configurable decimal precision
* Weekday execution logic
* In-memory storage
* Performance logging
* Input validation
* Centralized error handling

---

## 🧪 Testing

This project includes both **unit tests** and **API integration tests**.

---

### ✅ Tools Used

* Jest
* ts-jest
* Supertest

---

### ▶️ Run Tests

```
npm test
```

---

### ✅ Test Coverage Includes

* Order splitting logic
* Weight validation
* Default price handling
* API validation
* Error scenarios

---

### 📌 Example Test

```ts
it("should split order correctly", () => {
  const input = {
    portfolio: [
      { symbol: "AAPL", weight: 60 },
      { symbol: "TSLA", weight: 40 }
    ],
    totalAmount: 100,
    orderType: "BUY"
  };

  const result = splitOrder(input);

  expect(result.orders.length).toBe(2);
});
```

---

## 🧠 Assumptions

* Portfolio weights sum to 100%
* Default price = 100 if not provided
* Fractional shares allowed
* Orders execute only on weekdays
* Data is not persisted

---

## ⚠️ Error Handling

* Validation errors → 400
* Custom error class used
* Global error middleware

---

## 📊 Performance Logging

Each API request logs execution time:

```
POST /orders/split - 3ms
```

---

## 🚀 Future Improvements

* Add database (MongoDB/PostgreSQL)
* Integrate real-time stock APIs
* Add authentication
* Add rate limiting
* Add Swagger docs
* Improve test coverage
* Add logging system (Winston)

---

## 🏆 Conclusion

This solution demonstrates:

* Clean architecture
* Strong TypeScript usage
* Production-level validation
* Scalable backend design
* Proper testing strategy

---

## 👨‍💻 Author

Subham Tiwari
