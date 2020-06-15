import React from "react";
import s from './Music.module.css'
import {AudioSearchBar} from "./AudioSearchBar/AudioSearchBar";
import {Playlist} from "./Playlist/Playlist";
import {FriendMusic} from "./FriendMusic/FriendMusic";


const Music = () => {
    return (
        <div className={s.mainBlock}>
            <AudioSearchBar/>
            <div className={s.playlist}>
                <Playlist/>
                <FriendMusic/>
            </div>
        </div>
    )
}

export default Music