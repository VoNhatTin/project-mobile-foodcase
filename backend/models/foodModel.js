const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên món
  image: { type: String, required: true }, // URL ảnh
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, // ID danh mục
  sold: { type: Number, default: 0 }, // Số lượng bán ra
  likes: { type: Number, default: 0 }, // Lượt thích
  price: { type: Number, required: true }, // Giá gốc
  discountPrice: { type: Number, default: null }, // Giá giảm (nếu có)
  createdAt: { type: Date, default: Date.now }, // Ngày tạo
});

module.exports = mongoose.model("Food", foodSchema);
