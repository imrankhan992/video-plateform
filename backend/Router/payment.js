require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const Payment = express.Router();
Payment.use(cookieParser());



const Stripe = require('stripe');
const stripe = Stripe('sk_test_51PX0FHLhXKwMvDT9RIsWf3w4ZK0qdPXajDHjvcffavOlf3VuPZZ1XeikM4TgArFBTCMZDSBNRESkwCjiWmZlHKvB00pztnZ98m'); // Keep secret!

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