import React from "react";
import s from "./MyPosts.module.css";
import ava from "./../../../img/ava.png";
import {Post} from "./post/Post";

import {PostsDataType} from "../../../redux/store";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { MyPosts } from "./MyPosts";

// type PropsType = {
//     posts: PostsDataType[]
//     addPost: (postMessage: string)=> void
// }

// export const MyPosts = (props: PropsType) => {

//     return (
//         <div>
//             <div>
//                 <div>
//                     {props.posts.map(post => {
//                         return <Post message={post.text} likeCount={post.likesCount}/>
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps)(MyPosts)
