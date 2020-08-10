import React, {useEffect} from "react";
import s from "./Friends.module.css";
import {Paginator} from "../common/Paginator/Paginator";
import {Friend} from "./Friend/Friend";
import {FriendsSearch} from "./FriendSearch/Search";
import {FilterType, requestUsers} from "../../redux/friends-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getFriends,
    getFriendsFilter,
    getPageSize,
    getTotalUsersCount
} from "../../redux/friends-selectors";
// import {FriendSearch} from "./FriendSearch/FriendSearch";


type PropsType = {}

export const Friends: React.FC<PropsType> = ({...props}) => {
    const users = useSelector(getFriends)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getFriendsFilter)

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const dispatch = useDispatch()
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
         dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    // const [search, setSearch] = useState('')
    // const SearchHandler = (search: string) => {
    //     setSearch(search)
    // }
    // const getFilteredData = () => {
    //     if(!search) {
    //         return users
    //     }
    //     return users.filter(item => {
    //         return item['name'].toLowerCase().includes(search.toLowerCase())
    //     })
    // }
    // const filteredData = getFilteredData()
    // Stub for future full-featured search
    // const displayedData = _.chunk(filteredData, pageSize)[currentPage]

    return (
        <div className={s.friendList}>
            <div className={s.friendCount}>
                All friends <span className={s.totalUsers}>{totalUsersCount}</span>
            </div>
            {/*<FriendSearch onSearch={SearchHandler}/>*/}
            <FriendsSearch onFilterChanged={onFilterChanged}/>
            {users.map(u => <Friend user={u}
                                           follow={follow}
                                           unfollow={unfollow}
                                           key={u.id}
                                           followingInProgress={followingInProgress}/>
            )}
            <div className={s.paginator}>
                <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged}
                           pageSize={pageSize}/>
            </div>
        </div>
    )
}