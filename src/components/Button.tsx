import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface ButtonProps {
    name: string,
    onPress?: (event: GestureResponderEvent) => void
}


const Button = (props: ButtonProps) => {

    return (
        <TouchableOpacity onPress={props.onPress} className="bg-[#c4537c] py-2 rounded-xl mt-2 shadow">
            <Text className="text-center font-semibold text-lg">{props.name}</Text>
        </TouchableOpacity>
    );
};

export default Button;


