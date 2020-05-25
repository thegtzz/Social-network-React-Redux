import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {getFriends, getTotalUsersCount} from "../../../redux/friends-selectors";
import {requestUsers} from "../../../redux/friends-reducer";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        totalUsersCount: getTotalUsersCount(state),
        users: getFriends(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {dispatch(addPostActionCreator(text))},
        getUsers: requestUsers
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer