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
        
        <View className='flex flex-row mb-4'>
          <Book coverUrl={props.coverUrl}/>
          <View className="flex flex-column w-[4em] gap ml-2">
            <Text className='font-bold'>{props.title}</Text>
            <Text className=''>{props.author}</Text>

            <Text className='text-center bg-[#eab676] mt-5 rounded-full p-1'>{props.category}</Text>
          </View>
        </View>
        
    );
}

export default BookDetails;