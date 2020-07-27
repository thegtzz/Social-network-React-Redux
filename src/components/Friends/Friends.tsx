import React, {useState} from "react";
import s from "./Friends.module.css";
import {Paginator} from "../common/Paginator/Paginator";
import {Friend} from "./Friend/Friend";
import {FriendSearch} from "./FriendSearch/FriendSearch";
import {UserType} from "../../types/types";
import { FriendsSearch } from "./FriendSearch/Search";
import {FilterType} from "../../redux/friends-reducer";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Friends: React.FC<PropsType> = ({totalUsersCount,
                                                 currentPage, onPageChanged,
                                                 pageSize, users,
                                                 ...props}) => {
    const [search, setSearch] = useState('')

    const SearchHandler = (search: string) => {
        setSearch(search)
    }

    const getFilteredData = () => {
        if(!search) {
            return users
        }
        return users.filter(item => {
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
            {/*<FriendSearch onSearch={SearchHandler}/>*/}
            <FriendsSearch onFilterChanged={props.onFilterChanged}/>
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