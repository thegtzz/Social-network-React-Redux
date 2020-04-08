import React from "react";
import s from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            <img src="https://f0.pngfuel.com/png/592/884/black-and-white-cartoon-character-programmer-computer-programming-computer-software-computer-icons-programming-language-avatar-png-clip-art.png" alt=""/>
            {props.message}
        </div>
    )
}

export default Message