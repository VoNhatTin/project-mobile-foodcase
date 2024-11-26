const Category = require("../models/categoryModel");

// Lấy danh sách tất cả danh mục
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách danh mục:", error);
    res.status(500).json({ message: "Không thể lấy danh sách danh mục", error: error.message });
  }
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;  // Giả sử bạn chỉ cần 'name' cho danh mục mới

  if (!name) {
    return res.status(400).json({ message: "Tên danh mục không được để trống" });
  }

  try {
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);  // Trả về danh mục mới được tạo
  } catch (error) {
    console.error("Lỗi khi tạo danh mục:", error);
    res.status(500).json({ message: "Không thể tạo danh mục", error: error.message });
  }
};

