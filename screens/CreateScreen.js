import {
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Platform,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import HeaderMenu from "../src/components/HeaderMenu";
import { createItem } from "../src/services/taskService";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Set date");

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setText(fDate);

    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const taskHandler = () => {
    createItem(title, description, date);
  };

  return (
    <View>
      <HeaderMenu
        // data={{ title, description, date }}
        title="Create task"
        taskHandler={taskHandler}
        isPlus={false}
      />
      <View style={styles.main_content}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onDateChange}
          />
        )}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.label}>Deadline: {text}</Text>

          <Text style={styles.label}>Task title:</Text>
          <TextInput
            value={title}
            onChangeText={(title) => setTitle(title)}
            style={styles.create__input}
          ></TextInput>

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.create__input}
            multiline={true}
            numberOfLines={5}
            value={description}
            onChangeText={(description) => {
              setDescription(description);
            }}
          ></TextInput>
        </KeyboardAvoidingView>
        <View style={styles.dateBtn}>
          <Button title={text} onPress={() => showMode("date")}></Button>
        </View>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  main_content: {},
  create__input: {
    width: "90%",
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0AA7FF",
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    marginTop: 2,
    marginBottom: 3,
  },
  dateBtn: {
    marginTop: 15,
    marginLeft: 10,

    width: "25%",
  },
});
