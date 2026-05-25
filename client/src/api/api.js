import axios from 'axios';

const API = axios.create({
    baseURL: 'https://time-to-play.onrender.com/api'
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token)
            config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const pingToServer = async () => {
    try {
        const response = await API.get('/');
        return response.data;
    }
    catch (error) {
        throw error.response ? error.response.data : new Error("Server Error");
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await API.post('/login', credentials);        
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Server Error");
    }
};

export const createUser = async (userData) => {
    try {
        const response = await API.post('/users', userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Server Error");
    }
};

export const getAllUsers = async () => {
    try {
        const response = await API.get('/users');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Server Error");
    }
};

export const getUserById = async (id) => {
    try {
        const response = await API.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Server Error");
    }
};

export const updateUser = async (id, userData) => {
    try {
        const response = await API.patch(`/users/${id}`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Server Error");
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await API.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Server Error");
    }
};