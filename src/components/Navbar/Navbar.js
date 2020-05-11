import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import ProfileIcon from '@vkontakte/icons/dist/24/home';
import NewsIcon from '@vkontakte/icons/dist/24/newsfeed';
import MessagesIcon from '@vkontakte/icons/dist/24/chats';
import UserIcon from '@vkontakte/icons/dist/24/user';
import MusicIcon from '@vkontakte/icons/dist/24/music';
import SettingsIcon from '@vkontakte/icons/dist/24/settings';


const Navbar = (props) => {
    return <nav className={s.nav}>
                <ol>
                    <div className={s.test}>
                        <li>
                            <NavLink to='/profile'>
                                <span className={s.leftFixer}>
                                    <span><ProfileIcon className={s.leftIcon} width={20} height={20}/></span>
                                    <span className={s.leftLabel}>My profile</span>
                                </span>
                            </NavLink>
                        </li>
                    </div>
                    <li>
                        <NavLink to='/news'>
                            <span className={s.leftFixer}>
                                <span><NewsIcon className={s.leftIcon} width={20} height={20}/></span>
                                <span className={s.leftLabel}>News</span>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dialogs'>
                            <span className={s.leftFixer}>
                                <span><MessagesIcon className={s.leftIcon} width={20} height={20}/></span>
                                <span className={s.leftLabel}>Messages</span>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/friends'><span className={s.leftFixer}>
                                <span><UserIcon className={s.leftIcon} width={20} height={20}/></span>
                                <span className={s.leftLabel}>Friends</span>
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/music'><span className={s.leftFixer}>
                                <span><MusicIcon className={s.leftIcon} width={20} height={20}/></span>
                                <span className={s.leftLabel}>Music</span>
                            </span>
                        </NavLink>
                    </li>
                    <div className={s.separateDiv}></div>
                    <li>
                        <NavLink to='/settings'><span className={s.leftFixer}>
                                <span><SettingsIcon className={s.leftIcon} width={20} height={20}/></span>
                                <span className={s.leftLabel}>Settings</span>
                            </span>
                        </NavLink>
                    </li>
                </ol>
            </nav>
}

export default Navbar
