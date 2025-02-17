import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import PagerView from "react-native-pager-view";
import { Image } from "expo-image";
import Button from "./ui/Button";

const { width, height } = Dimensions.get("window");

const sliderData = [
  {
    title: "Harvest",
    text: "Bold design meets timeless beauty",
    imageUrl: require("../assets/images/slider-pictures/image-1.png"),
  },
  {
    title: "Stoneworks",
    text: "Bold design meets timeless beauty      ",
    imageUrl: require("../assets/images/slider-pictures/image-2.png"),
  },
  {
    title: "Stoneworks 2",
    text: "Bold design meets timeless beauty",
    imageUrl: require("../assets/images/slider-pictures/image-3.png"),
  },
];

const PageSlider = () => {
  return (
    <PagerView style={styles.container} initialPage={0}>
      {sliderData.map((page, index) => {
        return (
          <View key={page.title} style={styles.page}>
            <Image source={page.imageUrl} style={styles.backgroundImage} />
            <View style={styles.overlay} />
            <View>
              <Text style={styles.titleText}>{page.title}</Text>
              <Text style={styles.descriptionText}>{page.text}</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Apply to my room"
                onPress={() => console.log("Button pressed")}
              />
              <Button
                title="Details"
                onPress={() => console.log("Button pressed")}
                variant="transparent"
              />
            </View>
          </View>
        );
      })}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: "flex-end",
    padding: 24,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.33)",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "300",
    color: "#fff",
    lineHeight: 37,
    letterSpacing: -0.32,
  },
  descriptionText: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
    letterSpacing: -0.32,
  },
  buttonWrapper: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },
});

export default PageSlider;
