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
    const { title, description, category } = req.body;

    if (!title || !description || !category || !req.files) {
      return next(
        new HttpError("Fill in all Feilds and Choose thumbnail", 422)
      );
    }

    const { thumbnail } = req.files;

    if (thumbnail.size > 200000) {
      return next(new HttpError("file is to big"));
    }

    let fileName;
    fileName = thumbnail.name;
    let splittedFileName = fileName.split(".");
    let newFileName =
      splittedFileName[0] +
      uuidv4() +
      "." +
      splittedFileName[splittedFileName.length - 1];
    thumbnail.mv(
      path.join(__dirname, "..", "/uploads", newFileName),
      async (error) => {
        if (error) {
          return next(new HttpError(error));
        } else {
          const newPost = await Post.create({
            title,
            description,
            category,
            thumbnail: newFileName,
            creator: req.user.id,
          });
          if (!newPost) {
            return next(new HttpError("post couldnot be created"));
          }

          // find user and increase post count by 1

          const currentUser = await User.findById(req.user.id);
          const userPostCount = currentUser.posts + 1;
          await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });
          res.status(201).json(newPost);
        }
      }
    );
  } catch (error) {
    return next(new HttpError(error));
  }
};
export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ updatedAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
};
export const getPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return next(new HttpError('Post not found' , 422));
    }   
    res.status(200).json(post);
  } catch (error) {
    return next(new HttpError(error));
  } 
};
export const getCategoryPosts = async (req, res, next) => {
  try {
    const category =  req.params.category;
    const post = await Post.find({category}).sort({updatedAt : -1})
    if (!post) { 
      return next(new HttpError('Post not found' , 422));
    }  
    res.status(200).json(post);
    
  } catch (error) {
    return next(new HttpError(error));
  }
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
