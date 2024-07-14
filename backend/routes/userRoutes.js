import express from "express"
import { changeAvatar, editUser, getAuthors, getUser, loginUser, registerUser } from "../controllers/userControllers.js";
import authMiddelware from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/:id' , getUser)
router.get('/' , getAuthors)
router.patch('/edit-user' , editUser)
router.post('/change-avatar' , authMiddelware ,  changeAvatar)

export default router;