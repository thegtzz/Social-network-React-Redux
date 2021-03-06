import s from "./ProfileInfo.module.css";
import st from "../../common/FormsControls/FormsControls.module.css"
import pm from "../Profile.module.css"
import React from "react";
import {Form, Field} from "react-final-form";
import {Element} from "../../common/FormsControls/FormsControls";
import cn from "classnames";


const Input = Element('input')
const Textarea = Element('textarea')

export const ProfileDataForm = ({profile, error, onSubmit}) => {
    return (
        <Form initialValues={profile} onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={pm.mainInfo}>
                    {error && <div className={st.formSummaryError}>
                        {error}
                    </div>}

                    <div className={s.pageTop}>
                        <label htmlFor='editProfileInfo' className={pm.btnProfileEdit}>Save
                            <button id='editProfileInfo' className={s.hidden}></button>
                        </label>
                        <h1 className={s.name}><Field placeholder={"Full name"} name={"fullName"} component={Input}/></h1>
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
            )}
        </Form>
    )
}
