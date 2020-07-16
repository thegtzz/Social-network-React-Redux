import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

type PropsType = {
    isAuth: boolean
}

export const withAuthRedirect = (Component: React.ComponentType) => {
    const RedirectComponent: React.FC<PropsType> = (props) => {
        let {isAuth, ...rest} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...rest}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
