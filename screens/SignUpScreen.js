import {
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserService } from "../src/services/userService";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const signUpHandler = (email, password) => {
    const tempUser = UserService.createUser(email, password);
    if (tempUser) {
      // console.log(1);
      navigation.replace("Home");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.heroText}>Sign Up</Text>
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
          onPress={() => signUpHandler(email, password)}
        />
        <Text
          style={styles.helpText}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Already have an account ? Sign in
        </Text>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

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
