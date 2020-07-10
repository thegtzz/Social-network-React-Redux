import {profileAPI} from "../api/api";
import {PostType, ProfileType, PhotosType} from "../types/types";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'




let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 11},
        {id: 3, message: 'It\'s my second post.', likesCount: 11},
        {id: 4, message: 'Go on rolling.', likesCount: 11},
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.PostText, likesCount: 0}],
                newPostText: ''
            }
        }

        case SET_STATUS:
            return {...state, status: action.status}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}

        default:
            return state
    }
}

type ActionsTypes = addPostActionCreatorType | deletePostType | setUserProfileType | setStatusType | savePhotoSuccessType

type addPostActionCreatorType = {
    type: typeof ADD_POST
    PostText: string
}
export const addPostActionCreator = (text: string): addPostActionCreatorType => ({type: ADD_POST, PostText: text})

type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): deletePostType => ({type: DELETE_POST, postId})

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile})

type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))

}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        // dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer