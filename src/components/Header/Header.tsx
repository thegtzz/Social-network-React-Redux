import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logoImage from '../../assets/images/logo.jpg'
import {LoginElement} from "./LoginElement/LoginElement";
import {ProfileType} from "../../types/types";


export type MapPropsType = {
    isAuth: boolean
    login: string | null
    profile: ProfileType
    authorizedUserId: number | null
}
export type DispatchPropsType = {
    logOut: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = ({isAuth, ...props}) => {
    return <header className={s.header}>
        <NavLink to={'/news'}>
            <img src={logoImage} alt=""/>
            <span>#stayhome</span>
        </NavLink>

        {isAuth
            ? <LoginElement {...props}/>
            : <div className={s.loginBlock}><NavLink to={'/login'}>Login</NavLink></div>
        }

    </header>
}

export default Header