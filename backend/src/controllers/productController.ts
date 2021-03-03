import { Request, Response } from "express";
import Product from "../models/productModel";

//@desc Fetch all products
//@route GET /api/products
//@access Public

export const getProducts = async (req: Request, res: Response) => {
  try {
    let keyword: any;

    if (req.query.keyword === "accessories") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "cellphones") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "playstation5") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "gps") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "headphones") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "monitors") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "scanners") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "laptopaccessories") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "datastorage") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "amazonsmarthome") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "smarthomelighting") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "smartlocks") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "securitycameras") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "games") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "xboxseriesx") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else if (req.query.keyword === "nintendoswitch") {
      keyword = req.query.keyword
        ? { category: { $regex: req.query.keyword, $options: "i" } }
        : {};
    } else {
      keyword = req.query.keyword
        ? { name: { $regex: req.query.keyword, $options: "i" } }
        : {};
    }

    const products = await Product.find({ ...keyword });

    res.json({ products });
  } catch (error) {
    res.status(404).json({ message: "No Products Found" });
  }
};

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public

export const getProductsById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (product) {
      res.json(product);
    }
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};

// @desc Create a new review
// @route POST /api/products/:id/reviews
// @access Private

export const createProductReview = async (req: Request, res: Response) => {
  try {
    const { title, rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r: any) => r.user.toString() === req.body.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error();
      }

      const review = {
        name: req.body.user.name,
        image: req.body.user.image,
        title,
        rating: Number(rating),
        comment,
        user: req.body.user._id,
      };

      product.reviews.push(review);

      product.numReviews = product.reviews.length;

      product.rating =
        product.reviews.reduce((acc, item: any) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();

      res.status(201).json({ message: "Review added" });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Product already reviewed" });
  }
};
