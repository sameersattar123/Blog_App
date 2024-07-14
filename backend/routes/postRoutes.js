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
import authMiddelware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/categories/:category", getCategoryPosts);
router.get("/users/:id", getUserPosts);
router.patch("/:id", authMiddelware ,  editPost);
router.delete("/:id", authMiddelware , deletePost);

export default router;
