import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput
        value={title}
        placeholder="title"
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput
        value={content}
        placeholder="content"
        style={styles.input}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => navigation.navigate("Home"))
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;
