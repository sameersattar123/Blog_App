import express from "express"
import { changeAvatar, editUser, getAuthors, getUser, loginUser, registerUser } from "../controllers/userControllers.js";

const router = express.Router()

router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/:id' , getUser)
router.get('/' , getAuthors)
router.patch('/edit-user' , editUser)
router.post('/change-avatar' , changeAvatar)

export default router;