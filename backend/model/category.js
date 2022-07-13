const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       unique: true
   }, 
   visits: {
       type: Number,
       default: 0
    }
});

const category = mongoose.model("Category", categorySchema);

module.exports = category;

