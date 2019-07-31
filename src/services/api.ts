import axios from 'axios';
// import { toastr } from 'react-redux-toastr';
// import storage from 'redux-persist/lib/storage';
// import history from '~/services/history';

const api = axios.create({
  baseURL: 'http://localhost:64966',
});

// api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       storage.removeItem('goStoque');
//       toastr.warning('error', 'vish');
//     }
//     return error;
//   }
// );

export default api;
