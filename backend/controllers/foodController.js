const Food = require("../models/foodModel");
const Category = require("../models/categoryModel");

// Lấy danh sách tất cả món ăn
const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate("categoryId", "name"); // Populate để lấy thông tin danh mục
    res.status(200).json(foods);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách món ăn:", error);
    res.status(500).json({ message: "Không thể lấy danh sách món ăn", error: error.message });
  }
};

// Lấy món ăn theo ID
const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id).populate("categoryId", "name");
    if (!food) {
      return res.status(404).json({ message: "Không tìm thấy món ăn" });
    }
    res.status(200).json(food);
  } catch (error) {
    console.error("Lỗi khi lấy món ăn theo ID:", error);
    res.status(500).json({ message: "Lỗi khi lấy món ăn", error: error.message });
  }
};

// Thêm món ăn mới
const addFood = async (req, res) => {
  const { name, image, categoryId, price, discountPrice } = req.body;

  try {
    // Kiểm tra xem categoryId có tồn tại không
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Danh mục không tồn tại" });
    }

    const newFood = new Food({
      name,
      image,
      categoryId,
      price,
      discountPrice,
    });

    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    console.error("Lỗi khi thêm món ăn:", error);
    res.status(500).json({ message: "Không thể thêm món ăn", error: error.message });
  }
};

// Cập nhật món ăn
const updateFood = async (req, res) => {
  const { id } = req.params;
  const { name, image, categoryId, price, discountPrice, sold, likes } = req.body;

  try {
    // Kiểm tra nếu categoryId tồn tại (nếu được truyền)
    if (categoryId) {
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Danh mục không tồn tại" });
      }
    }

    const updatedFood = await Food.findByIdAndUpdate(
      id,
      { name, image, categoryId, price, discountPrice, sold, likes },
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ message: "Không tìm thấy món ăn để cập nhật" });
    }
    res.status(200).json(updatedFood);
  } catch (error) {
    console.error("Lỗi khi cập nhật món ăn:", error);
    res.status(500).json({ message: "Không thể cập nhật món ăn", error: error.message });
  }
};

// Xóa món ăn
const deleteFood = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Không tìm thấy món ăn để xóa" });
    }
    res.status(200).json({ message: "Xóa món ăn thành công", deletedFood });
  } catch (error) {
    console.error("Lỗi khi xóa món ăn:", error);
    res.status(500).json({ message: "Không thể xóa món ăn", error: error.message });
  }
};

module.exports = {
  getAllFoods,
  getFoodById,
  addFood,
  updateFood,
  deleteFood,
};
