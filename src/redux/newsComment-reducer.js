const ADD_NEWS_POST_COMMENT = 'ADD_NEWS_POST_COMMENT'


let initialState = {
    comments: [
        {id: 1, commentBody: 'Awesome story!'}
    ]
}

export const newsCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS_POST_COMMENT: {
            return {
                ...state,
                comments: [...state.comments, {id: Date.now(), commentBody: action.text}]
            }
        }

        default:
            return state
    }
}

export const addNewsPostActionCreator = text => {
    return {
        type: ADD_NEWS_POST_COMMENT,
        text
    }
}