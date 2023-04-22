import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {AddPost} from "../profile/add-post/AddPost";
import {Avatar} from "../avatar/Avatar";
import {Dialogs} from "../dialogs/Dialogs";
import {Header} from "../header/Header";
import {Music} from "../music/Music";
import {Navbar} from "../navbar/Navbar";
import {News} from "../news/News";
import {Profile} from "../profile/Profile";
import {Settings} from "../settings/Settings";

import s from "./App.module.scss";

import {StoreType} from "../../redux/store";
import { AddPostContainer } from "../profile/add-post/AddPost-container";

type PropsType = {
    store: any
}

export const App = ({store}: PropsType) => {
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Avatar/>
                <AddPostContainer dispatch={store.dispatch.bind(store)}
                         newPostText={state.profilePage.newPostText}
                />
                <Navbar/>
                <div  className={s.wrapper__content}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile state={state.profilePage} addPost={store.dispatch.bind(store)}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs store={store}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
