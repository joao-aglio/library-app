import { Text, View } from 'react-native';
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { AppNavigationType } from "../types/AppNavigationType";

const Home = (props: AppNavigationType) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get("books")
            .then((res) => {
                setBooks(res.data.data);
            });
    }, []);

    return (

        <View className='flex h-screen'>

            <View className='flex mb-8 flex-column bg-[#c4537c] py-3'>
                <Text className='text-xl ml-3 text-[#fffae4]'>Meus Livros</Text>

                <View className='flex flex-nowrap flex-row py-2'>

                    {books.map((book: any) => (
                        <Book onPress={() => {props.navigation.navigate('Details', { id: book.id })}} coverUrl={book.image_url} />
                    ))}

                </View>

            </View>

            <View className='flex mx-3 flex-column justify-center py-2 rounded-xl flex-wrap bg-[#c2eef8]'>

                <Text className='ml-3 text-xl mb-3'>Livros disponíveis</Text>
                {books.map((book: any) => (
                    <BookDetails onPress={() => {props.navigation.navigate('Reserve', { id: book.id }) }} author={book.author} title={book.name} category={book.category.description} coverUrl={book.image_url} />
                ))}

            </View>
        </View>

    );

}

export default Home;

