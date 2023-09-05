import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className='flex h-screen justify-center items-center w-screen'>
      <View className='flex flex-wrap flex-row gap-2'>
        <View className='h-[220px] w-[120px] flex flex-column bg-[#ff7b10]'>
          <Text>Book</Text>
          <Text>Author</Text>
        </View>

        <View className='h-[220px] w-[120px] flex flex-column bg-[#ff7b10]'>
          <Text>Book</Text>
          <Text>Author</Text>
        </View>

        <View className='h-[220px] w-[120px] flex flex-column bg-[#ff7b10]'>
          <Text>Book</Text>
          <Text>Author</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
