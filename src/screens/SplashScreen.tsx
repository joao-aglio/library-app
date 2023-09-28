import { View, Text, Image } from "react-native"

const SplashScreen = () => {
    return (

        <View className="flex h-screen justify-center">
            <Image source={{uri: "https://tamilnaducouncil.ac.in/wp-content/uploads/2018/10/loading-gif.gif"}} style={{width: 100, height: 100}}></Image>
        </View>

    )
}

export default SplashScreen;