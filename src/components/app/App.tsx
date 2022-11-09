import React from "react";
import { AddPost } from "../add-post/AddPost";
import { Avatar } from "../avatar/Avatar";
import { Header } from "../header/Header";
import { Navbar } from "../navbar/Navbar";
import { Profile } from "../profile/Profile";
import "./App.css";

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Avatar />
      <AddPost />
      <Navbar />
      <Profile />
    </div>
  );
};
