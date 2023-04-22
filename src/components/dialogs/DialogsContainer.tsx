import React from "react";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {
    const state = props.store.getState();

    const newMessageBody = state.dialogsPage.newMessageBody;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageBodyAC(text))
    }

    return (
        <Dialogs 
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageBody={newMessageBody}
            onSendMessage={onSendMessageClick}
            updateNewMessage={onNewMessageChange}
        />
    );
};
