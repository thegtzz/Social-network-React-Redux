import React from "react";
import s from "./Friends.module.css";
import Paginator from "../common/Paginator/Paginator";
import Friend from "./Friend/Friend";


let Friends = ({totalUsersCount, currentPage, onPageChanged, pageSize, ...props}) => {
    return (
        <div className={s.friend_row}>
            <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}/>

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