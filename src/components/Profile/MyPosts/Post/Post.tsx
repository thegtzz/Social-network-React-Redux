import React from "react";
import s from './Post.module.css'
import {LikesCounter} from "../../../common/LikesCounter/LikesCounter";
import {ProfileType} from "../../../../types/types";


type PropsType = {
    profile: ProfileType
    message: string
}

export const Post: React.FC<PropsType> = props => {
    return (
        <div className={s.wallPostInfo}>
            <div className={s.wallPostHeaderWrap}>
                <img className={s.wallPostImage} src={props.profile.photos.large!} alt=""/>
                <div className={s.wallPostHeaderInfo}>{props.profile.fullName}</div>
                <div className={s.wallPostHeaderDate}>1 May 2020</div>
            </div>
            <div className={s.wallPostContent}>
                { props.message }
            </div>
            <div className={s.wallPostLikeWrap}>
                <LikesCounter/>
                <div className={s.wallPostViews}>42</div>
            </div>
        </div>
    )
}