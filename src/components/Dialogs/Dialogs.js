import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = state.messages.map( m => <Message message={m.message}/> )


    let sendMessage = () => {
        props.sendMessage()
    }

    let newMessageChange = (e) => {
        let text = e.target.value
        props.newMessageChange(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={ newMessageChange } value={state.newMessageText}/>
                </div>
                <div>
                    <button onClick={ sendMessage }>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs