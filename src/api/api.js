import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rolling-api.vercel.app',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 추후 에러페이지 여러 개 필요해 질 때 분기 추가
api.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default api;
