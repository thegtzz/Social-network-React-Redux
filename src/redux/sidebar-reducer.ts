type FriendsType = {
    id: number
    name: string
}

let initialState = {
    friends: [
        {id: 1, name: 'Yan'},
        {id: 2, name: 'Lera'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Dimon'},
        {id: 5, name: 'Vlad'},
    ] as Array<FriendsType>
}

type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state
}

export default sidebarReducer