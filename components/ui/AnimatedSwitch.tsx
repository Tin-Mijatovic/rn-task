import IconHome from "@/assets/icons/IconHome";
import IconMagic from "@/assets/icons/IconMagic";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const AnimatedSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleSwitch = () => {
    Animated.timing(animation, {
      toValue: isOn ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsOn(!isOn);
  };

  const switchInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const homeIconOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  const magicIconOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View style={styles.switchContainer}>
        <Animated.View
          style={[
            styles.switch,
            {
              transform: [{ translateX: switchInterpolation }],
            },
          ]}
        />
        <Animated.View
          style={[styles.iconContainer, { opacity: homeIconOpacity }]}
        >
          <IconHome />
        </Animated.View>
        <Animated.View
          style={[styles.iconContainer, { opacity: magicIconOpacity }]}
        >
          <IconMagic />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 132,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1D1C19",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
  },
  switch: {
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#31312B",
    position: "absolute",
    top: 6,
    left: 6,
  },
  iconContainer: {
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnimatedSwitch;
