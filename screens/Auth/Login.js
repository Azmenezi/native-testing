import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Text,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});

  const handleLogin = () => {
    // Perform login logic here, such as calling an API

    // Reset the input fields
    setUserInfo({});
  };
  const handleRegister = () => {
    // Navigate to the Register screen
    navigation.navigate("Register");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userInfo.email}
        onChangeText={(email) => setUserInfo({ ...userInfo, email })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={userInfo.password}
        onChangeText={(password) => setUserInfo({ ...userInfo, password })}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableHighlight
        onPress={handleRegister}
        style={styles.marginRegister}
        underlayColor="#00000010"
      >
        <Text style={styles.registerButtonContainer}>
          Dont have and account? Register
        </Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingLeft: 10,
  },
  marginRegister: {
    marginTop: 10,
  },
  registerButtonContainer: {
    color: "#4287f5",
    // backgroundColor: "transparent",
    // width: "80%",
  },
});

export default Login;
