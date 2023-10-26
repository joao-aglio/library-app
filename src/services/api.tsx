import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({ baseURL: "https://calf-internal-jointly.ngrok-free.app/api/", headers: { "ngrok-skip-browser-warning": 666 }});

api.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);


export default api;