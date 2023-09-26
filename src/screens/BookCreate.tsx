import * as ImagePicker from "expo-image-picker";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from "@react-navigation/native";
import api from "../services/api";
import { useState } from "react";
import Book from "../components/Book";

interface BookProps {
    navigation?: NavigationProp<any, any>;
}

const BookCreate = (props: BookProps) => {

    const [book, setBook] = useState<object>();
    const [image, setImage] = useState<string>();

    async function handleClick() {
        const data = new FormData();
        const response = await fetch(image);
        const blob = await response.blob();

        data.append('cover', blob, 'teste');

        Object.keys(book).forEach(key => {
            data.append(key, book[key]);
        });

        data.append("publish_date", '2022-02-02');

        api.post('books', data)
            .then((res) => {
                alert("Cadastrado com sucesso!");
            })
            .catch((err) => {
                alert("Erro!");
                console.log(err);
            });
    }

    function handleChange(key: string, value: string) {
        setBook({ ...book, [key]: value });
        console.log(book);
    }

    async function pickImage() {

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
        setImage(pickerResult.assets[0].uri);

    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="flex items-center justify-center my-3">
                <TouchableOpacity onPress={pickImage} className="w-[120px] h-[200px] border-solid border rounded-xl border-gray-600	flex items-center justify-center">
                    {image ? <Book coverUrl={image}></Book>
                        : <Ionicons name="add"></Ionicons>
                    }
                </TouchableOpacity>
            </View>

            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input label="Nome" onChangeText={name => handleChange('name', name)} />
                <Input label="Autor" onChangeText={author => handleChange('author', author)} />
                <Input label="Editora" onChangeText={publisher_id => handleChange('publisher_id', publisher_id)} />
                <Input label="Categoria" onChangeText={category_id => handleChange('category_id', category_id)} />
                <Button onPress={handleClick} name="CADASTRAR LIVRO"></Button>
            </View>
        </View>
    );
}

export default BookCreate;