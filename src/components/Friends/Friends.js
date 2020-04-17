import React from "react";
import s from "./Friends.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / 100)

        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

    return (
        <div className={s.friend_row}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)}}>{p}</span>})}
            </div>

            {props.users.map(u => <div key={u.id}>
                <span>
                <div className={s.friends}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            userAPI.unfollowUser(u.id)
                                .then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            userAPI.followUser(u.id)
                                .then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }}>Follow</button>}
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Friends