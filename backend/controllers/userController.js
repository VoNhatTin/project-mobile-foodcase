const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Đăng ký người dùng
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });  // Đảm bảo mật khẩu đã được mã hóa trước khi lưu
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Đăng nhập người dùng
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {  // Kiểm tra mật khẩu sau khi mã hóa
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Tạo JWT token
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Lấy thông tin người dùng (được bảo vệ bởi token)
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

// Cập nhật thông tin người dùng
exports.updateUserProfile = async (req, res) => {
  try {
    const { name, email, address, phone } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, address, phone },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
};
