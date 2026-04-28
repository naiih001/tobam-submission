# Card Validation Service

A simple Express application that validates credit card numbers using the Luhn algorithm.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your machine.

### Installation

```bash
bun install
```

### Running the Application

```bash
bun run index.ts
```

The server will start on `http://localhost:3000`.

### API Endpoints

#### POST /api/validate

Validates a credit card number.

**Request Body:**

```json
{
  "cardNumber": "49927398716"
}
```

**Response:**

```json
{
  "success": true,
  "isValid": true
}
```

### Running Tests

```bash
bun test
```
