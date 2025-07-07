import mongoose from "mongoose";

const Diary = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food', 
        required: true
    },

    quantity: { type: Number, required: true },
    meal_type: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
        required: true
    },

    log_date: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model('Diary', Diary);