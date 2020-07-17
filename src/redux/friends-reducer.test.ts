import friendsReducer, {actions, InitialStateType} from "./friends-reducer"

let state: InitialStateType
beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'Yan 1', followed: false, photos: {small: null, large: null}, status: 'status 1'},
            {id: 1, name: 'Vlad', followed: false, photos: {small: null, large: null}, status: 'status 2'},
            {id: 2, name: 'Lera', followed: true, photos: {small: null, large: null}, status: 'status 3'},
            {id: 3, name: 'Alina', followed: false, photos: {small: null, large: null}, status: 'status 4'},
            {id: 4, name: 'Nika', followed: true, photos: {small: null, large: null}, status: 'status 5'}
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test("follow success", () => {
    const newState = friendsReducer(state, actions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("unfollow success", () => {
    const newState = friendsReducer(state, actions.unfollowSuccess(4))
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[4].followed).toBeFalsy()
})