import {
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { state, addUser } from "../state/state";
import { auth } from "../firebase";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //checks if user has been logged before
      if (user) {
        //if so navigate him to Home Screen
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);
  const loginHandler = (email, password) => {
    // if (isValidDate(email, password)) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.heroText}>Login</Text>
        {/* <TextInput style={styles.inputContainer}
                  placeholder="Name"
                //   value={ }
                //   onChangeText={text =>}
              ></TextInput> */}
        <TextInput
          style={styles.inputContainer}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.inputContainer}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <Button
          style={styles.btn}
          title="Submit"
          onPress={() => loginHandler(email, password)}
        />
        <Text
          style={styles.helpText}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Don't have an account ?
        </Text>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8EE4FF",
    alignItems: "center",
    justifyContent: "center",
  },
  helpText: {
    paddingVertical: 20,
  },
  btn: {},
  inputContainer: {
    width: 200,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  heroText: {
    fontSize: 28,
    marginBottom: 50,
  },
});
