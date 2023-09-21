import axios from "axios";

const baseURL = "https://socialcompass.pagekite.me/api/";

const api = axios.create({
    baseURL,
});

export default api;