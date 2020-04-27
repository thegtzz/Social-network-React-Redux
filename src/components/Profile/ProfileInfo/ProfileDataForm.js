import s from "./ProfileInfo.module.css";
import st from "../../common/FormsControls/FormsControls.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormsControls/FormsControls";


const Input = Element('input')
const Textarea = Element('textarea')

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={st.formSummaryError}>
            {error}
        </div>}

        <span className={s.span}>
            <b>Имя:</b><Field placeholder={"Full name"} name={"fullName"} component={Input}/>
        </span>
        <span>
            <b>Ищу работу: </b><Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
        </span>
        <span>
            <b>Навыки: </b><Field placeholder={"My professional skills"} name={"lookingForAJobDescription"} component={Textarea}/>
        </span>
         <span>
            <b>Обо мне:</b><Field placeholder={"About me"} name={"aboutMe"} component={Textarea}/>
        </span>

        <span><b>Контакты: </b> {Object.keys(profile.contacts)
            .map(key => {
                return <div key={key}>
                    <b>{key}: <Field placeholder={key} name={"contacts." + key} component={Input}/></b>
                </div>
            })}</span>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm