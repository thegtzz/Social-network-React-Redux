import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";
import userImage from "../../../assets/images/user.png";
import Preloader from "../../common/Preloader/Preloader";


const Textarea = Element('textarea')
const maxLength10 = maxLengthCreator(120)

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postsBlock}>
            <div className={s.postField}>
                <a>
                    <img src={props.profile.photos.small || userImage} alt=''/>
                </a>
                <Field placeholder={"Write something..."} name={"PostMessage"}
                       component={Textarea} validate={maxLength10}/>
            </div>
            <div className={s.submitPost}>
                <div className={s.addPostButtonWrap}>
                    <button className={s.addWallPostButton}>Post</button>
                </div>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'addPost'})(MyPostsForm)

const MyPosts = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let postsElements = props.posts.map( p => <Post message={p.message}
                                                    profile={props.profile}
                                                    key={p.id}/>)

    const onSubmit = (formData) => {
        props.addPost(formData.PostMessage)
    }

    return (
        <div>
            <MyPostsReduxForm onSubmit={onSubmit} profile={props.profile}/>
            <div className={s.wallPostBlock}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts