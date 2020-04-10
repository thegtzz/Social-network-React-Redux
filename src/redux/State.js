import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post.', likesCount: 11},
                {id: 3, message: 'It\'s my second post.', likesCount: 11},
                {id: 4, message: 'Go on rolling.', likesCount: 11},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'How s your react?'},
                {id: 3, message: 'Whats up?'},
                {id: 4, message: 'Its ok'},
                {id: 5, message: 'Go code in react?'},
            ],
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Yan'},
                {id: 2, name: 'Lera'},
                {id: 3, name: 'Alina'},
                {id: 4, name: 'Dimon'},
                {id: 5, name: 'Vlad'},
            ]
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Yan'},
                {id: 2, name: 'Lera'},
                {id: 3, name: 'Alina'},
                {id: 4, name: 'Dimon'},
                {id: 5, name: 'Vlad'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}

export default store
window.store = store
