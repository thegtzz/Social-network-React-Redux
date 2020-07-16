import React from "react";
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage,
    authorizedUserId: state.auth.userId,
} as unknown as MapPropsType)

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
    {logOut})(HeaderContainer)