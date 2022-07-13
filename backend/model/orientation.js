const mongoose = require("mongoose");

const orientationSchema = new mongoose.Schema({
   name: {
       type: String,
       unique: true,
       required: true
   },
   visits: {
    type: Number,
    default: 0
 }
});

const orientation = mongoose.model("Orientation", orientationSchema);

module.exports = orientation;

