import React from "react";
import s from "../Friends.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";


const Friend = (props) => {
    let u = props.user
    return (
        <div key={u.id}>
                <span>
                <div className={s.friends}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}>
                            Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>
                            Follow</button>}
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
        </div>
    )
}

export default Friend