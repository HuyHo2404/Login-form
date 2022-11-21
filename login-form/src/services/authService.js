import axiosClient from '~/apis/config';

export const loginApi = async (data) => {
    return await axiosClient.post('/api/login', data);
};
