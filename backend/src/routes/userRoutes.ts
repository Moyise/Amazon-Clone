import express from "express";
import {
  authUser,
  getUserProfile,
  googleAuth,
  registerUser,
  updateUserProfile,
  facebookAuth,
} from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/signin", authUser);
router.post("/googlelogin", googleAuth);
router.post("/facebooklogin", facebookAuth);
router.route("/").post(registerUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
