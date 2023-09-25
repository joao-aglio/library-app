import { TextInput, View, Text, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
interface InputProps {
    label: string, 
    onChangeText: (text: string) => void
};

const Input = (props: InputProps) => {

    return (
        <View className="mb-3">
            <Text className="text-lg font-bold mb-1">{props.label}</Text>
            <TextInput onChangeText={props.onChangeText} className="bg-white py-2 rounded border-gray-200 border-solid"></TextInput>
        </View>
    );

}

export default Input;