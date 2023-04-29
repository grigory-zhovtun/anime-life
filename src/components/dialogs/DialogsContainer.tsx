import React from "react";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { connect } from "react-redux";

// type PropsType = {
//     store: StoreType
// }

// export const DialogsContainer = (props: PropsType) => {
//     const state = props.store.getState();

//     const newMessageBody = state.dialogsPage.newMessageBody;
//     const onSendMessageClick = () => {
//         props.store.dispatch(sendMessageAC())
//     }
//     const onNewMessageChange = (text: string) => {
//         props.store.dispatch(updateNewMessageBodyAC(text))
//     }

//     return (
//         <Dialogs 
//             dialogs={state.dialogsPage.dialogs}
//             messages={state.dialogsPage.messages}
//             newMessageBody={newMessageBody}
//             onSendMessage={onSendMessageClick}
//             updateNewMessage={onNewMessageChange}
//         />
//     );
// };

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);