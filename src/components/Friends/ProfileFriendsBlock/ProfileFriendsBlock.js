import React from 'react'
import s from './FriendsBlock.module.css'
import pm from '../../Profile/Profile.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import cn from 'classnames'


export const ProfileFriendsBlock = ({totalUsersCount, users}) => {
    return (
        <div className={cn(pm.friends, s.friendsBlock)}>
            <NavLink to={'/friends'} className={cn(s.noTextDecoration, s.friendsCount)}>
                Friends <span className={s.totalUsers}>{totalUsersCount}</span>
            </NavLink>
            {users.map(u => <div className={s.friendCell} key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <img className={s.friendPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                </NavLink>
                <div>{u.name}</div>
            </div>).slice(-6)}
        </div>
    )
}