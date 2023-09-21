import { TextInput, View, Text } from "react-native";

const Input = () => {

    return (
        <View className="mb-3">
            <Text className="text-lg font-bold mb-1">Placeholder</Text>
            <TextInput className="bg-white py-2 rounded border-gray-200 border-solid"></TextInput>
        </View>
    );

}

export default Input;