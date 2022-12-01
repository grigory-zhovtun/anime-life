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

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessageElement.current) {
            alert(newMessageElement.current.value)
        }
    }

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
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>send message</button>
                </div>

            </div>
        </div>
    );
};
