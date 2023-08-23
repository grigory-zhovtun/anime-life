import React from "react";
import s from "./Post.module.css";
import ava from "./../../../../img/ava.png";

type PropsType = {
  message: string
  likeCount: number
}

export const Post = (props: PropsType) => {
  return (
    <div className={s.item}>
      <img src={ava} alt="ava" />
      {props.message}
      <div>
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
};
