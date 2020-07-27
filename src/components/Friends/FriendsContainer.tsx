import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow, requestUsers, FilterType
} from "../../redux/friends-reducer";
import {Friends} from "./Friends";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getFriends, getFriendsFilter,
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
    followingInProgress: Array<number>,
    filter: FilterType
}

type MapDispatchePropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}
type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchePropsType & OwnPropsType

class FriendsContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
         const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Friends totalUsersCount={this.props.totalUsersCount}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     onFilterChanged={this.onFilterChanged}
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
        followingInProgress: getFollowingInProgress(state),
        filter: getFriendsFilter(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchePropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {follow, unfollow, getUsers: requestUsers}),
    withAuthRedirect
)(FriendsContainer) as React.ComponentType
