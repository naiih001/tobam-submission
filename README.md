# Card Validation Service

A production-ready Node.js Express application that validates credit card numbers using the Luhn algorithm.

## Features

- **Luhn Algorithm Implementation**: Core logic for validating credit card numbers.
- **TypeScript**: Fully typed for better developer experience and reliability.
- **Node.js Compatible**: Migrated from Bun to standard Node.js environment.
- **RESTful API**: Simple POST endpoint for validation.
- **Comprehensive Testing**: Unit tests powered by Vitest.

## Tech Stack

- **Runtime**: [Node.js](https://nodejs.org)
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Execution**: [tsx](https://github.com/privatenumber/tsx) (for running TypeScript directly)

## Project Structure

```text
src/
  app.ts              # Express application setup
  routes/
    card.routes.ts    # POST /api/validate route
  services/
    luhn.service.ts   # Core Luhn algorithm logic
  middleware/
    errorHandler.ts   # Global error handling
  dto/
    validate-card.dto.ts  # Request data shapes
index.ts              # Server entry point
tests/                # Test suite
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Running the Application

#### Production
```bash
npm start
```

#### Development (Watch Mode)
```bash
npm run dev
```

The server will start on `http://localhost:3000`.

### API Endpoints

#### POST `/api/validate`

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

## Quality Control

### Running Tests
```bash
npm test
```

### Type Checking
```bash
npx tsc --noEmit
```
