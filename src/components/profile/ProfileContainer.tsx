import React from "react";
import { MyPosts } from "./my-posts/MyPosts";
import s from "./Profile.module.css";

import { PostsDataType } from "../../redux/store";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { Profile } from "./Profile";

// type PropsType = {
//     state: {
//         posts: PostsDataType[]
//     },
//     addPost: (postMessage: string)=> void
// }

// export const Profile = (props: PropsType) => {
//   return (
//     <div className={s.content}>
//       <MyPosts posts={props.state.posts} addPost={props.addPost}/>
//     </div>
//   );
// };

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts
  }
}

export const ProfileContainer = connect(mapStateToProps)(Profile)
