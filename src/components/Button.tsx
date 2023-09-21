import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface ButtonProps {
    name: string,
    onPress?: (event: GestureResponderEvent) => void
}


const Button = (props: ButtonProps) => {

    return (
        <TouchableOpacity onPress={props.onPress} className="bg-[#c4537c] py-2 rounded-xl mt-2">
            <Text className="text-center">{props.name}</Text>
        </TouchableOpacity>
    );
};

export default Button;