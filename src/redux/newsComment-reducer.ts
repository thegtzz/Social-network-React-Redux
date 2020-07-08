const ADD_NEWS_POST_COMMENT = 'ADD_NEWS_POST_COMMENT'

type CommentsType = {
    id: number
    commentBody: string
}

let initialState = {
    comments: [
        {id: 1, commentBody: 'Awesome story!'}
    ] as Array<CommentsType>
}

type InitialStateType = typeof initialState

export const newsCommentReducer = (state = initialState, action: any): InitialStateType => {
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


type addNewsPostActionCreatorType = {
    type: typeof ADD_NEWS_POST_COMMENT
    text: string
}
export const addNewsPostActionCreator = (text: string): addNewsPostActionCreatorType => (
    {type: ADD_NEWS_POST_COMMENT, text}
)