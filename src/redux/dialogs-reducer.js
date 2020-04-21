const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
        }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: action.messageText}]
            }
        default:
            return state
    }
}


export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        messageText: text
    }
}


export default dialogsReducer