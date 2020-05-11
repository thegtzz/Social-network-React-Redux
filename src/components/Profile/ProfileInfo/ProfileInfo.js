import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import cn from "classnames"


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
            <div className={s.profilePhoto}>
                <img
                    src={props.profile.photos.large || userPhoto} className={s.mainPhotoBlock}
                    alt=""/>
                <label htmlFor='profilePhoto' className={s.labelEditMainPhoto}>
                    <div className={s.uploadPhoto}>
                        {props.isOwner &&
                        <input type={"file"} id='profilePhoto' className={s.hidden} onChange={mainPhotoSelected}/>}
                        Edit photo
                    </div>
                </label>
            </div>

            {editMode
                ? <ProfileDataFormReduxForm initialValues={props.profile}
                                            profile={props.profile}
                                            onSubmit={onSubmit}/>
                : <ProfileData profile={props.profile}
                               goToEditMode={() => {
                                   setEditMode(true)
                               }}
                               isOwner={props.isOwner}
                               status={props.status}
                               updateStatus={props.updateStatus}/>}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={s.profileDataBlock}>
            {props.isOwner && <label htmlFor='editProfileInfo' className={s.btnProfileEdit}>Edit<button id='editProfileInfo' className={s.hidden} onClick={props.goToEditMode}></button></label>}
            <div className={s.pageTop}>
                <h1>{props.profile.fullName}</h1>
                <div className={s.profileStatus}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div className={s.profileInfo}>
                <div>
                    <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>Looking for a job:</div>
                    <div className={cn(s.profileInfoAbout)}>{(props.profile.lookingForAJob) ? 'yes' : 'no'}</div>
                </div>
                <div>
                    <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>Skills:</div>
                    <div className={cn(s.profileInfoAbout)}>{props.profile.lookingForAJobDescription}</div>
                </div>
                <div>
                    <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>About me:</div>
                    <div className={cn(s.profileInfoAbout)}>{props.profile.aboutMe}</div>
                </div>
            </div>
            <div className={s.profileContacts}>
                <div className={s.contactSep}>Contacts</div>
                {Object.keys(props.profile.contacts)
                    .map(key => {
                        return props.profile.contacts[key] &&
                            <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>{contactTitle}:</div>
            <div className={s.profileInfoAbout}>{contactValue}</div>
        </div>
    )
}

export default ProfileInfo