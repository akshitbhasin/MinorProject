import axios from 'axios';

const ip = 'localhost';
const path = 'http://' + ip + ':5000' +  '/api';
const api = axios.create({
  baseURL: path,
});

export default api;
