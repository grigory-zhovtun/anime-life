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

import "./App.css";

import {StoreType} from "../../redux/state";

type PropsType = {
    store: StoreType
}

export const App = ({store}: PropsType) => {
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Avatar/>
                <AddPost dispatch={store.dispatch.bind(store)}
                         newPostText={state.profilePage.newPostText}
                />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile state={state.profilePage} addPost={store.addPost.bind(store)}/>}/>
                        {/*<Route path="/profile" element={<Profile state={state.profilePage} addPost={store.addPost.bind(store)}/>} />*/}
                        <Route path="/dialogs/*" element={<Dialogs state={state.dialogsPage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
