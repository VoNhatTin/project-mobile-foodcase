const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên danh mục
  createdAt: { type: Date, default: Date.now }, // Thời gian tạo
});

module.exports = mongoose.model("Category", categorySchema);
