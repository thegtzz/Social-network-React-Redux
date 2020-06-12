import React from "react";
import s from './Music.module.css'
import scorpions from '../../assets/images/wind_of_change.jpg'
import scorpions2 from '../../assets/images/still_love.jpg'
import track1 from '../../assets/mp3/Scorpions - Send Me An Angel.mp3'
import track2 from '../../assets/mp3/Scorpions - Still Loving You.mp3'
import track3 from '../../assets/mp3/Scorpions - Wind Of Change.mp3'


const Music = () => {
    return (
        <div className={s.mainBlock}>
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
                <div className="input-group-append">
                    <button className={s.btnSearch} type="button"/>
                </div>
            </div>
            <div className={s.playlist}>
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
                <div className={s.friendMusic}>2</div>
            </div>
        </div>
    )
}

export default Music