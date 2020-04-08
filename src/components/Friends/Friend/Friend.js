import React from "react";
import s from "../Friends.module.css";
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    let path = "/friends/" + props.id

    return (
        <div className={s.friend_row}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLjTsWnfiq5ME7swO8un1LUlz92NWwHgeVm4MGZa-vMc3cT7HI&usqp=CAU" alt=""/>
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Friend