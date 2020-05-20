import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";


const Textarea = Element('textarea')
const maxLength50 = maxLengthCreator(50)

const DialogsForm = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit, form}) => (
                <form onSubmit={async (event) => {
                        await handleSubmit(event)
                        form.reset()
                }}>
                    <Field placeholder={"Type your message"} name={"DialogMessage"} component={Textarea}
                            validate={maxLength50}/>
                    <div>
                        <button>Send message</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export const Dialogs = (props) => {

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
                <DialogsForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
