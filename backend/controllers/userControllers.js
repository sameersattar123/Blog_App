import HttpError from "../models/errorModel.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, comfirmedPassword } = req.body;
    if (!name || !email || !password || !comfirmedPassword) {
      return next(new HttpError("Fill All Feilds", 422));
    }

    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("Email Already Exists", 422));
    }
    if (password.trim().length < 6) {
      return next(new HttpError("password should bi atlest 6 digits", 422));
    }

    if (password !== comfirmedPassword) {
      return next(new HttpError("Passwords do not match", 422));
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashPassword,
    });
    res.status(201).json(`new User ${newUser.email} registered.`);
  } catch (error) {
    return next(new HttpError("User Registration Failed", 422));
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new HttpError("Fill All Feilds", 422));
    }
    const newEmail = email.toLowerCase();
    const user = await User.findOne({ email: newEmail });
    if (!user) {
      return next(new HttpError("Invalid Credentils", 422));
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return next(new HttpError("Invalid Credentils", 422));
    }

    const { _id: id, name } = user;

    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ token, id, name });
  } catch (error) {
    return next(new HttpError("Login Failed", 422));
  }
};
export const getUser = async (req, res) => {
  res.send("sameer sattar get user");
};
export const getAuthors = async (req, res) => {
  res.send("sameer sattar get authors");
};
export const changeAvatar = async (req, res) => {
  res.send("sameer sattar change avatar");
};
export const editUser = async (req, res) => {
  res.send("sameer sattar edit user ");
};
