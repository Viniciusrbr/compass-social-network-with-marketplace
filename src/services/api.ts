import axios from "axios";

const baseURL = "https://socialcompass.pagekite.me/api/";

const api = axios.create({
    baseURL,
    timeout: 30000,
});

api.interceptors.request.use(
    (config: any) => {
        const newConfig = {
            ...config,
            headers: {
                ...config.headers,
                //Authorization: `Bearer ${window?.auth?.token}`,
                'Content-Type': 'application/json; charset=utf-8',
                Accept: '*/*',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate, br',
                'Bypass-Tunnel-Reminder': '*',
            },
        };
        return newConfig;
    },
    (error) => Promise.reject(error)
);


export default api;