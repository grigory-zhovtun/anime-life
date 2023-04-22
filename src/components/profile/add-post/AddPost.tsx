import React, {ChangeEvent} from "react";
import s from "./AddPost.module.css";
import {ActionTypes} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type PropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: string
}
export const AddPost = (props: PropsType) => {

    const addPostHandler = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.AddPost}>
            <textarea
                        value={props.newPostText}
                        onChange={onChangeHandler}/>
            <button
                onClick={ addPostHandler }>Send</button>
        </div>
    );
};
