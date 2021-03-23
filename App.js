import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Clock from "./components/Clock";
import Hue from "./components/Hue";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* 3 column second-row */}
        <View style={styles.clock}></View>
        <View style={styles.clock}></View>
        <View style={styles.clock}>
          <Clock />
        </View>
      </View>

      <View style={styles.row}>
        {/* 3 column second-row */}
        <View style={styles.col}>
          <Hue />
        </View>
        <View style={styles.col}></View>
        <View style={styles.col}></View>
      </View>

      <View style={styles.row}>
        <View style={styles.col}></View>
        <View style={styles.col}></View>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: "#000",
    // justifyContent: "center",
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
  },
  clock: {
    flex: 1,
    flexDirection: "col",
  },
  col: {
    flex: 1,
    flexDirection: "col",
    // minWidth: "inherit",
  },
  row: {
    flex: 2,
    flexDirection: "row",
    flexWrap: 'wrap',
  },
});
