import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:64966',
});

export default api;
