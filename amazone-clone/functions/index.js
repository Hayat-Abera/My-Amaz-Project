const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
   message: "success!"
   });
});


app.post("/payment/create", async(req, res) => {
    //  Initialize Stripe inside the function handler.
    // This prevents the global scope from timing out on startup.
    const stripe = require("stripe")(process.env.STRIPE_KEY);

    const total = req.query.total;
    if (total > 0) {
      
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: "usd",
            });
            //  Respond with the clientSecret, as this is what the frontend needs.
            res.status(201).json({
                clientSecret: paymentIntent.client_secret,
            });

            // res.status(201).json(paymentIntent);
            // console.log(paymentIntent)
        
    } else {
  
        res.status(403).json({
            message: "Total must be greater than 0",
        });
    }
});


// Export Express app as Cloud Function
exports.api = onRequest(app);

// Set global options if needed, but not required for function to run.
setGlobalOptions({ maxInstances: 100});