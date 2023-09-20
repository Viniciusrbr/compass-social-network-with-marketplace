import axios from "axios";

const baseURL = 'https://socialcompass.000webhostapp.com/api';

const api = axios.create({
    baseURL,
});

export default api;