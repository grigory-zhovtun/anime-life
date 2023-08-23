import React, {ChangeEvent} from "react";
import {DialogItem} from "./dialog-item/DialogItem";
import s from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/store";

type PropsType = {
    updateNewMessage: (message: string) => void
    onSendMessage: () => void
    newMessageBody: string
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}

export const Dialogs = (props: PropsType) => {

    const newMessageBody = props.newMessageBody;
    const onSendMessageClick = () => {
        props.onSendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value;
        props.updateNewMessage(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(item => {
                    return <DialogItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={s.messages}>
                {props.messages.map(message => {
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
