import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route }) => {
  const id = route.params.id;
  const navigation = useNavigation();
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((item) => item.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => navigation.pop())
      }
    />
  );
};
const styles = StyleSheet.create({});

export default EditScreen;
