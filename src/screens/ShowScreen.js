import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const id = route.params.id;
  const { state } = useContext(Context);
  const blogPost = state.find((item) => item.id === id);

  return <Text>{blogPost.title}</Text>;
};
const styles = StyleSheet.create({});

export default ShowScreen;
