import React from "react";
import s from "./AddPost.module.css";

type PropsType = {
    addPost: (postMessage: string)=> void
}
export const AddPost = (props: PropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.addPost(text)
        }

    }

    return (
        <div className={s.AddPost}>
            <textarea ref={newPostElement} name="" id=""></textarea>
            <button
                onClick={ addPost }>Send</button>
        </div>
    );
};
