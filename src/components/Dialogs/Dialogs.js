import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/State";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> )


    let sendMessage = () => {
        props.dispath(addMessageActionCreator())
    }

    let newMessageChange = (e) => {
        let text = e.target.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispath(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={ newMessageChange } value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={ sendMessage }>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs