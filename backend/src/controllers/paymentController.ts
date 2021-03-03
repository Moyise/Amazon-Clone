import { Request, Response } from "express";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const secretKey: any = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(secretKey, { apiVersion: "2020-08-27" });

export const stripePay = async (req: Request, res: Response) => {
  try {
    const { price, token, name } = req.body;

    const idempotencyKey = uuidv4();
    const customer: Stripe.Customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    if (customer) {
      const charge = await stripe.charges.create(
        {
          amount: price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: name,
        },
        { idempotencyKey }
      );
      res.json(charge);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
