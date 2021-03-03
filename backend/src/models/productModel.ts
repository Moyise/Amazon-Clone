import { model, Schema, Model, Document, Types } from "mongoose";

interface IProduct extends Document {
  user: Types.ObjectId | Record<string, unknown>;
  name: string;
  image: string;
  images: string[];
  brand: string;
  category: string;
  description: string;
  reviews: object[];
  rating: number;
  numReviews: number;
  countInStock: number;
  price: number;
}

const reviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    image: { type: String, required: true },
    user: { type: Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const productSchema: Schema = new Schema(
  {
    user: { type: Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    image: { type: String, required: true },
    images: [{ type: String, required: true }],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product: Model<IProduct> = model("Product", productSchema);

export default Product;
