export type PostsDataType = {
    id: number,
    text: string,
    likesCount: number
}
export type MessagesDataType = {
    id: number,
    text: string
}
export type DialogsDataType = {
    id: number,
    name: string
}
export type StateType = {
    profilePage: {
        posts: PostsDataType[]
        newPostText: string
    },
    dialogsPage: {
        dialogs: DialogsDataType[],
        messages: MessagesDataType[],
        newMessageBody: string
    }
}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const dialogsData: DialogsDataType[] = [
    {id: 1, name: "Linda"},
    {id: 2, name: "kitty"},
    {id: 3, name: "rihanna"},
]
const messagesData: MessagesDataType[] = [
    {id: 1, text: "Hello"},
    {id: 2, text: "Lorem ipsum dolor sit amet consectetur. Sed pellentesque nec nascetur pretium elit quis integer. Morbi est morbi risus dictumst in est. Id dignissim molestie porttitor amet ultrices vitae feugiat."},
    {id: 3, text: "Love"},
]
const postsData: PostsDataType[] = [
    {id: 1, text: "Hello, I'm happy!", likesCount: 12},
    {id: 2, text: "I wish to see you", likesCount: 45},
    {id: 2, text: "I wish to see you", likesCount: 45}
]

export type StoreType = {
    _state: StateType,
    addPost: (postMessage: string) => void,
    updateNewPostText: (newText: string) => void,
    subscribe: (callback: ()=>void) => void,
    _onChange: () => void,
    getState: () => StateType,
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =   ReturnType<typeof addPostAC> |
                            ReturnType<typeof updateNewPostTextAC> |
                            ReturnType<typeof updateNewMessageBodyAC> |
                            ReturnType<typeof sendMessageAC>
export const addPostAC = (postText: string) => ({type: "ADD-POST", postText: postText} as const)
export const updateNewPostTextAC = (postText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: postText} as const)
export const sendMessageAC = () => ({type: SEND_MESSAGE,} as const)
export const updateNewMessageBodyAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: postsData,
            newPostText: "Grigory says Hello!"
        },
        dialogsPage: {
            dialogs: dialogsData,
            messages: messagesData,
            newMessageBody: ""
        }
    },
    _onChange(){
        console.log("State changed")
    },
    addPost(postMessage: string) {
        const newPost: PostsDataType = {
            id: 5,
            text: postMessage,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._onChange();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange();
    },
    subscribe(observer){
        this._onChange = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            const newPost: PostsDataType = {
                id: 5,
                text: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._onChange();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._onChange();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange();
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 4, text: body});
            this._onChange();
        }
    }
}