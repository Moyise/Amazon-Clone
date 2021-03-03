import { Request, Response } from "express";
import User from "../models/userModel";
import generateToken from "../utils/generateToken";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public

export const authUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

// @desc Auth user & get token
// @route POST /api/users/googlelogin
// @access Public

export const googleAuth = async (req: Request, res: Response) => {
  try {
    //const token = req.body.uc.id_token;
    const email = req.body.profileObj.email;
    const name = req.body.profileObj.name;
    const image = req.body.profileObj.imageUrl;
    const googleId = req.body.googleId;

    const userExist = await User.findOne({ googleId });
    if (userExist) {
      res.json({
        _id: userExist._id,
        name: userExist.name,
        email: userExist.email,
        isAdmin: userExist.isAdmin,
        image: userExist.image,
        token: generateToken(userExist._id),
        createdAt: userExist.createdAt,
        updatedAt: userExist.updatedAt,
      });
    }

    const user = await User.create({
      googleId,
      name,
      email,
      image,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// @desc Auth user & get token
// @route POST /api/users/facebookAuth
// @access Public

export const facebookAuth = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const image = req.body.picture.data.url;
    const facebookId = req.body.id;

    const userExist = await User.findOne({ email });
    if (userExist) {
      res.json({
        _id: userExist._id,
        name: userExist.name,
        email: userExist.email,
        isAdmin: userExist.isAdmin,
        image: userExist.image,
        token: generateToken(userExist._id),
        createdAt: userExist.createdAt,
        updatedAt: userExist.updatedAt,
      });
    }

    const user = await User.create({
      facebookId,
      name,
      email,
      image,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// @desc Register new user
// @route POST /api/users
// @access Public

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "User already exist" });
    }
    const user = await User.create({
      name,
      email,
      password,
      image: "/images/Profile.png",
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// @desc Get user profile
// @route GET /api/users/profile
// @access private

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.body.user._id;
    const user = await User.findById(userId);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

// @desc Update user profile
// @route PUT /api/users/profile
// @access private

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.body.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.image = req.body.image || user.image;
      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        image: updatedUser.image,
        token: generateToken(updatedUser._id),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};
