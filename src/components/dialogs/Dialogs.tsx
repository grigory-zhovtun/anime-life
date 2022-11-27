import React from "react";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialog-item/DialogItem";
import s from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {DialogsDataType, MessagesDataType} from "../../index";

type PropsType = {
    dialogs: DialogsDataType[],
    messages: MessagesDataType[]
}


export const Dialogs = ({dialogs, messages}: PropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(item => {
                    return <DialogItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={s.messages}>
                {messages.map(message => {
                    return <Message text={message.text}/>
                })}
            </div>
        </div>
    );
};
