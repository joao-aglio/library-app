import Button from "../components/Button";
import { AppNavigationType } from "../types/AppNavigationType";
import { View } from "react-native";

const Gerenciamento = (props:AppNavigationType) => {
    
    return (
        <View className="flex justify-center">
            <Button name="Novo livro" onPress={(e) => { props.navigation.navigate("Book")}}></Button>
            <Button name="Nova categoria" onPress={(e) => { props.navigation.navigate("Category")}}></Button>
            <Button name="Nova editora" onPress={(e) => { props.navigation.navigate("Publisher")}}></Button>
        </View>
    );
};

export default Gerenciamento;