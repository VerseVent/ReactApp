import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderMenu from "../src/components/HeaderMenu";
const AboutScreen = () => {
  return (
    <View>
      <HeaderMenu
        // data={{ title, description, date }}
        title="About"
        // taskHandler={taskHandler}
        actionIcon={null}
      />
      <View style={styles.aboutInfo}>
        <View>
          <Text style={styles.aboutItem}>App version: 1.0.1v</Text>
          <Text>Developer: Mykhailo Pronka</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutInfo: {
    backgroundColor: "#b3e7ff",
    margin: 10,
    marginTop: 0,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    // paddingHorizontal: 20,
  },
  aboutItem: {
    marginBottom: 10,
  },
});

export default AboutScreen;
