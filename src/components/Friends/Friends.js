import React from "react";
import s from "./Friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import FriendsContainer from "./FriendsContainer";
import Friend from "./Friend/Friend";


let Friends = ({totalUsersCount, currentPage, onPageChanged, ...props}) => {
    return (
        <div className={s.friend_row}>
            <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged}/>

            {props.users.map(u => <Friend user={u}
                                          follow={props.follow}
                                          unfollow={props.unfollow}
                                          key={u.id}
                                          followingInProgress={props.followingInProgress}/>
            )}
        </div>
    )
}

export default Friends