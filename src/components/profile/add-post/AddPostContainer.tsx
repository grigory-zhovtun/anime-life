import React, {ChangeEvent, FC} from "react";
import {ActionTypes} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import { AddPost } from "./AddPost";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/redux-store";

// type PropsType = {
//     newPostText: string
//     dispatch: (action: ActionTypes) => void
// }
// export const AddPostContainer = (props: PropsType) => {

//     const addPost = () => {
//         props.dispatch(addPostAC(props.newPostText))
//         props.dispatch(updateNewPostTextAC(''))
//     }

//     const onChangeHandler = (text: string) => {
//         props.dispatch(updateNewPostTextAC(text))
//     }

//     return (
//         <AddPost 
//             addPost={addPost} 
//             updateNewPostText={onChangeHandler} 
//             newPostText={props.newPostText}
//         />
//     );
// };
 

const mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
            dispatch(updateNewPostTextAC(''))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
    }
}

export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);