import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage,
    authorizedUserId: state.auth.userId,
})

export default connect(mapStateToProps, {logOut})(HeaderContainer)