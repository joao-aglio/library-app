import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text } from 'react-native';
import Details from '../screens/Details';
import BookCreate from '../screens/BookCreate';
import Category from '../screens/Category';
import Publisher from '../screens/Publisher';
import Login from '../screens/Login';
import Reserve from '../screens/Reserve';
import { createStackNavigator } from '@react-navigation/stack';
import api from '../services/api';
import { useState, useEffect } from 'react';
import User from '../screens/User';
import Admin from '../screens/Admin';
import SplashScreen from '../screens/SplashScreen';
import { View } from 'react-native';
import { AppNavigationType } from '../types/AppNavigationType';

const Tab = createBottomTabNavigator();

const Stack = (props: AppNavigationType) => {

    useEffect(() => {
        checkAuth();
    })

    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function checkAuth() {
        api.get('auth')
            .then(res => {
                setIsLogged(true);
            })
            .catch(err => {
                setIsLogged(false);
                props.navigation.navigate('Login');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const Stack = createStackNavigator();

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <Stack.Navigator screenOptions={{
            headerTitle: () => (
                <View className='flex flex-row items-center'>

                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/212/212807.png" }}
                        style={{ width: 40, height: 40 }} />
                    <Text className='font-bold text-lg'> LIBRARY </Text>

                </View>

            ),
            headerTitleAlign: 'center'
        }}>
            {
                <>
                    <Stack.Screen name="Tab" component={AppTab}></Stack.Screen>
                    <Stack.Screen name="Category" component={Category} />
                    <Stack.Screen name="Publisher" component={Publisher} />
                    <Stack.Screen name="Reserve" component={Reserve} />
                    <Stack.Screen name="Book" component={BookCreate} />
                    <Stack.Screen name="Details" component={Details} />
                    <Stack.Screen name="Gerenciamento" component={Admin} />
                
            
                <Stack.Screen name="Login" component={Login}></Stack.Screen>

                </>
            }

        </Stack.Navigator>
    );

}

const AppTab = () => {

    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="User" component={User} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                )
            }} />

        </Tab.Navigator>
    )
}

export default Stack;