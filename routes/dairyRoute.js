import express from "express";
import { createDiaryEntry, getDailyDashboard, logWater, logWeight } from "../controllers/dairy.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/diary', authMiddleware, createDiaryEntry);
router.get('/dashboard', authMiddleware, getDailyDashboard);
router.post('/water', authMiddleware, logWater);
router.post('/weight', authMiddleware, logWeight);

export default router;
