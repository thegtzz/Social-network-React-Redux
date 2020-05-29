import React from "react";
import s from "./Friends.module.css";
import {Paginator} from "../common/Paginator/Paginator";
import Friend from "./Friend/Friend";


let Friends = ({totalUsersCount, currentPage, onPageChanged, pageSize, ...props}) => {
    return (
        <div className={s.friendList}>
            <div className={s.friendCount}>
                All friends <span className={s.totalUsers}>{totalUsersCount}</span>
            </div>
            {props.users.map(u => <Friend user={u}
                                          follow={props.follow}
                                          unfollow={props.unfollow}
                                          key={u.id}
                                          followingInProgress={props.followingInProgress}/>
            )}
            <div className={s.paginator}>
                <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}/>
            </div>
        </div>
    )
}

export default Friends