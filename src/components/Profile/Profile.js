import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preloader} from "../common/Preloader/Preloader";
import s from './Profile.module.css'


export const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.mainContent}>
            <ProfileInfo isOwner={props.isOwner} saveProfile={props.saveProfile} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer profile={props.profile}/>
        </div>
    )
}