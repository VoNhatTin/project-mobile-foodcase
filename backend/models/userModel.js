const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Mật khẩu sẽ được mã hóa
  address: { type: String },
  phone: { type: String },
  date: { type: Date },
  gender: { 
    type: String, 
    enum: ['Male', 'Female', 'Other'],  // Thêm enum ở đây
    required: true 
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
