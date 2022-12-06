import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

import {PostsDataType} from "../../redux/state";

type PropsType = {
    state: {
        posts: PostsDataType[]
    },
    addPost: (postMessage: string)=> void
}

export const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
};
