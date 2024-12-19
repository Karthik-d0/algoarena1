import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001', // Backend URL
});

export default instance;
