import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import Details from '../screens/Details';
import Book from '../screens/BookCreate';
import Category from '../screens/Category';
import Publisher from '../screens/Publisher';
import Login from '../screens/Login';
import Reserve from '../screens/Reserve';
import { createStackNavigator } from '@react-navigation/stack';
import api from '../services/api';
import { useState, useEffect } from 'react';

const Tab = createBottomTabNavigator();

const Stack = () => {

    useEffect(() =>{
        checkAuth();
    })

    const [isLogged, setIsLogged] = useState<boolean>(false);

    function checkAuth(){
        api.get('auth')
        .then(res => {
            setIsLogged(true);
        })
        .catch(err => {
            setIsLogged(false);
        }); 
    }

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerTitle: () => (
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/212/212807.png" }}
                    style={{ width: 40, height: 40 }} />
            ),
        }}>
            {isLogged ? (
                <>
                    <Stack.Screen name="Tab" component={AppTab}></Stack.Screen>
                    <Stack.Screen name="Category" component={Category} />
                    <Stack.Screen name="Publisher" component={Publisher} />
                    <Stack.Screen name="Reserve" component={Reserve} />
                    <Stack.Screen name="Book" component={Book} />
                    <Stack.Screen name="Details" component={Details} />
                </>
            ) : (
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
            )}

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

            <Tab.Screen name="User" component={Login} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                )
            }} />

        </Tab.Navigator>
    )
}

export default Stack;