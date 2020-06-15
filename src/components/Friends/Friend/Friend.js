import React from "react";
import s from "./Friend.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/upload_profile_photo.png";


export const Friend = props => {
    let u = props.user
    return (
        <div key={u.id} className={s.friendItem}>
            <NavLink to={'/profile/' + u.id} className={s.navImg}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
            </NavLink>
            <div className={s.fullname}>{u.name}</div>
            <div className={s.followUser}>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                                  props.unfollow(u.id)
                              }}
                              className={s.btnFollow}>
                        Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                                  props.follow(u.id)
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