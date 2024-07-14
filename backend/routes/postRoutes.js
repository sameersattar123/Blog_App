import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getCategoryPosts,
  getPost,
  getPosts,
  getUserPosts,
} from "../controllers/postControllers.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/categories/:category", getCategoryPosts);
router.get("/users/:id", getUserPosts);
router.patch("/:id", editPost);
router.delete("/:id", deletePost);

export default router;
