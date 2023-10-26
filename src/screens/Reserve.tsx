import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Book from "../components/Book";
import Button from "../components/Button";
import api from "../services/api";
import { BookType, initValue } from "../types/BookType";
import { AppNavigationType } from "../types/AppNavigationType";

const Reserve = (props: AppNavigationType) => {

    const [book, setBook] = useState<BookType>(initValue);
    
    function handleClick(id: number){
        api.post("reserves", { books: [id]})
        .then(res => {
            alert("Livro reservado com sucesso!");
            props.navigation.navigate("Home");
        })
    }

    useEffect(() =>{

        api.get(`books/${props.route.params.id}`)
        .then((res) => {
            setBook({
                name: res.data.data.name,
                author: res.data.data.author,
                category: res.data.data.category.description,
                description: res.data.data.description,
                cover: res.data.data.image_url
            });
        })
        .catch();

    }, [props.route.params.id])

    return (
        <View className="flex flex-column h-screen justify-center mx-5">

            <View className="flex justify-center items-center mb-5">
                <Book width={130} height={200} coverUrl={book.cover}></Book>
            </View>
            <View className="flex flex-col bg-[#c2eef8] p-3 rounded-xl">
                <View className="flex flex-row justify-between">
                    <Text className="text-xl">{book.name}</Text>
                    <Text>Share</Text>
                </View>
                <Text className="text-lg">{book.author}</Text>

                <Text className='text-center w-[80px] bg-[#fffae4] mt-3 rounded-full px-2 py-1'>{book.category}</Text>

                <Text className="mt-4">
                    {book.description}
                </Text>
            </View>

            <Button onPress={(e) => { handleClick(props.route.params.id) }} name="RESERVAR"></Button>
            
        </View>
    );
};

export default Reserve;