import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.content}>
      <MyPosts />
    </div>
  );
};
