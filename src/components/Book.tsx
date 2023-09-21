import { Image, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface BookProps {
    coverUrl: string,
    className?: string,
    onPress?: (event: GestureResponderEvent) => void

};

const Book = (props: BookProps) => {

    return (
        <TouchableOpacity onPress={props.onPress} className={`mx-2 flex flex-column ${props.className}`}>
            <Image source={{ uri: props.coverUrl }} className="rounded" style={{width: 90, height: 130}}></Image>
        </TouchableOpacity>
    );

}

export default Book;