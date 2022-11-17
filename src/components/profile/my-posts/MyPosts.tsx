import React from "react";
import s from "./MyPosts.module.css";
import ava from "./../../../img/ava.png";
import {Post} from "./post/Post";

export const MyPosts = () => {
    const postsData = [
        {id: 1, text: "Hello, I'm happy!", likesCount: 12},
        {id: 2, text: "I wish to see you", likesCount: 45},
        {id: 2, text: "I wish to see you", likesCount: 45}
    ]

    return (
        <div>
            <div>
                <div>
                    {postsData.map(post => {
                        return <Post message={post.text} likeCount={post.likesCount}/>
                    })}
                </div>
            </div>
        </div>
    );
};
