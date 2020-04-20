import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt=""/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <span className={s.span}><b>Имя:</b> {props.profile.fullName}</span>
                <span><b>Обо мне:</b> {props.profile.aboutMe}</span>
                <span><b>Контакты: </b>{props.profile.contacts.vk}</span>
                <span><b>Ищу работу: </b>{(props.profile.lookingForAJob) ? 'да' : 'нет'}</span>
            </div>
        </div>
    )
}

export default ProfileInfo