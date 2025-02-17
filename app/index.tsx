import PageSlider from "@/components/PageSlider";
import AnimatedSwitch from "@/components/ui/AnimatedSwitch";
import { UserBanner } from "@/components/UserBanner";
import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>...</Text>
      </View>
      <View style={styles.userBannerWrapper}>
        <UserBanner name="Georgia" status="Let’s start designing" />
      </View>
      <View style={styles.pagerWrapper}>
        <PageSlider />
      </View>
      <View style={styles.switchWrapper}>
        <AnimatedSwitch />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  userBannerWrapper: {
    paddingBottom: 36,
  },
  pagerWrapper: {
    height: "65%",
    width: "100%",
  },
  switchWrapper: {
    position: "absolute",
    bottom: 50,
    left: "50%",
    transform: [{ translateX: -66 }],
  },
});

export default HomeScreen;
