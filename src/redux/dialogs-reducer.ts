import {DialogsDataType, MessagesDataType, PostsDataType} from "./store";

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
const initialState = {
    dialogs: dialogsData,
    messages: messagesData,
    newMessageBody: ""
}

const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            const stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            const stateCopy = {...state}
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({id: 4, text: body});
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE,} as const)
export const updateNewMessageBodyAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)

export default dialogsReducer;