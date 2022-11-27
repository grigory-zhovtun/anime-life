import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

import {PostsDataType} from "../../index";

type PropsType = {
    posts: PostsDataType[]
}

export const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <MyPosts posts={props.posts}/>
    </div>
  );
};
