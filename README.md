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
  - Transaction history per user
  - Multiple currency support
  - Real-time balance updates

- **Transaction Processing & Validation**
  - Atomic transactions with MongoDB transactions
  - Added validations (e.g., prevent overdrafts, negative deposits, or invalid transfers)

- **Fraud Detection**
  - Rule-based fraud detection system
  - Suspicious withdrawals
  - Transaction flagging and monitoring based on time period

- **Admin & Reporting**
  - User management and status control
  - View Top Users by balance
  - Total balance across all users per currency
  - Fraud reports and risk assessment
  - User activity tracking

 - **Bonus Features**
   - Created a scheduled job for daily fraud scans and reporting.
   - Implemented soft delete for accounts and transactions
   - Added email alerts for large or suspicious transactions (mocked)


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
- http://localhost:5000/api-docs

## API Endpoints
### Authentication
#### Register a User
- **Endpoint:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:** "Message": "User registered"

#### Login
- **Endpoint:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:** JWT token

### Wallet Operations
#### Deposit Funds
- **Endpoint:** `POST /api/wallet/deposit`
- **Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`
- **Body:**
  ```json
  {
    "amount": 200,
    "currency": "EUR"
  }
  ```
- **Response:** Transaction details

#### Withdraw Funds
- **Endpoint:** `POST /api/wallet/withdraw`
- **Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`
- **Body:**
  ```json
  {
    "amount": 60,
    "currency": "GBP"
  }
  
  ```
- **Response:** Transaction details

#### Transfer Funds
- **Endpoint:** `POST /api/wallet/transfer`
- **Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`
- **Body:**
  ```json
  {
    "toUsername": "john_doe",
    "amount": 120,
    "currency": "INR"
  }
  ```
- **Response:** Transaction details

#### Get Transaction History
- **Endpoint:** `GET /api/wallet/history`
- **Headers:** `Authorization: Bearer YOUR_JWT_TOKEN`



### Admin Endpoints
#### Get Flagged Transactions
- **Endpoint:** `GET /api/admin/flagged`
- **Headers:** `Authorization: Bearer YOUR_ADMIN_JWT_TOKEN`
- **Response:** List of flagged transactions


#### View total balances across all users per currency
- **Endpoint:** `GET /api/admin/total-balances`
- **Headers:** `Authorization: Bearer YOUR_ADMIN_JWT_TOKEN`
- **Response:** Total balances per currency
  
#### Get Top Users
- **Endpoint:** `GET /api/admin/top-users`
- **Headers:** `Authorization: Bearer YOUR_ADMIN_JWT_TOKEN`
- **Response:** Top users by wallet 

#### Soft-delete a user account
- **Endpoint:** `DELETE /api/admin/user/$username`
- **Headers:** `Authorization: Bearer YOUR_ADMIN_JWT_TOKEN`
- **Response:** Message - User soft-deleted or User not found based on input.


#### Soft-delete a transaction
- **Endpoint:** `DELETE /api/admin/transaction/$id`
- **Headers:** `Authorization: Bearer YOUR_ADMIN_JWT_TOKEN`
- **Response:** Message - Transaction soft-deleted or Transaction not found based on input.




## Error Handling

The API uses standard HTTP status codes and returns error responses in the following format:

```json
{
  "status": "error",
  "message": "Error description",
 
}
```

Common status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error


## Mock Email Notifications

- Email notifications are simulated through Nodemailer.

- The email content will be displayed directly in the console output.

## Automated Fraud Check
A background fraud check is scheduled to execute every day at 4:00 AM using node-cron. It identifies and flags:

- Any withdrawal exceeding $50000

- Users making 10 or more transfers in a 24-hour period
