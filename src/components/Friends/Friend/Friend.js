import React from "react";
import s from "../Friends.module.css";


const Friend = (props) => {
    return (
        <div className={s.friend_row}>
            <span>
                <div>
                    <img src={props.photoUrl} alt=""/>
                </div>
                <div>
                    { props.followed ? <button onClick={() => {props.f}}>Unfollow</button> : <button>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{props.fullname}</div>
                    <div>{props.status}</div>
                </span>
                <span>
                    <div>{props.country}</div>
                    <div>{props.city}</div>
                </span>
            </span>
        </div>
    )
}

export default Friend