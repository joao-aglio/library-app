import { Text, View } from 'react-native';

const Book = props => {

    return (
        <View className='h-[220px] w-[120px] flex flex-column bg-[#ff7b10]'>
            <Text>Book</Text>
            <Text>Author</Text>
        </View>
    );

}

export default Book;