import { UserBanner } from "@/components/UserBanner";
import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>...</Text>
      </View>
      <View>
        <UserBanner name="Georgia" status="Let’s start designing" />
      </View>
      <View>
        <Text style={styles.title}>Picture slide</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
});

export default HomeScreen;
