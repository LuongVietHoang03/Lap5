import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Page1Navigation from "./ClassEx/Page1Navigation";
import Page2 from "./ClassEx/Page2";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Page1Navigation}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Screen2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
