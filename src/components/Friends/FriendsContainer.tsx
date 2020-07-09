import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow, requestUsers
} from "../../redux/friends-reducer";
import {Friends} from "./Friends";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getFriends,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/friends-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchePropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchePropsType & OwnPropsType

class FriendsContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Friends totalUsersCount={this.props.totalUsersCount}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     users={this.props.users}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     onPageChanged={this.onPageChanged}
                     followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getFriends(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchePropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {follow, unfollow, getUsers: requestUsers}),
    withAuthRedirect
)(FriendsContainer)
