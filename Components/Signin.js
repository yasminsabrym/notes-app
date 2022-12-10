import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Link,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import logo from "../assets/notes.png";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Signin = ({ navigation, route }) => {
  //   const [state, setState] = useState(1);
  const [isChecked, setChecked] = useState(false);
  const Tab = createBottomTabNavigator();

  return (
    <ScrollView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Image style={styles.logo} source={logo} />
          <Text style={{ fontSize: 25 }}>Notes</Text>
        </View>
        {/* <Text style={styles.subtitle}>Let’s Learn More About Plants</Text> */}
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder=" Username"
          maxLength={15}
          //   onChangeText={(newText) => setText(newText)}
          //   defaultValue={text}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          maxLength={20}
          //   onChangeText={(newText) => setText(newText)}
          //   defaultValue={text}
        />
        <View
          style={{
            flexDirection: "row",
            marginRight: "5%",
            marginTop: "9%",
            alignSelf: "flex-start",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Checkbox
              value={isChecked}
              style={{ margin: "0%" }}
              onValueChange={setChecked}
              color={isChecked ? "#fdd14f" : undefined}
            />
            <Text style={{ marginLeft: "3%" }}>Remember Me</Text>
          </View>

          <Text>forgot password</Text>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.ButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center" }}>
          Don’t Have Account?
          <Text style={{ color: "#fdd14f" }}> Sign up</Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default Signin;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    // justifySelf: "center",
  },
  all: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    // justifyContent: "center",
    // marginTop: 150,
    marginLeft: "5%",
    marginRight: "5%",
    // marginTop: "1%",
  },
  title: {
    width: "100%",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    marginTop: "2%",
    color: "grey",
  },
  inputTitle: {
    fontSize: 15,
    color: "grey",
    marginTop: "8%",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#fdd14f",
    width: "100%",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: "2%",
    // alignSelf: "center",
  },
  Button: {
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#fdd14f",
    padding: 15,
    color: "#fff",
    borderRadius: 10,
    marginBottom: 30,
    width: "100%",
    marginTop: "10%",
  },
  ButtonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

// import Tutorial from "./Components/Tutorial";
// import { useNavigation, useRoute } from "@react-navigation/native";

// function Tutorialcreen(props) {
//   const navigation = useNavigation();
//   const route = useRoute();
//   return <Tutorial {...props} navigation={navigation} route={route} />;
// }

// const Stack = createStackNavigator();

// <Stack.Screen
// name="AdCancellation"
// component={AdCancellationScreen}
// options={{
//   cardStyle: { backgroundColor: "#fff" },
//   animationTypeForReplace: state.isSignout ? "pop" : "push",
//   header: () => {
//     "none";
//   },
// }}
// />
