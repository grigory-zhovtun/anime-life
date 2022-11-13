import React from "react";
import { NavLink } from "react-router-dom";
import { DialogItem } from "./dialog-item/DialogItem";
import s from "./Dialogs.module.css";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Linda" id={1} />
        <DialogItem name="kitty" id={2} />
        <DialogItem name="rihanna" id={3} />
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
