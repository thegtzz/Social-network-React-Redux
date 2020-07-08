const ADD_MESSAGE = 'ADD-MESSAGE'

type DialogType = {
    id: number,
    message: string
}

type MessageType = {
    id: number,
    name: string
}

let initialState = {
            messages: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'How s your react?'},
                {id: 3, message: 'Whats up?'},
                {id: 4, message: 'Its ok'},
                {id: 5, message: 'Go code in react?'},
            ] as Array<DialogType>,
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Vladislav Sviridov'},
                {id: 2, name: 'Lera Binkevich'},
                {id: 3, name: 'Alina Saganovich'},
                {id: 4, name: 'Dimon Apanasik'},
                {id: 5, name: 'Vlad Klypko'},
            ] as Array<MessageType>
        }

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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


export type addMessageActionCreatorType = {
    type: typeof ADD_MESSAGE,
    messageText: string
}

export const addMessageActionCreator = (text: string): addMessageActionCreatorType => {
    return {
        type: ADD_MESSAGE,
        messageText: text
    }
}


export default dialogsReducer