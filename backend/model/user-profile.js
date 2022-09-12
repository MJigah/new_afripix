const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    contentType: {
        type: String,
        required: true
    },
    imageBase64: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("userProfile", profileSchema);