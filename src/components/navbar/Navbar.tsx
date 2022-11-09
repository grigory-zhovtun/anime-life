import React from "react";
import s from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.person}>
        <div className={s.leftWrapper}>
          <div className={s.name}>Avril</div>
          <div className={s.surname}>Lavigne</div>
          <div className={s.age}>17 years old</div>
        </div>
        <div className={s.rightWrapper}>
          <div className={s.onlineStatus}>I'm here</div>
          <div className={s.status}>dating</div>
          <div className={s.city}>Tokyo</div>
        </div>
      </div>
      <div className="menu">
        
      </div>
    </nav>
  );
};
