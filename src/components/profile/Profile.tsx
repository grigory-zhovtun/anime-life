import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

import {PostsDataType} from "../../redux/state";

type PropsType = {
    state: {
        posts: PostsDataType[]
    }
}

export const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <MyPosts posts={props.state.posts}/>
    </div>
  );
};
