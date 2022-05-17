import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

const HeaderMenu = (props) => {
  console.log(props);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  let strDate = "";
  const logOutHandler = () => {
    setModalVisible(!modalVisible);
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };
  if (props.data) {
    console.log(typeof props.data.date);
    strDate =
      props.data.date.getDate() +
      "/" +
      (props.data.date.getMonth() + 1) +
      "/" +
      props.data.date.getFullYear();
  }

  return (
    <View>
      <View style={styles.categoryBar}>
        <TouchableOpacity
          style={styles.menu__icon}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Icon name="bars" size={35} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.categoryTitle}>{props.title}</Text>
        {props.actionIcon === "plus" ? (
          <TouchableOpacity
            style={styles.categoryIcon}
            onPress={() => {
              navigation.replace("Create");
            }}
          >
            <Icon name="plus" size={35} color="#fff" />
          </TouchableOpacity>
        ) : props.actionIcon === "check" ? (
          <TouchableOpacity
            style={styles.categoryIcon}
            onPress={() => {
              props.taskHandler();
              navigation.replace("Home");
            }}
          >
            <Icon name="check" size={35} color="#fff" />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View
          style={[
            styles.centeredView,
            Platform.OS === "ios" ? styles.centeredViewIos : "",
          ]}
        >
          <View style={styles.modalView}>
            <Text style={styles.menu__title}> Scheduler</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="close" size={35} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.menu__category}>Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Create");
                setModalVisible(false);
              }}
            >
              <Text style={styles.menu__category}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menu__category}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menu__category}>Shablons</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menu__category}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("About");
                setModalVisible(false);
              }}
            >
              <Text style={styles.menu__category}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                {
                  logOutHandler();
                }
              }}
            >
              <Text style={styles.menu__category}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  centeredView: {
    position: "relative",
    // marginTop: 36,
    height: "100%",
    width: "70%",
    backgroundColor: "#8EE4FF",
  },
  categoryBar: {
    position: "relative",
    width: "100%",
    // height: "30%",
    // alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: 10,
    marginBottom: 10,
    margin: 0,
    backgroundColor: "#0AA7FF",
  },
  categoryTitle: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: 38,
    color: "#fff",
  },
  categoryIcon: {
    position: "absolute",
    right: 0,
    paddingRight: 20,
    paddingTop: 40,
  },
  centeredViewIos: {
    marginTop: 40,
  },
  button: {
    position: "absolute",
    paddingTop: 10,
    paddingRight: 10,
    right: 0,
  },
  menu__icon: {
    paddingLeft: 10,
    paddingTop: 43,
    color: "#fff",
  },
  menu__title: {
    fontSize: 40,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#0AA7FF",
  },
  menu__category: {
    fontSize: 30,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    color: "#fff",
    backgroundColor: "#0AA7FF",
    width: "70%",
  },
});
