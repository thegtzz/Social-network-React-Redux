import React, {useState} from "react";
import s from "./FriendSearch.module.css";


export const FriendSearch = ({ onSearch }) => {
    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
    }

    return (
        <div className={s.friendSearch}>
            <button className={s.btnSearch} onClick={() => onSearch(value)}/>
            <input type="text" placeholder={'Search friends'} value={value} onChange={valueChangeHandler}/>
        </div>
    )
}