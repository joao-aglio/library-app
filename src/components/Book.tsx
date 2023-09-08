import { Image, Text, View } from 'react-native';

interface BookProps {
    coverUrl: string
};

const Book = (props: BookProps) => {

    return (

        <View className='mx-2 flex flex-column'>
            <Image source={{ uri: props.coverUrl }} className="rounded" style={{width: 90, height: 130}}></Image>
        </View>
    );

}

export default Book;