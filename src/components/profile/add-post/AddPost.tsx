import React, {ChangeEvent} from "react";
import s from "./AddPost.module.css";

type PropsType = {
    addPost: (postMessage: string)=> void
    newPostText: string
    updateNewPostText: (newText: string)=> void
}
export const AddPost = (props: PropsType) => {

    const addPost = () => {
        props.addPost(props.newPostText)
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
                onClick={ addPost }>Send</button>
        </div>
    );
};
