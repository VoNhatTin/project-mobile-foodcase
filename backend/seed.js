const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/userModel');  // Điều chỉnh đường dẫn nếu cần

// Kết nối với MongoDB
mongoose.connect('mongodb://localhost:27017/delivery_food', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Dữ liệu user cần thêm vào
const seedUsers = async () => {
  // Dữ liệu user mẫu
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyen@example.com',
    password: 'password123',  // Sẽ mã hóa mật khẩu trước khi lưu
    address: 'Hà Nội',
    phone: '0987654321',
    date: '1990-01-01',
    gender: 'Male',  // Cập nhật thành giá trị hợp lệ ('Male', 'Female', 'Other')
  };

  try {
    // Kiểm tra nếu user đã tồn tại trong cơ sở dữ liệu
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      console.log('User với email này đã tồn tại:', user.email);
      return;
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Tạo mới user
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: hashedPassword,
      address: user.address,
      phone: user.phone,
      date: user.date,
      gender: user.gender,
    });

    // Lưu user vào cơ sở dữ liệu
    await newUser.save();
    console.log('User đã được thêm thành công:', newUser);
  } catch (err) {
    console.error('Lỗi khi thêm user:', err);
  } finally {
    // Đóng kết nối sau khi hoàn thành
    mongoose.connection.close();
  }
};

// Gọi hàm seedUsers để thêm user vào
seedUsers();
