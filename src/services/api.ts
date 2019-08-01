import axios from 'axios';
import { toastr } from 'react-redux-toastr';

const api = axios.create({
  baseURL: 'http://localhost:64966',
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      toastr.confirm('Ops, sua sessão expirou', {
        onOk: () => {
          localStorage.removeItem('persist:goStoque');
        },
      });
    }
    return error;
  }
);

export default api;
