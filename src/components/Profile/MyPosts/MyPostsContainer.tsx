import {actions} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {DispatchPropsType, MapPropsType, MyPosts} from "./MyPosts";
import {getFriends, getTotalUsersCount} from "../../../redux/friends-selectors";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        totalUsersCount: getTotalUsersCount(state),
        users: getFriends(state)
    } as MapPropsType
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
    {addPost: actions.addPostActionCreator})(MyPosts)

export default MyPostsContainer
