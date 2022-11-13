import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">linda</NavLink>
        </div>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/2">kitty</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">rihanna</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello!</div>
        <div className={s.message}>Hi!)</div>
        <div className={s.message}>
          Lorem ipsum dolor sit amet consectetur. Sed pellentesque nec nascetur
          pretium elit quis integer. Morbi est morbi risus dictumst in est. Id
          dignissim molestie porttitor amet ultrices vitae feugiat.
        </div>
      </div>
    </div>
  );
};
