import Svg, { Path } from "react-native-svg";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function SvgExample(props) {
  const isOn = props.isOn;

  return (
    <View style={styles.svgOuter}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isOn ? "#e8e86d" : "black"}
        viewBox="0 0 16 16"
        style={styles.svgPath}
      >
        <Path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  svgOuter: {
    flex: 2,
    flexDirection: "row",
    minHeight: 100,
    minWidth: 100,

    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: "0.5rem",

    border: "2px solid transparent",
    borderRadius: 30,
    backgroundColor: "#5e5e5e",
  },
  svgPath: {
    maxWidth: "75%",
    maxHeight: "auto",
  },
});
