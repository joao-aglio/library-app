import Input from "../components/Input";
import { View } from "react-native";
import Button from "../components/Button";

const Login = () => {

    return (
        <View className="flex flex-column h-screen justify-center">
            <View className="bg-[#c2eef8] flex px-2 py-2">
                <Input />
                <Input />
                <Button name="LOGAR"></Button>
            </View>
        </View>
    );
}

export default Login;