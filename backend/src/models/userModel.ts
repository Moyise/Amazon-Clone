import { model, Schema, Model, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  image: string;
  googleId?: string;
  facebookId?: string;
  matchPassword?: any;
  token?: any;
  createdAt?: any;
  updatedAt?: any;
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    isAdmin: { type: Boolean, required: true, default: false },
    image: { type: String, required: false },
    googleId: { type: String, required: false },
    facebookId: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password!);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User: Model<IUser> = model("User", userSchema);

export default User;
