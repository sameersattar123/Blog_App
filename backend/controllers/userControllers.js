import HttpError from "../models/errorModel.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
const __dirname = path.resolve();

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
      expiresIn: "1d",
    });

    res.status(200).json({ token, id, name });
  } catch (error) {
    return next(new HttpError("Login Failed", 422));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return next(new HttpError("User not found", 404));
    }

    res.status(200).json(user);
  } catch (error) {
    return next(new HttpError(error));
  }
};
export const getAuthors = async (req, res, next) => {
  try {
    const authors = await User.find().select("-password");
    res.status(200).json(authors);
  } catch (error) {
    return next(new HttpError(error));
  }
};
export const changeAvatar = async (req, res, next) => {
  try {
    if (!req.files.avatar) {
      return next(new HttpError("Please choose a image", 422));
    }
    const user = await User.findById(req.user.id);
    if (user.avatar) {
      fs.unlink(
        path.join(__dirname, "..", "uploads", user.avatar, (error) => {
          if (error) {
            return next(new HttpError(error));
          }
        })
      );
    }

    const { avatar } = req.files;
    if (avatar.size > 500000) {
      return next(new HttpError("Profile pic to big", 422));
    }

    let fileName;
    fileName = avatar.name;
    let splittedFileName = fileName.split(".");
    let newFileName =
      splittedFileName[0] +
      uuidv4() +
      "." +
      splittedFileName[splittedFileName.length - 1];
    avatar.mv(
      path.join(__dirname, "..", "uploads", newFileName),
      async (error) => {
        if (error) {
          return next(new HttpError(error));
        }

        const updatedAvatar = await User.findByIdAndUpdate(
          req.user.id,
          { avatar: newFileName },
          { new: true }
        );
        if (!updatedAvatar) {
          return next(new HttpError("Avatar couidnot be changes", 422));
        }
        res.status(200).json(updatedAvatar);
      }
    );
  } catch (error) {
    return next(new HttpError(error));
  }
};
export const editUser = async (req, res, next) => {
  try { 
    const { name, email, currentPassword, newPassword, comfirmedNewPassword } =
      req.body;
    if (!name || !email || !currentPassword || !newPassword) {
      return next(new HttpError("Fill All Feilds", 422));
    }

    const user = await User.findById(req.user.id); 
    if (!user) { 
      return next(new HttpError("User not found", 404));
    }

    const emailExists = await User.findOne({ email });
    if (emailExists && (emailExists._id !=  req.user.id)) {
      return next(new HttpError("Email Already Exists", 422));
    }

    const validateUserPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!validateUserPassword) {
      return next(new HttpError("Invalid Password", 422));
    }
    if (newPassword !== comfirmedNewPassword) {
      return next(new HttpError("new password do not match", 422));
    }

    const salt = await bcrypt.genSalt(10); 
    const hash = await bcrypt.hash(newPassword, salt);

    const newInfo = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, password: hash },
      { new: true }
    );

    res.status(200).json(newInfo);
  } catch (error) {
    return next(new HttpError(error));
  }
}; 
