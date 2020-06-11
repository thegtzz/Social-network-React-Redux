import React from "react";
import s from "./DialogDropupMenu.module.css";
import {NavLink} from "react-router-dom";
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Music from '@vkontakte/icons/dist/24/music';
import Icon24Video from '@vkontakte/icons/dist/24/video';


export const DialogDropupMenu = () => {
    return (
        <div className={s.clipMenu}>
            <div className={s.clipMenuContent}>
                <NavLink to=''>
                    <Icon24Camera className={s.leftIcon}/>
                    <span>Photo</span>
                </NavLink>
                <NavLink to=''>
                    <Icon24Video className={s.leftIcon}/>
                    <span>Video</span>
                </NavLink>
                <NavLink to='/music'>
                    <Icon24Music className={s.leftIcon}/>
                    <span>Audio</span>
                </NavLink>
                <NavLink to=''>
                    <Icon24Document className={s.leftIcon}/>
                    <span>Document</span>
                </NavLink>
                <NavLink to=''>
                    <Icon24Place className={s.leftIcon}/>
                    <span>Map</span>
                </NavLink>
            </div>
        </div>
    )
}