import mongoose from "mongoose";

const Water = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quantity_ml: {
    type: Number,
    required: true
  },
  log_date: {
    type: Date,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Water', Water);