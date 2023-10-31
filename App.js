import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./screens/Login";
import Profile from "./screens/profile/Profile";
import { SSHClient, SSHConfig } from "@ridenui/react-native-riden-ssh";

export default function App() {
  const client = new SSHClient({
    host: "45.79.123.87",
    username: "root",
    password: "Yuva@e34r_d",
    port: 22,
  });

  // const { stdout, stderr, code, signal } = client.execute("uptime");

  return (
    <View style={styles.container}>
      <Profile />
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingTop: 30,
    justifyContent: "center",
  },
});
