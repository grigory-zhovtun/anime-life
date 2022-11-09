import React from "react";
import s from "./MyPosts.module.css";
import ava from "./../../../img/ava.png"
import { Post } from "./post/Post";

export const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>
        <Post message="Hello, I'm happy!" likeCount={45}/>
          <Post message="I wish to see you" likeCount={11}/>
        </div>
      </div>
    </div>
  );
};
