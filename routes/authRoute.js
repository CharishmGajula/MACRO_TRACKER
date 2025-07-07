import express from "express"


const router = express.Router();
import { registerUser,loginUser } from "../controllers/auth.js"

// @route POST /api/auth/register
router.post('/register', registerUser);
router.post('/login', loginUser);
export default router;