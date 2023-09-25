import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface AppNavigationType {
    navigation?: NavigationProp<any,any>,
    route?: RouteProp<{ params: { id: number } }, 'params'>
}