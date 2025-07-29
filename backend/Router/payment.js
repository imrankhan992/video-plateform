const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const express = require("express");
const cookieParser = require("cookie-parser");
const Payment = express.Router();
Payment.use(cookieParser());



const Stripe = require('stripe');
const stripe = Stripe(`${process.env.STRIPE_KEY}`);

console.log(process.env.STRIPE_KEY, "Stripe Key Loaded");

Payment.post('/api/create-checkout-session', async (req, res) => {
  const { amount } = req.body; // e.g., 5, 10, 20

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: amount * 100, // $5 ➜ 500 cents
          product_data: {
            name: `Donation of $${amount}`,
          },
        },
        quantity: 1,
      },
    ],
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/cancel',
  });

  res.json({ url: session.url });
});

module.exports = Payment;