import React, {useState} from "react";
import cn from "classnames"
import s from "./Paginator.module.css";
import arrow from "../../../assets/images/arrow-right-01-512.png"


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize,
                                               currentPage, onPageChanged,
                                               portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.main}>
            { portionNumber > 1 &&
            <button onClick={ () => { setPortionNumber(portionNumber - 1)}} className={s.btn}>
                <img src={arrow} alt="" className={cn(s.arrowNext, s.arrowPrev)}/>
            </button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn(currentPage === p && s.selectedPage, s.page)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
                })}
            { portionCount > portionNumber &&
            <button onClick={ () => {setPortionNumber(portionNumber + 1)}} className={s.btn}>
                <img src={arrow} alt="" className={s.arrowNext}/>
            </button>}
        </div>
    )
}
