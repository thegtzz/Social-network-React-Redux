import React, {useEffect} from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer"))

const App = props => {
    useEffect(() => {
        props.initializeApp()
    })

    if(!props.initialized) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Redirect from={"/"} to={"/profile"}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <React.Suspense fallback={<Preloader/>}>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                </React.Suspense>
                <React.Suspense fallback={<Preloader/>}>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                </React.Suspense>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);


export const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}