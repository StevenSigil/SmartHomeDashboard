import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

export function useInterval(callback, delay) {
  // from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  // adapted for use with time.

  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Clock() {
  const nowTime = new Date().toLocaleTimeString();
  const nowDate = new Date().toLocaleDateString();

  const [time, setTime] = useState(nowTime);
  const [date, setDate] = useState(nowDate);

  useInterval(() => {
    // time change on the second
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }, 1000);

  useInterval(() => {
    // date change on the minute
    const newDate = new Date().toLocaleDateString();
    setDate(newDate);
  }, 60000);

  return (
    <View style={styles.clock}>
      <Text style={styles.clockTime}>{time}</Text>
      <Text style={styles.clockDate}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clock: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  clockTime: {
    fontSize: "3em",
    fontWeight: 500,
    color: "#fff",
    textAlign: "center",
  },
  clockDate: {
    fontSize: "2em",
    fontWeight: 400,
    color: "#fff",
    textAlign: "center",
  },
});
