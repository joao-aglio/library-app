import Input from "../components/Input";
import { View } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {

    const [credentials, setCredentials] = useState<object>();

    function handleChange(key: string, value: string) {
        setCredentials({ ...credentials, [key]: value });
    }

    function handleClick(){
        api.post('login', credentials)
        .then(async (res) => {
            await AsyncStorage.setItem('token', res.data.token);
            alert ("Sucesso!");
        })
        .catch(err => {
            alert("Error!")
        })
    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input label="User" onChangeText={(username) => {handleChange('username', username)}}/>
                <Input label="Password" onChangeText={(password) => {handleChange('password', password)}}/>
                <Button name="LOGAR" onPress={handleClick}></Button>
            </View>
        </View>
    );
}

export default Login;