import mongoose from "mongoose";

const Food = new mongoose.Schema({
    name: { type: String, required: true, index: true }, 
    serving_unit: { type: String, required: true, default: 'g' },
    calories_per_unit: { type: Number, required: true },
    protein_per_unit: { type: Number, required: true },
    carbs_per_unit: { type: Number, required: true },
    fat_per_unit: { type: Number, required: true },
    micronutrients: { type: mongoose.Schema.Types.Mixed }, 
    is_veg: { type: Boolean, default: false }
});

export default mongoose.model('Food', Food);
