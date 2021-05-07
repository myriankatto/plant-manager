import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/myriankatto/plant-manager',
});

export default api;
