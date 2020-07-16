import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";
import avatar from "../../assets/images/upload_profile_photo.png"
import {DialogDropupMenu} from "./DialogDropupMenu/DialogDropupMenu";
import {InitialStateType} from "../../redux/dialogs-reducer";


const Textarea = Element('textarea')
const maxLength50 = maxLengthCreator(50)

type DialogsFormOwnProps = {
    onSubmit: (formData: DialogsFormValuesType) => void
}

const DialogsForm: React.FC<DialogsFormOwnProps> = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit, form}) => (
                <form className={s.dialogForm} onSubmit={event => {
                    handleSubmit(event)
                    form.reset()
                }}>
                    <DialogDropupMenu/>
                    <Field placeholder={"Write a message..."} name={"DialogMessage"} component={Textarea}
                            validate={maxLength50} onKeyDown={(e: React.KeyboardEvent) => {
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

type PropsType = {
    dialogsPage: InitialStateType
    addMessage: (messageText: string) => void
}
type DialogsFormValuesType = {
    DialogMessage: string
}

export const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> )
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> )


    const onSubmit = (formData: DialogsFormValuesType) => {
        props.addMessage(formData.DialogMessage)
    }

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
