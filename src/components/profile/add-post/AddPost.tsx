import React, {ChangeEvent} from "react";
import s from "./AddPost.module.css";
import {ActionTypes} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type PropsType = {
    newPostText: string
    dispatch: (action: ActionTypes) => void
}
export const AddPost = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(updateNewPostTextAC(''))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.AddPost}>
            <textarea
                        value={props.newPostText}
                        onChange={onChangeHandler}/>
            <button
                onClick={ addPost }>Send</button>
        </div>
    );
};
