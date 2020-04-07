import React from "react";
import s from './Post.module.css'


const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src="https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png"
                alt=""/>
            { props.message }
            <div>
                <span>{props.likesCount} Likes</span>
            </div>
        </div>
    )
}

export default Post