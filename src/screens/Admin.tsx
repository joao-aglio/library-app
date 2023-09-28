import Button from "../components/Button";
import { AppNavigationType } from "../types/AppNavigationType";
import { Text, View } from "react-native";

const Admin = (props:AppNavigationType) => {
    
    return (
        <View className="flex h-screen justify-center">
            <Text className="flex justify-center text-xl font-bold">Cadastrar nova informação</Text>
            <Button name="Novo livro" onPress={(e) => { props.navigation.navigate("Book")}}></Button>
            <Button name="Nova categoria" onPress={(e) => { props.navigation.navigate("Category")}}></Button>
            <Button name="Nova editora" onPress={(e) => { props.navigation.navigate("Publisher")}}></Button>
        </View>
    );
};

export default Admin;