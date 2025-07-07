import express from "express"
const router = express.Router();
import { getUserProfile, updateUserProfile } from "../controllers/user.js"
import  authMiddleware from "../middleware/authMiddleware.js";

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

export default router;