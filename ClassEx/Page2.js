import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class Page2 extends Component {
  render() {
    const { navigation, route } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.textt}>
          {route.params.ten}
          {"\n"}
          {route.params.lop}
          {"\n"}
          {route.params.mon}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "aqua",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 50,
          }}
          onPress={() => {
            {
              route.params.onGoBack({ data: "hoàng đẹp zai" });
              navigation.goBack();
            }
          }}
        >
          <Text>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textt: {
    color: "#A555EC",
    fontSize: 30,
    padding: 20,
    fontWeight: "bold",
  },
});
