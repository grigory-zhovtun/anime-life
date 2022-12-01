import React from "react";
import s from "./AddPost.module.css";

export const AddPost = () => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            alert(newPostElement.current.value)
        }

    }

    return (
        <div className={s.AddPost}>
            <textarea ref={newPostElement} name="" id=""></textarea>
            <button onClick={ addPost }>Send</button>
        </div>
    );
};
