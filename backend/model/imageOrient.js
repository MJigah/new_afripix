const mongoose = require("mongoose");

var imageOrientSchema = new mongoose.Schema({
    name: String,
    orientationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orientation",
    },
    imageId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ]
});

var imageOrient = mongoose.model("imageOrientation", imageOrientSchema);

module.exports = imageOrient;