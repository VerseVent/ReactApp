import React from "react";
import { View, Text } from "react-native";
import HeaderMenu from "../src/components/HeaderMenu";
const AboutScreen = () => {
  return (
    <View>
      <HeaderMenu
        // data={{ title, description, date }}
        title="About"
        // taskHandler={taskHandler}
        // isPlus={false}
      />
      <Text>About:</Text>
    </View>
  );
};

export default AboutScreen;
