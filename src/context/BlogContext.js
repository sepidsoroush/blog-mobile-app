import React from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: `${state.length + 1}`,
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    // case "DELETE":
    // case "EDIT":
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "CREATE" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
  },
  []
);
