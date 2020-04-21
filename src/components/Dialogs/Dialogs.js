import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


const Textarea = Element('textarea')
const maxLength50 = maxLengthCreator(50)

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Type your message"} name={"DialogMessage"} component={Textarea}
                    validate={[requiredField, maxLength50]}/>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogSendMessage'})(DialogsForm)

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> )
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> )


    const onSubmit = (formData) => {
        props.sendMessage(formData.DialogMessage)
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs