import {actions, follow, unfollow} from "./friends-reducer"
import {userAPI} from "../api/user-api";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock("../api/user-api")
const userAPImock = userAPI as jest.Mocked<typeof userAPI>

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}
userAPImock.followUser.mockReturnValue(Promise.resolve(result))
userAPImock.unfollowUser.mockReturnValue(Promise.resolve(result))

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPImock.followUser.mockClear()
    userAPImock.unfollowUser.mockClear()
})

test('success follow thunk', async () => {
    const thunk = follow(1)
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test('success unfollow thunk', async () => {
    const thunk = unfollow(1)
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})