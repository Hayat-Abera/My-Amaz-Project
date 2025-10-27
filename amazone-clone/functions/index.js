const { setGlobalOptions } = require("firebase-functions/v2");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Limit instance count to control cost
setGlobalOptions({ maxInstances: 100 });

// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Successfully loaded!",
  });
});

// Payment route
app.post("/payment/create", async (req, res) => {
  try {
    const total = parseInt(req.query.total);
    if (!total || total <= 0) {
      return res.status(400).json({
        message: "Total payment must be greater than zero",
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Export the Express app as an HTTPS function
exports.api = onRequest(app);
