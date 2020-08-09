import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import pm from '../Profile.module.css'
import userPhoto from "../../../assets/images/upload_profile_photo.png";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfileDataForm} from "./ProfileDataForm";
import cn from "classnames"
import {ContactsType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return <>
            <div className={cn(pm.mainPhoto, s.profilePhoto)}>
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
                ? <ProfileDataForm initialValues={props.profile}
                                            profile={props.profile}
                                            onSubmit={onSubmit}/>
                : <ProfileData profile={props.profile}
                               goToEditMode={() => {
                                   setEditMode(true)
                               }}
                               isOwner={props.isOwner}
                               status={props.status}
                               updateStatus={props.updateStatus}/>}
    </>
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = (props) => {
    return (
        <div className={pm.mainInfo}>
            <div className={s.pageTop}>
                {props.isOwner && <label htmlFor='editProfileInfo' className={pm.btnProfileEdit}>Edit<button id='editProfileInfo' className={s.hidden} onClick={props.goToEditMode}/></label>}
                <h1 className={s.name}>{props.profile.fullName}</h1>
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
                        return props.profile.contacts[key as keyof ContactsType] &&
                            <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key as keyof ContactsType]}/>
                    })}
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <div className={cn(s.profileInfoAbout, s.profileInfoLeft)}>{contactTitle}:</div>
            <div className={s.profileInfoAbout}>{contactValue}</div>
        </div>
    )
}