import React, {ChangeEvent} from "react";
import {ActionTypes} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import { AddPost } from "./AddPost";

type PropsType = {
    newPostText: string
    dispatch: (action: ActionTypes) => void
}
export const AddPostContainer = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(updateNewPostTextAC(''))
    }

    const onChangeHandler = (text: string) => {
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <AddPost 
            addPost={addPost} 
            updateNewPostText={onChangeHandler} 
            newPostText={props.newPostText}
        />
    );
};
