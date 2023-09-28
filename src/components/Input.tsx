import { TextInput, View, Text } from "react-native";
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'

interface InputProps {
    label: string, 
    onChangeText?: (text: string) => void,
    isSelect?: boolean,
    selectValues?: Array<object>,
    onValueChange?: (itemValue: string | number, itemIndex: number) => void,
    isDate?: boolean,
    onConfirm?: (date: Date) => void
};

interface ItemProps {
    name: string,
    id: number
}

const Input = (props: InputProps) => {

    return (
        <View className="mb-3">
            <Text className="text-lg font-bold mb-1">{props.label}</Text>
            {
            props.isSelect ? 

                <Picker onValueChange={props.onValueChange} style={{paddingTop: 9, paddingBottom: 9, borderRadius: 4,borderColor:"#E5E7EB",borderStyle:"solid",backgroundColor:"#ffffff"}}>
                    {props.selectValues.map((item: ItemProps) => {
                        return <Picker.Item label={item.name} value={item.id}></Picker.Item>
                    })}
                </Picker>

                : props.isDate ? <DatePicker date={new Date()} mode="date" onConfirm={props.onConfirm}/> : 

                    <TextInput onChangeText={props.onChangeText} className="bg-white py-2 rounded border-gray-200 border-solid"></TextInput> 
            }
        </View>
    );

}

export default Input;