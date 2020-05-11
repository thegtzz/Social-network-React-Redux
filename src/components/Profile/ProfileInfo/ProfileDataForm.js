import s from "./ProfileInfo.module.css";
import st from "../../common/FormsControls/FormsControls.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormsControls/FormsControls";
import cn from "classnames";


const Input = Element('input')
const Textarea = Element('textarea')

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.profileDataBlock}>
            <label htmlFor='editProfileInfo' className={s.btnProfileEdit}>Save
                <button id='editProfileInfo' className={s.hidden}></button>
            </label>
            {error && <div className={st.formSummaryError}>
                {error}
            </div>}

            <div className={s.pageTop}>
                <h1><Field placeholder={"Full name"} name={"fullName"} component={Input}/></h1>
            </div>
            <div className={s.profileInfo}>
                <div>
                    <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>Looking for a job:</div>
                    <div className={cn(s.profileInfoAbout)}><Field name={"lookingForAJob"} component={Input} type={"checkbox"}/></div>
                </div>
                <div>
                    <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>Skills:</div>
                    <div className={cn(s.profileInfoAbout)}><Field class={s.textarea} placeholder={"My professional skills"} name={"lookingForAJobDescription"}
                                  component={Textarea}/></div>
                </div>
                <div>
                    <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>About me:</div>
                    <div className={cn(s.profileInfoAbout)}><Field class={s.textarea} placeholder={"About me"} name={"aboutMe"} component={Textarea}/></div>
                </div>
            </div>

            <div className={s.profileContacts}>
                <div className={s.contactSep}>Contacts</div>
                {Object.keys(profile.contacts)
                    .map(key => {
                        return <div key={key}>
                                <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>{key}:</div>
                                <div className={s.profileInfoAbout}><Field placeholder={key} name={"contacts." + key} component={Input}/></div>
                        </div>
                    })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm