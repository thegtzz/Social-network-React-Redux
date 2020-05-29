import React from "react";
import s from './MyPosts.module.css'
import pm from '../Profile.module.css'
import cn from 'classnames'
import Post from "./Post/Post";
import {Form, Field} from "react-final-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";
import userImage from "../../../assets/images/upload_profile_photo.png";
import {ProfileFriendsBlock} from "../../Friends/ProfileFriendsBlock/ProfileFriendsBlock";


const Textarea = Element('textarea')
const maxLength280 = maxLengthCreator(280)

const MyPostsForm = ({profile, onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit, form}) => (
                <form onSubmit={async event => {
                    await handleSubmit(event)
                    form.reset()}
                } className={cn(pm.sendPost, s.postsBlock)}>
                    <div className={s.postField}>
                        <a>
                            <img src={profile.photos.small || userImage} alt=''/>
                        </a>
                        <Field placeholder={"Write something..."} name={"PostMessage"}
                               component={Textarea} validate={maxLength280}/>
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