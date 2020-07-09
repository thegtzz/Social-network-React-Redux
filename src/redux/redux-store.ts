import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import authReducer from './auth-reducer'
import thunkMiddleWare from 'redux-thunk'
// import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import {newsCommentReducer} from "./newsComment-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    friendsPage: friendsReducer,
    newsPostComment: newsCommentReducer,
    auth: authReducer,
    // form: formReducer,
    app: appReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store

export default store