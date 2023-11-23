import Input from "../components/Input";
import { View } from "react-native";
import Button from "../components/Button";
import { AppNavigationType } from "../types/AppNavigationType";
import { useState } from "react";
import api from "../services/api";

const SingUp = (props: AppNavigationType) => {

    interface UserType {
        firstName: String;
        lastName: String;
        email: String;
        phoneNumber: String;
        username: String;
        password: String;
        user_type_id: number;
    };

    const initValue:UserType = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        username: "",
        password: "",
        user_type_id: 2
    }

    const [user, setUser] = useState<UserType>(initValue);

    function handleClick(){
        api.post('users', user).
        then((res) => {
            alert("Cadastrado com sucesso!");
            props.navigation.navigate('Login');
        })
        .catch((err) => {
            alert("Erro!" + JSON.stringify(err.response));
        });
    }

    function handleChange(key: string, value: string){
        setUser({...user, [key]: value});
        console.log(user);
    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="bg-[#c2eef8] flex px-2 py-2">
                {
                    Object.keys(initValue).map(val => {
                        if(val != "user_type_id")
                        return (
                            <Input label={val} onChangeText={valor => handleChange(val, valor)}/>
                        );
                    })
                }


                <Button onPress={handleClick} name="CADASTRAR-SE"></Button>
            </View>
        </View>
    );
}

export default SingUp;