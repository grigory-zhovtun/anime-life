import {PostsDataType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: 5,
                text: action.postText,
                likesCount: 0
            };
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => ({type: "ADD-POST", postText: postText} as const)
export const updateNewPostTextAC = (postText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: postText} as const)

export default profileReducer;