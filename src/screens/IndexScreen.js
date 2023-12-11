import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Add Blog Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default IndexScreen;
