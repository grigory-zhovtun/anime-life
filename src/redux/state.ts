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

export const state: StateType = {
    profilePage: {
        posts: postsData,
    },
    dialogsPage: {
        dialogs: dialogsData,
        messages: messagesData
    }
}