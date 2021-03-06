import React from "react";
import s from "../Header.module.css";
import {NavLink} from "react-router-dom";
import userImage from '../../../assets/images/upload_profile_photo.png'
import {useOutsideClick} from "../CustomHeaderHooks/useOutsideClick";
import {Preloader} from "../../common/Preloader/Preloader";


export const LoginElement = (props) => {
    const {showMenu, setShowMenu, ref} = useOutsideClick(false)

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    if (!props.profile.profile) {
        return <Preloader/>
    }

    return (
        <div ref={ref} className={s.loginBlock} onClick={handleClick}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <div className={s.userName}>{props.login}</div>
                <img src={props.profile.profile.photos.small || userImage} alt=''/>
                <div className={s.loginBlockArrow} />
            </a>
            {showMenu
                && <div className={s.topDroppedMenu}>
                    <NavLink to={'/profile'}>My profile</NavLink>
                    <div className={s.topDivSep} />
                    <NavLink to={'/settings'}>Settings</NavLink>
                    <NavLink to={'/help'}>Help</NavLink>
                    <div className={s.topDivSep} />
                    <div onClick={props.logOut}>
                        <NavLink to={'/login'}>Log out</NavLink>
                    </div>
                  </div>}
        </div>
    )
}