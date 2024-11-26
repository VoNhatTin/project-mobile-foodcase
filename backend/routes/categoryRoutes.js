// /routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const { getCategories, createCategory } = require("../controllers/categoryController");  // Kiểm tra đúng đường dẫn

// Lấy danh sách tất cả danh mục
router.get("/", getCategories);

// Thêm danh mục mới
router.post("/", createCategory);  // Kiểm tra hàm createCategory đã được import chính xác

module.exports = router;
