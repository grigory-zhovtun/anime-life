import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mfZvuW_7Ra_tbZ87iswufgBisQv5uSMPzppJx_Dydf_gFIpKUPmkR620zwJdylJwjPg&usqp=CAU"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
