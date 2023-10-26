import Input from "../components/Input";
import { View } from "react-native";
import Button from "../components/Button";
import { AppNavigationType } from "../types/AppNavigationType";
import { useState } from "react";
import api from "../services/api";

const Publisher = (props: AppNavigationType) => {

    const [publisher, setPublisher] = useState<object>();

    function handleClick(){
        api.post('publishers', publisher).
        then((res) => {
            alert("Cadastrado com sucesso!");
            props.navigation.navigate("Home");
        })
        .catch((err) => {
            alert("Erro!");
        });
    }

    function handleChange(key: string, value: string){
        setPublisher({...publisher, [key]: value});
        console.log(publisher);
    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input label="Nome" onChangeText={nome => handleChange('name', nome)}/>

                <Button onPress={handleClick} name="CADASTRAR EDITORA"></Button>
            </View>
        </View>
    );
}

export default Publisher;