import { Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Book from './Book';

interface BookDetailsProp {
    title: string,
    category: string,
    author: string,
    coverUrl: string,
    onPress?: (event: GestureResponderEvent) => void
}

const BookDetails = (props: BookDetailsProp) => {
    return (
        
        <TouchableOpacity onPress={props.onPress} className='flex flex-row mb-5'>
          <Book width={80} height={120} coverUrl={props.coverUrl} />
          <View className="flex flex-column w-[4em] gap ml-2">
            <Text className='font-bold'>{props.title}</Text>
            <Text className='mt-1 text-[#808080]'>{props.author}</Text>
            <Text className='text-center bg-[#fffae4] mt-5 rounded-full px-2 py-1'>{props.category}</Text>
          </View>
        </TouchableOpacity>
    );
}

export default BookDetails;