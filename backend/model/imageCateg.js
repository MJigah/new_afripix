const mongoose = require("mongoose");

var imageCategSchema = new mongoose.Schema({
    name: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
    imageId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ]
});

var imageCateg = mongoose.model("imageCategory", imageCategSchema);

module.exports = imageCateg;