import React from "react";
import {DialogItem} from "./dialog-item/DialogItem";
import s from "./Dialogs.module.css";
import {Message} from "./messages/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";

type PropsType = {
    state: {
        dialogs: DialogsDataType[],
        messages: MessagesDataType[]
    }
}

export const Dialogs = (props: PropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map(item => {
                    return <DialogItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(message => {
                    return <Message text={message.text}/>
                })}
            </div>
        </div>
    );
};
