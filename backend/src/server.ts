import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import orderRoutes from "./routes/orderRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import paymentRoutes from "./routes/paymentRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.use("/api/stripe", paymentRoutes);

if (process.env.NODE_ENV === "production") {
  //   const root = path.join("frontend", "build");
  //   app.use(express.static(root));
  //   app.get("*", (req, res) => res.sendFile("index.html", { root }));

  app.get("/", (req, res) => res.send("API is running..."));
} else {
  app.get("/", (req, res) => res.send("API is running..."));
}

app.listen(PORT, () => console.log(`Amazon app listening on port ` + PORT));
