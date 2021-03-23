import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import axiosInstance from "../axiosInstance";

import SvgExample from "./SVGFunctional";

export default function Hue() {
  const [lights, setLights] = useState([]);

  function handleGetLights() {
    axiosInstance
      .get("lights")
      .then((response) => {
        setLights(Object.entries(response.data));
        console.log(response, "\nOK!");
      })
      .catch((error) => {
        console.log(error, "\nERROR");
      });
  }

  return (
    <View style={styles.hueOuter}>
      <Text style={styles.heading}>Hue</Text>

      {lights.length > 0 ? (
        <>
          <View style={styles.outerItems}>
            {lights.map((light) => {
              return (
                <View key={light[0]} style={styles.singleItem}>
                  <SvgExample isOn={light[1].state.on} />

                  <Text style={styles.verticalSpacedText}>{light[1].name}</Text>
                  {/* <Text style={styles.verticalSpacedText}>
                    State: {light[1].state.on === true ? "ON" : "OFF"}
                  </Text> */}
                  {/* <Button
                    title={light[1].state.on === true ? "ON" : "OFF"}
                    style={styles.onOffButton}
                  /> */}
                </View>
              );
            })}
            {lights.map((light) => {
              return (
                <View key={light[0]} style={styles.singleItem}>
                  <SvgExample isOn={light[1].state.on} />

                  <Text style={styles.verticalSpacedText}>{light[1].name}</Text>
                  {/* <Text style={styles.verticalSpacedText}>
                    State: {light[1].state.on === true ? "ON" : "OFF"}
                  </Text> */}
                  {/* <Button
                    title={light[1].state.on === true ? "ON" : "OFF"}
                    style={styles.onOffButton}
                  /> */}
                </View>
              );
            })}
          </View>

          <View style={styles.outerButton}>
            <Button title="Get Lights" onPress={handleGetLights} />
          </View>
        </>
      ) : (
        <View style={styles.hueOuter}>
          <Button title="Get Lights" onPress={handleGetLights} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  hueOuter: {
    flex: 1,
    justifyContent: "flex-end",
  },
  heading: {
    flex: 1,
    flexDirection: "row",
    fontSize: 40,
    fontWeight: 600,
    textAlign: "center",
    color: "#fff",
  },
  outerItems: {
    flex: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "1rem",
    justifyContent: "space-evenly",
  },
  singleItem: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "0.25rem",
    paddingHorizontal: "0.75rem",
    paddingBottom: "0.5rem",
    border: "2px solid darkgray",
    // minWidth: "20%",
    maxWidth: "20%",
  },
  verticalSpacedText: {
    flex: 1,
    flexDirection: "row",
    marginBottom: "0.5rem",
    fontSize: "1.12em",
    fontWeight: "400",
    textAlign: "center",
    color: "#fff",
  },
  outerButton: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: "0.25rem",
  },
});
