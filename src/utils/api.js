import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data);
    const token = response.data.token;
    localStorage.setItem('token', token);
    return response;
  } catch (error) {
    throw error;
  }
};

export const register = async (data) => {
  return api.post('/auth/signup', data);
};

export const resetPassword = async (data) => {
  return api.post('/auth/reset', data);
};

export const getProfile = async () => {
  return api.get('/auth/profile');
};

export const updateProfile = async (data) => {
  return api.put('/auth/profile', data);
};

// export const getUsers = async () => {
//   return api.get('/auth/users');
// };

export const getUsers = async (data) => {
  return api.get('/auth/users', data);
};