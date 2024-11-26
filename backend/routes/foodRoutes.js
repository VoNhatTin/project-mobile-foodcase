const express = require("express");
const router = express.Router();
const {
  getAllFoods,
  getFoodById,
  addFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

// Lấy danh sách món ăn
router.get("/", getAllFoods);

// Lấy chi tiết món ăn theo ID
router.get("/:id", getFoodById);

// Thêm món ăn mới
router.post("/", addFood);

// Cập nhật món ăn
router.put("/:id", updateFood);

// Xóa món ăn
router.delete("/:id", deleteFood);

module.exports = router;
