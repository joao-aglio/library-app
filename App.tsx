import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Book from './components/Book';
import BookDetails from './components/BookDetails';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  const booksDetails = [
    {
      title: "Love & Fear",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "Romance",
      author: "Gere"

    },
    {
      title: "Britney",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "Biografia",
      author: "Britney"


    },
    {
      title: "Death",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "Ação",
      author: "Gaga"

    },
    {
      title: "KKKKK",
      image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
      category: "Comédia",
      author: "Gere"
    }
  ];

  return (

    <View className='flex gap-2 h-screen justify-center container'>

      <View className='flex flex-column bg-[#ff7b10] py-3'>
        <Text className='font-bold text-xl'>Meus Livros</Text>

        <View className='flex flex-nowrap flex-row py-2'>

          {booksDetails.map((book: any) => (
            <Book coverUrl={book.image} />
          ))}

        </View>

      </View>

      <View className='flex flex-column rounded-xl flex-wrap bg-[#777]'>

        {booksDetails.map((book: any) => (
          <BookDetails author={book.author} title={book.title} category={book.category} coverUrl={book.image} />
        ))}

      </View>
    </View>

  );
}
