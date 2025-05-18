const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { deposit, withdraw, transfer, history } = require("../controllers/walletController");

/**
 * @swagger
 * /api/wallet/deposit:
 *   post:
 *     summary: Add funds to the user's wallet
 *     tags: [Wallet]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - currency
 *             properties:
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *           example:
 *             amount: 200
 *             currency: "EUR"
 *     responses:
 *       200:
 *         description: Funds deposited successfully
 */
router.post("/deposit", auth, deposit);

/**
 * @swagger
 * /api/wallet/withdraw:
 *   post:
 *     summary: Remove funds from the user's wallet
 *     tags: [Wallet]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - currency
 *             properties:
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *           example:
 *             amount: 60
 *             currency: "GBP"
 *     responses:
 *       200:
 *         description: Withdrawal completed successfully
 */
router.post("/withdraw", auth, withdraw);

/**
 * @swagger
 * /api/wallet/transfer:
 *   post:
 *     summary: Send funds to another user
 *     tags: [Wallet]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - toUsername
 *               - amount
 *               - currency
 *             properties:
 *               toUsername:
 *                 type: string
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *           example:
 *             toUsername: "john_doe"
 *             amount: 120
 *             currency: "INR"
 *     responses:
 *       200:
 *         description: Transfer completed successfully
 */
router.post("/transfer", auth, transfer);

/**
 * @swagger
 * /api/wallet/history:
 *   get:
 *     summary: Retrieve transaction history for the authenticated user
 *     tags: [Wallet]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Transaction history fetched successfully
 */
router.get("/history", auth, history);

module.exports = router;