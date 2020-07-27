import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {userAPI} from "../api/user-api";
import { APIResponseType } from "../api/api";


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of users ids
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/FRIENDS/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'SN/FRIENDS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/FRIENDS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/FRIENDS/SET_CURRENT_PAGE', currentPage} as const),
    setFilter: (filter: FilterType) => ({type: 'SN/FRIENDS/SET_FILTER', payload: filter} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SN/FRIENDS/SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/FRIENDS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/FRIENDS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}

const friendsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/FRIENDS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case 'SN/FRIENDS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case 'SN/FRIENDS/SET_USERS':
            return {...state, users: action.users}
        case 'SN/FRIENDS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SN/FRIENDS/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.count}
        case 'SN/FRIENDS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'SN/FRIENDS/SET_FILTER':
            return {...state, filter: action.payload}
        case 'SN/FRIENDS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const requestUsers = (currentPage: number,
                             pageSize: number,
                             filter: FilterType): ThunkType => { // Redux's way of typing TA
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setFilter(filter))

        let data = await userAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), actions.followSuccess)
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), actions.unfollowSuccess)
}


export default friendsReducer