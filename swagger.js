const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NexWallet API",
      version: "1.0.0",
    },
    tags: [
      { name: "Auth", description: "User Registration and Login" },
      { name: "Admin", description: "Admin Operations and Reports" },
      { name: "Wallet", description: "Wallet Operations (Deposit, Withdraw, Transfer)" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Transaction: {
          type: "object",
          properties: {
            _id: { type: "string" },
            type: { type: "string", enum: ["deposit", "withdraw", "transfer"] },
            from: { type: "string", nullable: true },
            to: { type: "string", nullable: true },
            currency: { type: "string" },
            amount: { type: "number" },
            createdAt: { type: "string", format: "date-time" },
            flagged: { type: "boolean" },
            reason: { type: "string", nullable: true },
            deleted: { type: "boolean" }
          },
          example: {
            _id: "a7c9d523f18b49e2d4567abc",
            type: "deposit",
            from: null,
            to: "a7c9d523f18b49e2d4567abd",
            currency: "EUR",
            amount: 2500,
            createdAt: "2025-05-18T10:30:00Z",
            flagged: false,
            reason: null,
            deleted: false
          }

        }
      }
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.js"], 
};

const specs = swaggerJsdoc(options);

module.exports = function (app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};