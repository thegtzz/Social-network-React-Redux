import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Redirect, NavLink} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";
import avatar from "../../assets/images/upload_profile_photo.png"
import {DialogDropupMenu} from "./DialogDropupMenu/DialogDropupMenu";


const Textarea = Element('textarea')
const maxLength50 = maxLengthCreator(50)

const DialogsForm = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit, form}) => (
                <form className={s.dialogForm} onSubmit={event => {
                    handleSubmit(event)
                    form.reset()
                }}>
                    <DialogDropupMenu/>
                    <Field placeholder={"Write a message..."} name={"DialogMessage"} component={Textarea}
                            validate={maxLength50} onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    handleSubmit(e)
                                    form.reset()
                                }
                    }}/>

                    <button className={s.btnSendMess}/>
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
            <div className={s.messages}>
                <div className={s.chatHeader}>
                    <div className={s.btnWrapDiv}>
                        <NavLink to={'/dialogs'} className={s.btnBack}>Back</NavLink>
                    </div>
                    <div className={s.chatPeerName}>Vladislav Sviridov</div>
                    <div className={s.lastSeen}>last seen yesterday at 9:14 pm</div>
                    <div className={s.chatHeaderImg}>
                        <img src={avatar} alt=""/>
                    </div>
                </div>
                { messagesElements }
                <DialogsForm onSubmit={onSubmit}/>
            </div>
            <div className={s.dialogSidebar}>
                <div className={s.openedDialogs}>
                    <span>Opened dialogs</span>
                </div>
                { dialogsElements }
            </div>
        </div>
    )
}
