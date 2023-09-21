import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import Details from '../screens/Details';
import Book from '../screens/BookCreate';
import Category from '../screens/Category';
import Publisher from '../screens/Publisher';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

const AppTab = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerTitle: () => (<Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/212/212807.png" }} style={{ width: 40, height: 40 }} />),
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="Details" component={Details} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="User" component={Login} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="Book" component={Book} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="book" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="Category" component={Category} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list-circle" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="Publisher" component={Publisher} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="attach" color={color} size={size} />
                )
            }} />

        </Tab.Navigator>
    )
}

export default AppTab;