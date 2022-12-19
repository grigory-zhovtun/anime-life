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
        messages: MessagesDataType[]
    }
}
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
    getState: () => StateType
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: postsData,
            newPostText: "Grigory says Hello!"
        },
        dialogsPage: {
            dialogs: dialogsData,
            messages: messagesData
        }
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
    _onChange(){
        console.log("State changed")
    },
    getState() {
        return this._state
    }
}