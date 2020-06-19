import React from "react";
import s from "./News.module.css"
import {NewsSearch} from "./NewsSearch/NewsSearch";
import {NewsPost} from "./NewsPost/NewsPost";
import {NewsSidebar} from "./NewsSidebar/NewsSidebar";


export const News = () => {
    return (
        <div className={s.mainContent}>
            <NewsSearch/>
            <NewsPost/>
            <NewsSidebar/>
        </div>
    )
}
