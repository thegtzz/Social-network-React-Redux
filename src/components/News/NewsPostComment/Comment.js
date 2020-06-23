import React from "react";
import s from "./Comment.module.css"
import userPhoto from "../../../assets/images/upload_profile_photo.png";


export const Comment = ({ commentBody }) => {
    let today = new Date()
    let date = { day: 'numeric', month: 'long'}
    let hour = {hour12: true, hour: 'numeric', minute: 'numeric' }
    return (
        <div className={s.comment}>
            <img className={s.avatar} src={userPhoto} alt=""/>
            <div className={s.name}>Yan Lukovsky</div>
            <div>{commentBody}</div>
            <div className={s.date}>{today.toLocaleString('en-GB', date)} at {today.toLocaleString('en-GB', hour)}</div>
        </div>
    )
}