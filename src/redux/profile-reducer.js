import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post.', likesCount: 11},
                {id: 3, message: 'It\'s my second post.', likesCount: 11},
                {id: 4, message: 'Go on rolling.', likesCount: 11},
            ],
            newPostText: '',
            profile: null,
            status: ''
        }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
           return  {
                ...state,
                posts: [...state.posts, {id: 5, message: action.PostText, likesCount: 0}],
                newPostText: ''
            }
        }

        case SET_STATUS:
            return {...state, status: action.status}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        PostText: text.PostMessage
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({ type: SET_STATUS, status})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer