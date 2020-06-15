import React from "react";
import s from "./AudioSearchBar.module.css";


export const AudioSearchBar = () => {
    return (
        <>
            <div className={s.navMusic}>
                <div className={s.liWrapper}>
                    <li>My music</li>
                </div>
                <div className={s.liWrapper}>
                    <li>Playlists</li>
                </div>
                <div className={s.liWrapper}>
                    <li>Recommended</li>
                </div>
                <div className={s.liWrapper}>
                    <li>Friends' new music</li>
                </div>
            </div>
            <div className={s.searchBar}>
                <input type="text" className={s.searchInput} placeholder="Search music"/>
                <div>
                    <button className={s.btnSearch} type="button"/>
                </div>
            </div>
        </>
    )
}
