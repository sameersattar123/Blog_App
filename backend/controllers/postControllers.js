
import HttpError from "../models/errorModel.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../models/postModel.js";
const __dirname = path.resolve();



export const createPost = async (req, res, next) => {
  try {
    const { title ,  } = req.body
  } catch (error) {
    return next(new HttpError(error));
  }
};
export const getPosts = async (req, res, next) => {
  res.json("sameer get posts");
};
export const getPost = async (req, res, next) => {
  res.json("sameer get post");
};
export const getCategoryPosts = async (req, res, next) => {
  res.json("sameer get category posts");
};
export const getUserPosts = async (req, res, next) => {
  res.json("sameer get users posts");
};
export const editPost = async (req, res, next) => {
  res.json("sameer edit posts");
};
export const deletePost = async (req, res, next) => {
  res.json("sameer delete posts");
};
