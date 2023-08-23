import {PostsDataType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const postsData: PostsDataType[] = [
    {id: 1, text: "Hello, I'm happy!", likesCount: 12},
    {id: 2, text: "I wish to see you", likesCount: 45},
    {id: 2, text: "I wish to see you", likesCount: 45}
]
const initialState = {
        posts: postsData,
        newPostText: ""
}

const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [...state.posts, {id: 5, text: action.postText, likesCount: 0}],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => ({type: "ADD-POST", postText: postText} as const)
export const updateNewPostTextAC = (postText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: postText} as const)

export default profileReducer;