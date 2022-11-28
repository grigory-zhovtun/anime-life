import React from "react";
import s from "./MyPosts.module.css";
import ava from "./../../../img/ava.png";
import {Post} from "./post/Post";

import {PostsDataType} from "../../../redux/state";

type PropsType = {
    posts: PostsDataType[]
}

export const MyPosts = (props: PropsType) => {

    return (
        <div>
            <div>
                <div>
                    {props.posts.map(post => {
                        return <Post message={post.text} likeCount={post.likesCount}/>
                    })}
                </div>
            </div>
        </div>
    );
};
