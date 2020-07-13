import {PostType, ProfileType, PhotosType} from "../types/types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";


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
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.PostText, likesCount: 0}],
                newPostText: ''
            }
        }

        case 'SN/PROFILE/SET_STATUS':
            return {...state, status: action.status}

        case 'SN/PROFILE/SET_USER_PROFILE':
            return {...state, profile: action.profile}

        case 'SN/PROFILE/DELETE_POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}

        default:
            return state
    }
}

export const actions = {
    addPostActionCreator: (text: string) => ({type: 'SN/PROFILE/ADD-POST', PostText: text} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}



export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(actions.setUserProfile(data))

}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error('User id cannot be null')
        }
    } else {
        // dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer