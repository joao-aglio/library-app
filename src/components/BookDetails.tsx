import { Text, View,  } from 'react-native';
import Book from './Book';

interface BookDetailsProp {
    title: string,
    category: string,
    author: string,
    coverUrl: string
}

const BookDetails = (props: BookDetailsProp) => {
    return (
        
        <View className='flex flex-row mb-5'>
          <Book coverUrl={props.coverUrl}/>
          <View className="flex flex-column w-[4em] gap ml-2">
            <Text className='font-bold'>{props.title}</Text>
            <Text className='mt-1 text-[#808080]'>{props.author}</Text>
            <Text className='text-center bg-[#fffae4] mt-5 rounded-full px-2 py-1'>{props.category}</Text>
          </View>
        </View>
        
    );
}

export default BookDetails;