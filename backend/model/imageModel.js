const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      unique: true,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    imageBase64: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    imageCategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    imageOrientation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orientation",
    },
    visited: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;