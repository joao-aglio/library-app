import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = await AsyncStorage.getItem("token").then(data => { return data });

const api = 
    
    axios.create({
        baseURL: "http://127.0.0.1:8000/" + "api/",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });


export default api;