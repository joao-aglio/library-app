import Input from "../components/Input";
import { View } from "react-native";
import Button from "../components/Button";
import { NavigationProp } from "@react-navigation/native";

interface CategoryProp {
    navigation?: NavigationProp<any,any>;
}

const Category = (props: CategoryProp) => {

    function handleClick(){
        props.navigation.navigate('Home');
    }

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input />

                <Button onPress={handleClick} name="CADASTRAR CATEGORIA"></Button>
            </View>
        </View>
    );
}

export default Category;