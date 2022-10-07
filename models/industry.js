const mongoose = require("mongoose");


const industrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
    },
    description: {
        type: String,
        default: null,
        maxlength: 300,
    },
    canclationTime: {
        type: Number,
        default: null,
    },
    allowPayment: {
        type: Boolean,
        default: false,
    }
})

const IndustryModel = mongoose.model("industry", industrySchema);

module.exports = IndustryModel;