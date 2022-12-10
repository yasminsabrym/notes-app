// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./Components/Signin";
import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk90HIJscD69Dg_KWGWQeNikpVM9RHGss",
  authDomain: "notes-app-99.firebaseapp.com",
  projectId: "notes-app-99",
  storageBucket: "notes-app-99.appspot.com",
  messagingSenderId: "784554811203",
  appId: "1:784554811203:web:450c4da257be74e5da19f6",
  measurementId: "G-5EGZBQNW3S",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// signOutt = () => {
//   firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       this.props.navigation.navigate("Signin");
//     })
//     .catch((error) => this.setState({ errorMessage: error.message }));
// };
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* <TouchableOpacity onPress={() => signOutt()}> */}
      <Text>LogOut</Text>
      {/* </TouchableOpacity>+ */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: "",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
