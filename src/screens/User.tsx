import { useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { InitValue, UserType } from "../types/UserType";
import api from "../services/api";
import { AppNavigationType } from "../types/AppNavigationType";
import { View, Image, Text, Touchable, TouchableOpacity } from "react-native";
import UserInfo from "../components/UserInfo";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from '@react-navigation/native';


const User = (props: AppNavigationType) => {

    const [user, setUser] = useState<UserType>(InitValue);

    useFocusEffect(useCallback(() => {
        api.get("auth")
            .then(res => {
                setUser({
                    id: res.data.id,
                    name: res.data.firstName + " " + res.data.lastName,
                    phoneNumber: res.data.phoneNumber,
                    email: res.data.email,
                    type: res.data.user_type.description
                })
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            });
    }, []));

    async function handleLogout(e){
        await AsyncStorage.setItem('token', "");
        props.navigation.navigate('Login');
    }

    return (
        <View className="flex h-screen mt-3 text-left">
            <View className="flex items-center">
                <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" }}
                    className="rounded-full" style={{ width: 80, height: 80 }}></Image>
            </View>

            {Object.keys(user).map(i => {
                return <UserInfo name={i.toUpperCase() + ":"} info={user[i]} />
            })}

            {
                user.type == "Admin" ? (
                    <View className="flex justify-center mt-5">
                        <Button onPress={(e) => { props.navigation.navigate("Gerenciamento")}} name="ACESSAR GERENCIAMENTO"></Button>
                    </View>

                ) : void (0)
            }

            <Button onPress={handleLogout} name="LOGOUT"></Button>


        </View>
    );
}

export default User;