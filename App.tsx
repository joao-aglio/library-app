import Stack from "./src/components/Navigation";
import { NavigationContainer } from "@react-navigation/native";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );

}