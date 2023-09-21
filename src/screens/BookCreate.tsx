import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from "@react-navigation/native";

interface BookProps {
    navigation?: NavigationProp<any,any>;
}

const BookCreate = (props: BookProps) => {

    function handleClick(){
        props.navigation.navigate('Home');
    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="flex items-center justify-center my-3">
                <TouchableOpacity className="w-[120px] h-[200px] border-solid border rounded-xl border-gray-600	flex items-center justify-center">
                    <Ionicons name="add"></Ionicons>
                </TouchableOpacity>
            </View>

            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input />
                <Input />
                <Input />
                <Input />
                <Button onPress={handleClick} name="CADASTRAR LIVRO"></Button>
            </View>
        </View>
    );
}

export default BookCreate;