const mongoose = require('mongoose');


const MenSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100M"
    }
});


const MensRanking = new mongoose.model('MensRanking', MenSchema);


module.exports = MensRanking;