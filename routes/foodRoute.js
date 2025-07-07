import express from "express"

const router = express.Router();
import { searchFoods }  from "../controllers/food.js";

router.get('/foods', searchFoods);

export default router;