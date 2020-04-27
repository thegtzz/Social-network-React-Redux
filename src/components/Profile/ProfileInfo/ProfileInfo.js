import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                 <img
                    src={props.profile.photos.large || userPhoto} className={s.mainPhoto}
                    alt=""/>
                    {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={props.profile}
                                                profile={props.profile}
                                                onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}
                                   goToEditMode={() => {setEditMode(true)}}
                                   isOwner={props.isOwner}/>}
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}

        <span className={s.span}>
            <b>Имя:</b> {props.profile.fullName}
        </span>
        <span>
            <b>Ищу работу: </b>{(props.profile.lookingForAJob) ? 'да' : 'нет'}
        </span>
        <span>
            <b>Навыки: </b>{props.profile.lookingForAJobDescription}
        </span>
        <span>
            <b>Обо мне:</b> {props.profile.aboutMe}
        </span>

        <span><b>Контакты: </b> {Object.keys(props.profile.contacts)
            .map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}</span>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo