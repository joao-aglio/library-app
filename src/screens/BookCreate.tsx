import * as ImagePicker from "expo-image-picker";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native";
import api from "../services/api";
import { useCallback, useState } from "react";
import Book from "../components/Book";
import { AppNavigationType } from "../types/AppNavigationType";

interface BookType {
    name: string,
    publisher_id: number,
    category_id: number,
    author: string,
    publish_date: string
}

const BookCreate = (props: AppNavigationType) => {

    const initValue:BookType = {
        name: "",
        publisher_id: 0,
        category_id: 0,
        author: "",
        publish_date: "2023-02-02"
    }

    const [book, setBook] = useState<BookType>(initValue);
    const [image, setImage] = useState<string>();
    const [publishers, setPublishers] = useState([]);
    const [categories, setCategories] = useState([]);

    useFocusEffect(
        useCallback(() => {
            api.get('publishers')
                .then(res => {
                    const publisher_data = res.data.data;
                    let array = [];
                    publisher_data.forEach((item => {
                        array.push({ id: item.id, name: item.name });
                    }));
                    setPublishers(array);
                })
                .catch(err => {
                    console.log(err);
                });

            api.get('categories')
                .then(res => {
                    const category_data = res.data.data;
                    let array = [];
                    category_data.forEach((item => {
                        array.push({ id: item.id, name: item.description });
                    }));
                    setCategories(array);
                })
                .catch(err => {
                    console.log(err);
                });
        }, [])
    );

    async function handleClick() {
        const data = new FormData();
        const response = await fetch(image);
        const blob = await response.blob();

        data.append('cover', blob, 'teste');

        Object.keys(book).forEach(key => {
            data.append(key, book[key]);
        });

        api.post('books', data)
            .then((res) => {
                alert("Cadastrado com sucesso!");
                props.navigation.navigate("Home");
            })
            .catch((err) => {
                alert("Error!\n" + err.response.data.message);
            });
    }

    function handleChange(key: string, value: string | number | Date) {
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
        <ScrollView className="flex flex-column h-screen">
            <View className="flex items-center justify-center my-3">
                <TouchableOpacity onPress={pickImage} className="w-[130px] h-[200px] border-solid border rounded-xl border-gray-600	flex items-center justify-center">
                    {image ? <Book className="rounded-xl" width={130} height={200} coverUrl={image}></Book>
                        : <Ionicons name="add"></Ionicons>
                    }
                </TouchableOpacity>
            </View>

            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input label="Nome" onChangeText={name => handleChange('name', name)} />
                <Input label="Autor" onChangeText={author => handleChange('author', author)} />
                <Input label="Editora" isSelect={true} selectValues={publishers} onValueChange={(value, i) => { handleChange('publisher_id', value) }} />
                <Input label="Categoria" isSelect={true} selectValues={categories} onValueChange={(value, i) => { handleChange('category_id', value) }} />
                <Input label="Descrição" onChangeText={description => handleChange('description', description)} />

                <Input label="Data de publicação" isDate={true}  
                    date={book.publish_date === "" ? new Date() : new Date(book.publish_date)} 
                    onChange={(e, date:Date) => { handleChange("publish_date", new Date(date).toISOString().split('T')[0])}}
                />
                
                <Button onPress={handleClick} name="CADASTRAR LIVRO"></Button>
            </View>
        </ScrollView>
    );
}

export default BookCreate;