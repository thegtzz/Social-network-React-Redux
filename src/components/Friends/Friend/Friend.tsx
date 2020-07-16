import React from "react";
import s from "./Friend.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/upload_profile_photo.png";
import {UserType} from "../../../types/types";


type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
export const Friend: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div key={user.id} className={s.friendItem}>
            <NavLink to={'/profile/' + user.id} className={s.navImg}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
            </NavLink>
            <div className={s.fullname}>{user.name}</div>
            <div className={s.followUser}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}
                              className={s.btnFollow}>
                        Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}
                              className={s.btnFollow}>
                        Follow</button>}
            </div>
            <div className={s.friendMenuWrap}>
                <div className={s.friendMenu}>
                    <div className={s.friendMenuContent}>
                        <NavLink to=''>
                            <span>Show friends</span>
                        </NavLink>
                        <NavLink to=''>
                            <span>Suggest friends</span>
                        </NavLink>
                        <div className={s.separator}/>
                        <NavLink to=''>
                            <span>Edit friend lists</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}