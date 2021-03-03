import { model, Schema, Model, Document, Types } from "mongoose";

interface IOrder extends Document {
  user: Types.ObjectId | Record<string, unknown>;
  orderItems: [
    {
      name: string;
      image: string;
      qty: number;
      price: number;
      product: Types.ObjectId | Record<string, unknown>;
    }
  ];
  shippingAddress: {
    country: string;
    name: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    phone: string;
  };
  paymentMethod: string;
  paymentResult: {
    id?: string;
    status?: string;
    email_address?: string;
    email_address2?: string;
  };
  itemsPrice: number;
  shippingPrice: number;
  TBC: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: any;
  isDelivered: boolean;
  deliveredAt: any;
}

const orderSchema: Schema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
      name: { type: String, required: true },
      province: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String, required: false },
      status: { type: String, required: false },
      email_address: { type: String, required: false },
      email_address2: { type: String, required: false },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    TBC: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order: Model<IOrder> = model("Order", orderSchema);

export default Order;
