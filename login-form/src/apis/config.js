// import axios from 'axios';
// import TokenService from '~/services/localStorageService';

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8000',
// });

// axiosClient.interceptors.request.use(
//     (config) => {
//         const accessToken = TokenService.GetAccessToken();

//         if (accessToken) {
//             config.headers.common['Authorization'] = `Bearer ${accessToken}`;
//         } else {
//             delete axios.defaults.headers.common['Authorization'];
//         }

//         return config;
//     },
//     (err) => {
//         return Promise.reject(err);
//     },
// );

// axiosClient.interceptors.response.use(
//     (response) => {
//         if(response && response.data) {
//             const token = response.data?.data.accessToken
//             if(token) {
//                 TokenService.SetAccessToken(token)
//             }
//         }
//     }
// , async error => {
//     const originalConfig = error.config

//     if(originalConfig.url !== "/api/register" && error.response) {
//         if(error.response.status === 401 && )
//     }
// })
