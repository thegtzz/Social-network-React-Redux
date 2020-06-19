import React from "react";
import s from "./NewsSearch.module.css";
import userPhoto from "../../../assets/images/upload_profile_photo.png";


export const NewsSearch = () => {
    return (
        <div className={s.typeNews}>
            <img className={s.typeNewsImg} src={userPhoto} alt=""/>
            <input type="text" placeholder="What's new?"/>
            <div className={s.newsPhoto}/>
            <div className={s.newsVideo}/>
            <div className={s.newsAudio}/>
        </div>
    )
}