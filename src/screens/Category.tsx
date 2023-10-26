import Input from "../components/Input";
import { View } from "react-native";
import Button from "../components/Button";
import { AppNavigationType } from "../types/AppNavigationType";
import { useState } from "react";
import api from "../services/api";

const Category = (props: AppNavigationType) => {

    const [category, setCategory] = useState<object>();

    function handleClick(){
        api.post('categories', category).
        then((res) => {
            alert("Cadastrado com sucesso!");
            props.navigation.navigate("Home");
        })
        .catch((err) => {
            alert("Erro!");
        });
    }

    function handleChange(key: string, value: string){
        setCategory({...category, [key]: value});
        console.log(category);
    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input label="Descrição" onChangeText={descricao => handleChange('description', descricao)}/>

                <Button onPress={handleClick} name="CADASTRAR CATEGORIA"></Button>
            </View>
        </View>
    );
}

export default Category;