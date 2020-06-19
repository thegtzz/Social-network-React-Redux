import React from "react";
import s from "./NewsSidebar.module.css";
import cn from "classnames";


export const NewsSidebar = () => {
    return (
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
    )
}