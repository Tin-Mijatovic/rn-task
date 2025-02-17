import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "white" | "transparent";
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "white",
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "white"
          ? styles.whiteBackground
          : styles.transparentBackground,
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={variant === "white" ? styles.whiteText : styles.transparentText}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  whiteBackground: {
    backgroundColor: "white",
    borderColor: "white",
  },
  transparentBackground: {
    backgroundColor: "transparent",
    borderColor: "white",
  },
  whiteText: {
    color: "black",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 20,
  },
  transparentText: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 20,
  },
});

export default Button;
