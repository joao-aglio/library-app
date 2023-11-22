import { Text, View, ScrollView } from 'react-native';
import Book from '../components/Book';
import BookDetails from '../components/BookDetails';
import { useCallback, useState } from 'react';
import api from '../services/api';
import { AppNavigationType } from "../types/AppNavigationType";
import { useFocusEffect } from '@react-navigation/native';

const Home = (props: AppNavigationType) => {

    const [books, setBooks] = useState([]);
    const [reserves, setReserves] = useState([]);

    useFocusEffect(
        useCallback(() => {
            api.get("books")
                .then((res) => {
                    setBooks(res.data.data);
                });

            api.get("reserves")
                .then((res) => {
                    setReserves(res.data.mybooks);
                });
        }, [])
    );

    return (

        <View className='flex h-screen'>

            <View className='flex mb-8 flex-column bg-[#c4537c] py-3'>
                <Text className='text-xl ml-3 text-[#fffae4]'>Meus Livros</Text>

                <ScrollView horizontal={true} className='flex flex-nowrap flex-row py-2'>

                    {reserves.map((reserve: any) => (
                        <Book width={80} height={120} onPress={() => { props.navigation.navigate('Details', { id: reserve.id }) }} coverUrl={reserve.image_url} />
                    ))}

                </ScrollView>

            </View>

            <View className='flex mx-3 flex-column justify-center py-2 rounded-xl flex-wrap bg-[#c2eef8]'>
            <Text className='ml-3 text-xl mb-3'>Livros disponíveis</Text>

                <ScrollView>
                    {books.map((book: any) => (
                        <BookDetails onPress={() => { props.navigation.navigate('Reserve', { id: book.id }) }} author={book.author} title={book.name} category={book.category.description} coverUrl={book.image_url} />
                    ))}
                </ScrollView>
            </View>
        </View>

    );

}

export default Home;