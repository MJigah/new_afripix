const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add a name"],
    },
    lastname: {
      type: String,
      required: [true, "Please add a name"],
    },
    username: {
      type: String,
      required: [true, "Please add a name"],
    },
    biodata: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    userProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
    },
    images: [
      {
        unique: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
    imageCollections: [
      {
        unique: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
