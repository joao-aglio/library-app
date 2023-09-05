import { Image, Text, View } from 'react-native';

interface BookProps {
    coverUrl: string
};

const Book = (props: BookProps) => {

    return (
        <View className='h-[220px] w-[120px] flex flex-column'>
            <Image source={{ uri: props.coverUrl }} style={{width: 80, height: 100}}></Image>
        </View>
    );

}

export default Book;