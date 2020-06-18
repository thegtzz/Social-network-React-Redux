import React from "react";
import s from "./News.module.css"
import cn from "classnames"
import userPhoto from "../../assets/images/upload_profile_photo.png"


export const News = () => {
    return (
        <div className={s.mainContent}>
            <div className={s.typeNews}>
                <img src={userPhoto} alt=""/>
                <input type="text" placeholder="What's new?"/>
                <div className={s.newsPhoto}/>
                <div className={s.newsVideo}/>
                <div className={s.newsAudio}/>

                <div className={s.test}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur debitis, delectus dicta
                    earum error excepturi expedita hic illo, impedit laudantium, maiores nesciunt nobis nulla omnis
                    quasi repellat sint. Voluptates.
                </div>
            </div>

            <div className={s.sidebar}>
                <span className={s.sidebarElement}>News</span>
                <span className={cn(s.sidebarElement, s.sidebarMedia)}>Photos</span>
                <span className={cn(s.sidebarElement, s.sidebarMedia)}>Videos</span>
                <span className={cn(s.sidebarElement, s.sidebarMedia)}>Podcasts</span>
                <span className={cn(s.sidebarElement, s.sidebarMedia)}>#stayhome</span>
                <span className={s.sidebarElement}>Recommendations</span>
                <div className={s.separator}/>
                <span className={s.sidebarElement}>Liked</span>
                <span className={s.sidebarElement}>Comments</span>
            </div>
        </div>
    )
}
