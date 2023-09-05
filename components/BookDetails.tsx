import { Text, View } from 'react-native';
import Book from './Book';

interface BookDetailsProp {
    title: string,
    category: string,
    coverUrl: string
}

const BookDetails = (props: BookDetailsProp) => {
    return (
        
        <View className='flex flex-row'>
          <Book coverUrl={props.coverUrl}/>
          <View className="flex flex-column">
            <Text>{props.title}</Text>
            <Text>{props.category}</Text>
          </View>
        </View>
        
    );
}

export default BookDetails;