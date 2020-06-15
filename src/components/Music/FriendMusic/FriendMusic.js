import React from "react";
import s from "./FriendMusic.module.css";
import {NavLink} from "react-router-dom";


export const FriendMusic = () => {
    return (
        <>
            <div className={s.friendMusic}>
                <div className={s.searchBar}>
                    <input type="text" className={s.friendMusicSearch} placeholder={'Find friends'}/>
                    <div>
                        <button className={s.btn}/>
                    </div>
                </div>
                <div className={s.audioFriendCell}>
                    <img src="https://sun9-51.userapi.com/c836425/v836425795/83e4c/UnFfUH5F4Uo.jpg?ava=1" alt=""
                         className={s.audioFriendAvatar}/>
                    <NavLink to={''} className={s.audioFriendName}>Vladislav Klypko</NavLink>
                    <span className={s.friendAudioCount}>332 tracks</span>
                </div>
                <div className={s.audioFriendCell}>
                    <img src="https://sun9-10.userapi.com/c846322/v846322895/1e4506/ArfQt7aIFxA.jpg?ava=1" alt=""
                         className={s.audioFriendAvatar}/>
                    <NavLink to={''} className={s.audioFriendName}>Dima Apanasik</NavLink>
                    <span className={s.friendAudioCount}>579 tracks</span>
                </div>
                <div className={s.audioFriendCell}>
                    <img src="https://sun9-48.userapi.com/c849224/v849224567/85783/hlb5NGbcPGM.jpg?ava=1" alt=""
                         className={s.audioFriendAvatar}/>
                    <NavLink to={''} className={s.audioFriendName}>Anton Gorbach</NavLink>
                    <span className={s.friendAudioCount}>338 tracks</span>
                </div>
                <div className={s.audioFriendCell}>
                    <img src="https://sun9-28.userapi.com/c855036/v855036951/1ffc7e/OKjYXOWZ5mA.jpg?ava=1" alt=""
                         className={s.audioFriendAvatar}/>
                    <NavLink to={''} className={s.audioFriendName}>Nastya Moryakova</NavLink>
                    <span className={s.friendAudioCount}>1205 tracks</span>
                </div>
                <div className={s.audioFriendCell}>
                    <img src="https://sun9-10.userapi.com/c854528/v854528576/1a7648/fx2_-7Aj56I.jpg?ava=1" alt=""
                         className={s.audioFriendAvatar}/>
                    <NavLink to={''} className={s.audioFriendName}>Maxim Peshko</NavLink>
                    <span className={s.friendAudioCount}>1357 tracks</span>
                </div>
            </div>
        </>
    )
}