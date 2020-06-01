import React from "react";
import avatar from "../../../assets/images/upload_profile_photo.png"
import s from "./Message.module.css";

export const Message = (props) => {
    return (
        <div className={s.message}>
            <img src={avatar} alt=""/>
            <div>
                <div className={s.peerName}>Vladislav</div>
                {props.message}
            </div>
        </div>
    )
}