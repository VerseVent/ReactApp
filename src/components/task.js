import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { deleteTask, editTaskStatus } from "../services/taskService";

const Task = (props) => {
  //create hook isReady
  const [isReady, setIsReady] = useState(props.isDone);
  // console.log("Props: ", props);

  const taskHandler = async (task_id, isDone) => {
    editTaskStatus(task_id, !isDone);
    setIsReady(!isDone);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.task}>
        <TouchableOpacity
          onPress={() => {
            taskHandler(props.task_id, isReady);
          }}
          style={styles.task__icon}
        >
          {isReady ? (
            <Icon name="check" size={35} color="lightgreen" />
          ) : (
            <Icon name="close" size={35} color="tomato" />
          )}
        </TouchableOpacity>
        <View style={styles.task__info}>
          <Text style={styles.task__title}>{props.taskTitle}</Text>
          <Text style={styles.task__description}>{props.taskDescription}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // console.log(props.deleteHandler);
            // console.log(props.id);
            props.deleteHandler(props.task_id);
          }}
          style={styles.delete_btn}
        >
          <Text style={styles.delete_title}>Delete</Text>
        </TouchableOpacity>
        <Text style={styles.task__date}>Deadline: {props.date}</Text>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#b3e7ff",
    elevation: 5,
  },
  task__info: {
    position: "relative",
    flexDirection: "column",
  },
  task: {
    // position: "relative",
    flexDirection: "row",
    elevation: 5,
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#4dc6ff",
    paddingRight: 65,
  },
  task__icon: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginRight: 10,
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: "#FEF7F7",
  },
  task__title: {
    fontSize: 20,
    color: "#fff",
  },
  task__date: {
    padding: 5,
    width: "35%",
    marginLeft: "60%",
    elevation: 5,
    // textAlign: "center",
    // elevation: 5,
    color: "#fff",
    backgroundColor: "#0AA7FF",
    textAlign: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  delete_btn: {
    position: "absolute",
    margin: 0,
    elevation: 10,
    // bottom: 0,
    left: "45%",
    // textAlign: "center",
    backgroundColor: "#FF6464",
    textAlign: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // borderWidth: 1,
    // borderColor: "#fff",
    width: "20%",
    padding: 6,
  },
  delete_title: {
    color: "#fff",
  },
});
