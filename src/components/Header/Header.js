import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logoImage from '../../assets/images/logo.jpg'
import {LoginElement} from "./LoginElement/LoginElement";


const Header = (props) => {
    return <header className={s.header}>
        <NavLink to={'/news'}>
            <img src={logoImage} alt=""/>
            <span>#stayhome</span>
        </NavLink>

        {props.isAuth
            ? <LoginElement {...props}/>
            : <div className={s.loginBlock}><NavLink to={'/login'}>Login</NavLink></div>
        }

    </header>
}

export default Header