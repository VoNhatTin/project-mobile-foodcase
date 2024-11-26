// /server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();
require('dotenv').config();

// Kết nối cơ sở dữ liệu
connectDB();

// Middleware
app.use(express.json());  // Dùng cho việc phân tích JSON body
app.use(cors());          // Cho phép giao tiếp từ các nguồn khác nhau

// Các route bảo vệ với middleware auth
app.use('/api/users', userRoutes); // Đảm bảo route users được định nghĩa chính xác

// Các route khác
app.use('/api/categories', categoryRoutes);
app.use('/api/foods', foodRoutes);

// Lắng nghe trên cổng 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
