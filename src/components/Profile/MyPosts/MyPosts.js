import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";


const Textarea = Element('textarea')
const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Add post"} name={"PostMessage"}
                       component={Textarea} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'addPost'})(MyPostsForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const onSubmit = (formData) => {
        props.addPost(formData)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <MyPostsReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts