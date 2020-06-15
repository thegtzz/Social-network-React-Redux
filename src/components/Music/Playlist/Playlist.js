import React from "react";
import s from "./Playlist.module.css";
import scorpions from "../../../assets/images/wind_of_change.jpg";
import track1 from "../../../assets/mp3/Scorpions - Send Me An Angel.mp3";
import scorpions2 from "../../../assets/images/still_love.jpg";
import track2 from "../../../assets/mp3/Scorpions - Still Loving You.mp3";
import track3 from "../../../assets/mp3/Scorpions - Wind Of Change.mp3";


export const Playlist = () => {
    return (
        <>
            <div className={s.tracks}>
                <div className={s.trackBlock}>
                    <div className={s.trackName}>Scorpions - Send Me An Angel</div>
                    <span>
                            <img src={scorpions} className={s.image} alt=''/>
                        </span>
                    <audio controls>
                        <source src={track1} type='audio/mpeg'/>
                    </audio>
                </div>
                <div className={s.trackBlock}>
                    <div className={s.trackName}>Scorpions - Still Loving You</div>
                    <span>
                            <img src={scorpions2} className={s.image} alt=''/>
                        </span>
                    <audio controls>
                        <source src={track2} type='audio/mpeg'/>
                    </audio>
                </div>
                <div className={s.trackBlock}>
                    <div className={s.trackName}>Scorpions - Wind Of Change</div>
                    <span>
                            <img src={scorpions} className={s.image} alt=''/>
                        </span>
                    <audio controls>
                        <source src={track3} type='audio/mpeg'/>
                    </audio>
                </div>
            </div>
        </>
    )
}