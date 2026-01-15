import axios from 'axios';

const BASE_URL = "https://intuitive-essence-production.up.railway.app";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
