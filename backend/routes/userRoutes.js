// /routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Đăng ký người dùng
router.post('/register', registerUser);

// Đăng nhập người dùng
router.post('/login', loginUser);

// Lấy thông tin người dùng (cần có token)
router.get('/profile', protect, getUserProfile);

// Cập nhật thông tin người dùng (cần có token)
router.put('/profile', protect, updateUserProfile);

module.exports = router;
