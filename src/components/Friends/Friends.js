import React, {useState} from "react";
import s from "./Friends.module.css";
import {Paginator} from "../common/Paginator/Paginator";
import {Friend} from "./Friend/Friend";
import {FriendSearch} from "./FriendSearch/FriendSearch";


let Friends = ({totalUsersCount, currentPage, onPageChanged, pageSize, ...props}) => {
    const [search, setSearch] = useState('')

    const SearchHandler = search => {
        setSearch(search)
    }

    const getFilteredData = () => {
        if(!search) {
            return props.users
        }
        return props.users.filter(item => {
            return item['name'].toLowerCase().includes(search.toLowerCase())
        })
    }

    const filteredData = getFilteredData()

    // Stub for future full-featured search

    // const displayedData = _.chunk(filteredData, pageSize)[currentPage]

    return (
        <div className={s.friendList}>
            <div className={s.friendCount}>
                All friends <span className={s.totalUsers}>{totalUsersCount}</span>
            </div>
            <FriendSearch onSearch={SearchHandler}/>
            {filteredData.map(u => <Friend user={u}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           key={u.id}
                                           followingInProgress={props.followingInProgress}/>
            )}
            <div className={s.paginator}>
                <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged}
                           pageSize={pageSize}/>
            </div>
        </div>
    )
}

export default Friends