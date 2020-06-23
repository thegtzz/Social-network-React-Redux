import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import authReducer from './auth-reducer'
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import {newsCommentReducer} from "./newsComment-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    friendsPage: friendsReducer,
    newsPostComment: newsCommentReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store