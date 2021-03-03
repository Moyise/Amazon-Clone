import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products";
import users from "./data/users";
import Product from "./models/productModel";
import User from "./models/userModel";
import connectDB from "./config/db";
import Order from "./models/orderModel";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts: any = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
