import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let newMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (<Dialogs sendMessage={ sendMessage }
                     newMessageChange={ newMessageChange }
                     dialogsPage={state}/>)
}

export default DialogsContainer