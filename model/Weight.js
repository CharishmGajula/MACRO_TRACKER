import mongoose from "mongoose";

const Weight = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weight_kg: {
    type: Number,
    required: true
  },
  log_date: {
    type: Date,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Weight', Weight);