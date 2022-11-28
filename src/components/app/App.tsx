import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AddPost } from "../profile/add-post/AddPost";
import { Avatar } from "../avatar/Avatar";
import { Dialogs } from "../dialogs/Dialogs";
import { Header } from "../header/Header";
import { Music } from "../music/Music";
import { Navbar } from "../navbar/Navbar";
import { News } from "../news/News";
import { Profile } from "../profile/Profile";
import { Settings } from "../settings/Settings";
import "./App.css";

import {StateType} from "../../redux/state";

type PropsType = {
  state: StateType
}

export const App = ({state}: PropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Avatar />
        <AddPost />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile state={state.profilePage}/>} />
            <Route path="/dialogs/*" element={<Dialogs state={state.dialogsPage}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
