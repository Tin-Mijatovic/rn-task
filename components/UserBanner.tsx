import { StyleSheet, Text, View, Image } from "react-native";

type UserBannerProps = {
  name: string;
  status: string;
};

export function UserBanner({ name, status }: UserBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.pictureFrame}>
        <Image
          style={styles.profilePicture}
          source={require("../assets/images/profile-picture.png")}
        />
      </View>
      <View style={styles.nameStatusWrapper}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 14,
  },
  pictureFrame: {
    width: 68,
    height: 68,
    borderRadius: 12,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3D84AD08",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  nameStatusWrapper: {
    marginLeft: 8,
    justifyContent: "center",
  },
  nameText: {
    fontSize: 24,
    fontWeight: 300,
    color: "#848280",
    lineHeight: 30,
    letterSpacing: -0.24,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 300,
    lineHeight: 30,
    letterSpacing: -0.24,
  },
});
