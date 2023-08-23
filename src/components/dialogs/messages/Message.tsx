import React from "react";
import s from "./Message.module.css";

type PropsType = {
    text: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}