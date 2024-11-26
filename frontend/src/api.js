import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Đảm bảo địa chỉ này đúng với API backend của bạn
});

export default api;
