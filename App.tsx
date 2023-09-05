import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Book from './components/Book';
import BookDetails from './components/BookDetails';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  const booksDetails = [
    {
      title: "teste",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "teste"
    },
    {
      title: "teste 2",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "teste"

    },
    {
      title: "teste 3",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "teste"
    },
    {
      title: "teste 3",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "teste"
    }
  ]

  return (

    <View className='flex gap-2 h-screen justify-center items-center w-screen'>

      <View className='flex flex-wrap flex-row gap-4 bg-[#ff7b10] p-10 rounded-lg'>

        {booksDetails.map((book: any) => (
          <Book coverUrl={book.image} />
        ))}
      </View>

      <View className='flex flex-column flex-wrap bg-[#777]'>

        {booksDetails.map((book: any) => (
          <BookDetails title={book.title} category={book.category} coverUrl={book.image}/>
        ))}

      </View>

    </View>
  );
}
