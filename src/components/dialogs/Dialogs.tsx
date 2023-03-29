import React, {ChangeEvent} from "react";
import {DialogItem} from "./dialog-item/DialogItem";
import s from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {DialogsDataType, MessagesDataType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type PropsType = {
    store: StoreType
}

export const Dialogs = (props: PropsType) => {
    const state = props.store.getState();

    const newMessageBody = state.dialogsPage.newMessageBody;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogsPage.dialogs.map(item => {
                    return <DialogItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={s.messages}>
                {state.dialogsPage.messages.map(message => {
                    return <Message text={message.text}/>
                })}
                <div>
                    <textarea
                        value={newMessageBody}
                        placeholder={"Enter your message"}
                        onChange={onNewMessageChange}
                    ></textarea>
                    <button onClick={onSendMessageClick}>send message</button>
                </div>

            </div>
        </div>
    );
};
