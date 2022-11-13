import React from "react";
import {NavLink, Outlet} from 'react-router-dom';
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
      <div className={s.menu}>
        <div className={s.item}><NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
        <div className={s.item}><NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>news</NavLink></div>
        <div className={s.item}><NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>music</NavLink></div>
        <div className={s.item}><NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></div> 
      </div>
    </nav>
  );
};
