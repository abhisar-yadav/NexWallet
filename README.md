# NexWallet - A Digital Wallet System with Cash Management and Fraud Detection

Developed a robust digital wallet system that allows users to register, deposit and withdraw virtual cash, and transfer funds to other users. The backend handles transaction processing, includes session security, and integrates basic fraud detection features such as rate limiting and anomaly detection.

## Features

- **User Authentication & Session Management**
  - Secure user registration and login
  - JWT-based authentication
  - Protected routes with middleware
  - Session tracking and last login updates

- **Wallet Operations**
  - Deposit and withdraw virtual cash
  - Transfer funds between users
  - Transaction history with pagination
  - Multiple currency support
  - Real-time balance updates

- **Transaction Processing & Validation**
  - Atomic transactions with MongoDB transactions
  - Balance validation and overdraft protection
  - Transaction status tracking (PENDING, COMPLETED, FAILED)
  - Transaction rollback on failure

- **Fraud Detection**
  - Rule-based fraud detection system
  - Suspicious pattern detection
  - Transaction flagging and monitoring
  - Daily fraud reports
  - Risk scoring for transactions

- **Admin & Reporting**
  - User management and status control
  - Transaction monitoring and flagging
  - System statistics and analytics
  - Fraud reports and risk assessment
  - User activity tracking
 
 - **Additional Features**
  - Create a scheduled job for daily fraud scans and reporting.
  - Implement soft delete for accounts and transactions
  - Add email alerts for large or suspicious transactions (mocked)

## Tech Stack

- Node.js 
- MongoDB 
- npm or yarn
- Git
- Auth | JWT
- API Documentation using Swagger
  
## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd NexWallet
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

4. Set up environment variables:
   ```sh
   cp .env.example .env
   # Edit .env with your configuration
   #MONGO_URI=mongodb+srv://your-atlas-url
   #JWT_SECRET=your-secret-key
   ```

5. Start the application:
   ```sh
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```
## Environment Variables

Create a `.env` file in the root directory with the following variables:
```env
MONGO_URI=mongodb+srv://your-atlas-url
JWT_SECRET=your-secret-key
```
## API Documentation

The API is documented using Swagger UI. Access it at:
- http://localhost:3000/api-docs
