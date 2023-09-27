import { Text, View } from "react-native";

type IUserInfo = {
    info?: string,
    name: string
}

const UserInfo = (props: IUserInfo) => {

    return (
        <View>
            <View className="flex items-center">
                
            </View>
            <View className="flex flex-row rounded-xl bg-[#fffae4] py-4 mx-2 px-3 mt-3">
                <Text className="mr-2 font-bold ">{props.name}</Text>
                <Text>{props.info}</Text>
            </View>

        </View>

    );
}

export default UserInfo;