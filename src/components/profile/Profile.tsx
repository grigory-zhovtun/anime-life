import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

import {PostsDataType} from "../../redux/store";
import { MyPostsContainer } from "./my-posts/MyPostsContainer";

type PropsType = {
    posts: PostsDataType[]
    // addPost: (postMessage: string)=> void
}

export const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <MyPostsContainer/>
    </div>
  );
};
