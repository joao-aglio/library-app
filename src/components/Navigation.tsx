import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import Detalhes from '../screens/Detalhes';

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

            <Tab.Screen name="Detalhes" component={Detalhes} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="User" component={Detalhes} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                )
            }} />
            
        </Tab.Navigator>
    )
}

export default AppTab;