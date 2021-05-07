import axios from 'axios';

const api = axios.create({
  baseURL: 'https://planteria-server.herokuapp.com',
});

export default api;
