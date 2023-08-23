import { DialogsDataType, MessagesDataType, PostsDataType } from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const dialogsData: DialogsDataType[] = [
    { id: 1, name: "Linda" },
    { id: 2, name: "kitty" },
    { id: 3, name: "rihanna" },
]
const messagesData: MessagesDataType[] = [
    { id: 1, text: "Hello" },
    { id: 2, text: "Lorem ipsum dolor sit amet consectetur. Sed pellentesque nec nascetur pretium elit quis integer. Morbi est morbi risus dictumst in est. Id dignissim molestie porttitor amet ultrices vitae feugiat." },
    { id: 3, text: "Love" },
]
const initialState = {
    dialogs: dialogsData,
    messages: messagesData,
    newMessageBody: ""
}

const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 4, text: state.newMessageBody }],
                newMessageBody: ''
            }
        default:
            return state;
    }
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE, } as const)
export const updateNewMessageBodyAC = (text: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text } as const)

export default dialogsReducer;