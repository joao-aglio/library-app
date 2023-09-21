import Input from "../components/Input";
import { View } from "react-native";
import Button from "../components/Button";
import { NavigationProp } from "@react-navigation/native";

interface PublisherProp {
    navigation?: NavigationProp<any,any>;
}

const Publisher = (props: PublisherProp) => {

    function handleClick(){
        props.navigation.navigate('Home');
    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input />

                <Button onPress={handleClick} name="CADASTRAR EDITORA"></Button>
            </View>
        </View>
    );
}

export default Publisher;