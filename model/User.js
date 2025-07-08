import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const User = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Please enter the emailId'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address']
    },

    password: {
        type: String,
        required: [true, 'Please enter the password'],
        minlength: 6,
        select: false 
    },

    name: {
        type: String,
        required: [true, 'Please provide a name']
    },


    target_calories: { type: Number, default: 2000 },
    target_protein: { type: Number, default: 150 },
    target_carbs: { type: Number, default: 200 },
    target_fat: { type: Number, default: 70 },
    target_water: { type: Number, default: 3000 },
}, { timestamps: true });


User.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

});


User.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', User);
