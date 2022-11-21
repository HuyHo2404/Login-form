import axios from 'axios';
import TokenService from '~/services/localStorageService';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000',
});

axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = TokenService.GetAccessToken();

        if (accessToken) {
            config.headers.common['Authorization'] = `Bearer ${accessToken}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

axiosClient.interceptors.response.use((response) => {
    console.log('axios-client::', response);
    if (response && response.data) {
        const token = response.data?.access_token;
        if (token) {
            TokenService.SetAccessToken(token);
        }
    }
    return response.data;
});

export default axiosClient;
