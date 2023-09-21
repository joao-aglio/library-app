import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Book from "../components/Book";
import Button from "../components/Button";

const Details = () => {
    return (
        <View className="flex flex-column h-screen justify-center mx-5">

            <View className="flex justify-center items-center mb-5">
                <Book coverUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff_screen.jpg?ts=1637017516"></Book>
            </View>
            <View className="flex flex-col bg-[#c2eef8] p-3 rounded-xl">
                <View className="flex flex-row justify-between">
                    <Text className="text-xl">Atomic Habits</Text>
                    <Text>Share</Text>
                </View>
                <Text className="text-lg">Author</Text>

                <Text className='text-center w-[80px] bg-[#fffae4] mt-3 rounded-full px-2 py-1'>Teste</Text>

                <Text className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum, felis sit amet commodo malesuada, velit sapien hendrerit erat, sit amet accumsan turpis velit quis justo.
                    Vestibulum libero turpis, vestibulum ut neque rutrum, tempor rutrum nulla. Nulla imperdiet libero eget dolor lobortis, eu sodales mi rhoncus. Sed vel porta dolor, id viverra risus.
                    Ut sagittis augue dui, et tincidunt ante scelerisque a.
                    Etiam non dictum enim, ac iaculis justo. Etiam placerat iaculis maximus. Sed laoreet sem sit amet ex efficitur molestie. Suspendisse pharetra risus eu leo faucibus rhoncus. Aenean vehicula mauris sit amet nulla cursus sodales.
                </Text>
            </View>

            <Button name="RESERVAR"></Button>
            
        </View>
    );
};

export default Details;