import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preloader} from "../common/Preloader/Preloader";
import s from './Profile.module.css'
import {ProfileType} from "../../types/types";


type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<PropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.mainContent}>
            <ProfileInfo isOwner={props.isOwner} saveProfile={props.saveProfile}
                         savePhoto={props.savePhoto} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}