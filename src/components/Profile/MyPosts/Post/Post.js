import React from "react";
import s from './Post.module.css'


const Post = (props) => {

    return (
        <div className={s.wallPostInfo}>
            <div className={s.wallPostHeaderWrap}>
                <img className={s.wallPostImage} src={props.profile.photos.large} alt=""/>
                <div className={s.wallPostHeaderInfo}>{props.profile.fullName}</div>
                <div className={s.wallPostHeaderDate}>1 May 2020</div>
            </div>
            <div className={s.wallPostContent}>
                { props.message }
            </div>
            <div className={s.wallPostLikeWrap}>
                <div className={s.wallPostLikes}>42</div>
                <div className={s.wallPostViews}>42</div>
            </div>
        </div>
    )
}

export default Post