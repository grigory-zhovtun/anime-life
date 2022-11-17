import React from "react";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialog-item/DialogItem";
import s from "./Dialogs.module.css";
import {Message} from "./messages/Message";

export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: "Linda"},
        {id: 2, name: "kitty"},
        {id: 3, name: "rihanna"},
    ]

    const messagesData = [
        {id: 1, text: "Hello"},
        {id: 2, text: "Lorem ipsum dolor sit amet consectetur. Sed pellentesque nec nascetur pretium elit quis integer. Morbi est morbi risus dictumst in est. Id dignissim molestie porttitor amet ultrices vitae feugiat."},
        {id: 3, text: "Love"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(item => {
                    return <DialogItem name={item.name} id={item.id}/>
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(message => {
                    return <Message text={message.text}/>
                })}
            </div>
        </div>
    );
};
