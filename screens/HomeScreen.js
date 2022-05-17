import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderMenu from "../src/components/HeaderMenu";
import Task from "../src/components/task";
import { state } from "../state/state";
import { auth } from "../firebase";
import { deleteTask, getTasks } from "../src/services/taskService";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const uid = auth.currentUser?.uid;

  const deleteHandler = (id) => {
    deleteTask(id);
    setIsComplete(false);
  };

  const render = (tasks) => {
    return tasks.map((e, i) => {
      return (
        <Task
          key={i}
          task_id={e.id}
          taskTitle={e.data.title}
          taskDescription={e.data.description}
          isDone={e.data.isDone}
          date={e.data.date}
          deleteHandler={deleteHandler}
        />
      );
    });
  };
  const getTasksFromService = async () => {
    const tasksFromService = await getTasks(uid);
    setTasks(tasksFromService);
    setIsComplete(true);
  };

  useEffect(() => {
    getTasksFromService();
  }, [isComplete]);

  return (
    <View style={styles.body}>
      <HeaderMenu title="Tasks" isPlus={true} />

      <ScrollView>{isComplete ? render(tasks) : <Text></Text>}</ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#e6f7ff",
    height: "100%",
  },
});
