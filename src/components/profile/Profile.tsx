import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

import {postsData} from "../../index";

type PropsType = {
    posts: postsData[]
}

export const Profile = (props: PropsType) => {
  return (
    <div className={s.content}>
      <MyPosts posts={props.posts}/>
    </div>
  );
};
