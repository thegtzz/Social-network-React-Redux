import {createSelector} from "reselect"
import { AppStateType } from "./redux-store"


const getFriendsSelector = (state: AppStateType) => {
    return state.friendsPage.users
}

export const getFriends = createSelector(getFriendsSelector,
    (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.friendsPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.friendsPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.friendsPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.friendsPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.friendsPage.followingInProgress
}