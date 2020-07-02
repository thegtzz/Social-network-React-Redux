import React, {useEffect} from "react";
import {Form, Field} from "react-final-form";
import s from './MyPosts.module.css'
import pm from '../Profile.module.css'
import cn from 'classnames'
import userImage from "../../../assets/images/upload_profile_photo.png";
import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Post} from "./Post/Post";
import {ProfileFriendsBlock} from "../../Friends/ProfileFriendsBlock/ProfileFriendsBlock";


const Textarea = Element('textarea')
const maxLength2000 = maxLengthCreator(2000)

const MyPostsForm = ({profile, onSubmit}) => {
    useEffect(() => {
        let textarea = document.querySelector('textarea')
        textarea.addEventListener('input', function () {
            this.style.height = 'auto'
            this.style.height = this.scrollHeight + 'px'
        })
        textarea.style.height = 'auto'
    })

    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit, form}) => (
                <form onSubmit={async event => {
                    await handleSubmit(event)
                    form.reset()}
                } className={cn(pm.sendPost, s.postsBlock)}>
                    <div className={s.postField}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>
                            <img src={profile.photos.small || userImage} alt=''/>
                        </a>
                        <Field placeholder={"Write something..."} name={"PostMessage"}
                               component={Textarea}  validate={maxLength2000}/>
                    </div>
                    <div className={s.submitPost}>
                        <div className={s.addPostButtonWrap}>
                            <button className={s.addWallPostButton}>Post</button>
                        </div>
                    </div>
                </form>
            )}
        </Form>
    )
}

export const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message}
                                                    profile={props.profile}
                                                    key={p.id}/>)
    const onSubmit = formData => {
        props.addPost(formData.PostMessage)
    }

    return <>
        <ProfileFriendsBlock totalUsersCount={props.totalUsersCount} users={props.users}/>
        <MyPostsForm profile={props.profile} onSubmit={onSubmit}/>
        <div className={pm.wallPosts}>
            { postsElements }
        </div>
    </>
}