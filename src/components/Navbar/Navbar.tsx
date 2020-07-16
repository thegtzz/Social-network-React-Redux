import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import ProfileIcon from '@vkontakte/icons/dist/24/home';
import NewsIcon from '@vkontakte/icons/dist/24/newsfeed';
import MessagesIcon from '@vkontakte/icons/dist/24/chats';
import UserIcon from '@vkontakte/icons/dist/24/user';
import MusicIcon from '@vkontakte/icons/dist/24/music';
import SettingsIcon from '@vkontakte/icons/dist/24/settings';


const Navbar: React.FC = (props) => {
    return <nav className={s.nav}>
            <NavLink to='/profile' className={s.navlinkgrid}>
                <ProfileIcon className={s.leftIcon}/>
                <span className={s.leftLabel}>My profile</span>
            </NavLink>
            <NavLink to='/news' className={s.navlinkgrid}>
                <NewsIcon className={s.leftIcon}/>
                <span className={s.leftLabel}>News</span>
            </NavLink>
            <NavLink to='/dialogs' className={s.navlinkgrid}>
                <MessagesIcon className={s.leftIcon}/>
                <span className={s.leftLabel}>Messages</span>
            </NavLink>
            <NavLink to='/friends' className={s.navlinkgrid}>
                <UserIcon className={s.leftIcon}/>
                <span className={s.leftLabel}>Friends</span>
            </NavLink>
            <NavLink to='/music' className={s.navlinkgrid}>
                <MusicIcon className={s.leftIcon}/>
                <span className={s.leftLabel}>Music</span>
            </NavLink>
            <div className={s.separateDiv}/>
            <NavLink to='/settings' className={s.navlinkgrid}>
                <SettingsIcon className={s.leftIcon}/>
                <span className={s.leftLabel}>Settings</span>
            </NavLink>
    </nav>
}

export default Navbar
