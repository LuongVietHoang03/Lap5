import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Alert,
} from "react-native";

const Stack = createNativeStackNavigator();
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Page1Navigation extends React.Component {
  state = {
    w: 100,
    h: 100,
    selected:false
  };
  
  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
  };
  render() {
    const { navigation, route } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={[styles.box, { width: this.state.w, height: this.state.h }]}
        />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            {
              this.props.navigation.navigate("Screen2", {
                ten: "Hoang",
                lop: "CP17306",
                mon: "Lập trình đa nền tảng",
                onGoBack:(data) =>{
                  Alert.alert(data.data) 
                }
              });
            }
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Chuyển Page2</Text>
          </View>
        </TouchableOpacity>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
