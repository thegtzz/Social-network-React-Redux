import React, {useState} from "react";
import {Field, Form} from "react-final-form";
import s from "./NewsPost.module.css";
import ps from "../../Profile/MyPosts/Post/Post.module.css";
import userPhoto from "../../../assets/images/upload_profile_photo.png";
import {LikesCounter} from "../../common/LikesCounter/LikesCounter";
import {DialogDropupMenu} from "../../Dialogs/DialogDropupMenu/DialogDropupMenu";
import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {addNewsPostActionCreator} from "../../../redux/newsComment-reducer";
import {Comment} from "../NewsPostComment/Comment";


const Textarea = Element('textarea')
const maxLength500 = maxLengthCreator(500)

const NewsPostForm = ({onSubmit}) => {
    return <>
        <div className={s.separator}/>
        <Form onSubmit={onSubmit}>
            {({handleSubmit, form}) => (<form className={s.NewsPostForm} onSubmit={event => {
                    handleSubmit(event)
                    form.reset()
                }}>
                    <DialogDropupMenu/>
                    <Field placeholder={"Leave a comment..."} name={"NewsPostComment"} component={Textarea}
                            validate={maxLength500} onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    handleSubmit(e)
                                    form.reset()
                                }
                    }}/>

                    <button className={s.btnSendPost}/>
                </form>
            )}
        </Form>
    </>
}


export const NewsPost = props => {
    const [commented, setCommented] = useState(false)

    const handleComment = () => {
        setCommented(true)
    }

    const state = useSelector(state => state.newsPostComment)
    const dispatch = useDispatch()

    const onSubmit = formData => {
        dispatch(addNewsPostActionCreator(formData.NewsPostComment))
    }

    return (
        <div className={s.newsPost}>
            <div className={ps.wallPostHeaderWrap}>
                <img className={ps.wallPostImage} src={userPhoto} alt=""/>
                <div className={ps.wallPostHeaderInfo}>Yan Lukovsky</div>
                <div className={ps.wallPostHeaderDate}>19 June 2020</div>
            </div>
            <div className={ps.wallPostContent}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa cum cumque delectus
                dolorem eaque earum ex facilis fuga harum ipsa iste maxime minima nesciunt nihil provident,
                quae ullam, veritatis.
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eaque eius est facere
                    harum incidunt, inventore ipsa ipsam ipsum quibusdam quis recusandae tempora ullam? Corporis
                    ea magni quidem tenetur voluptas?</div>
                <div>Ad at dignissimos dolor, doloremque dolores eius eligendi incidunt laudantium magni minus
                    nemo non perspiciatis reiciendis ut vero. Consectetur deserunt dolor dolore inventore
                    labore, non porro tempora. Alias, vero, voluptatem!
                </div>
                <div>A accusantium ad, aliquam, aut corporis culpa, delectus eaque eum eveniet itaque laboriosam
                    magni minus mollitia natus nulla obcaecati officia pariatur quae quam quis ratione
                    repellendus sint suscipit velit voluptate.
                </div>
                <img className={s.attachedPhoto}
                     src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg?w=1155&h=1541"
                     alt=""/>
            </div>
            <div className={ps.wallPostLikeWrap}>
                <LikesCounter/>
                <div className={s.wallPostComment} onClick={handleComment}/>
                <div className={ps.wallPostViews}>42</div>
            </div>
            <div>
                {state.comments.map(comment => <Comment key={comment.id} commentBody={comment.commentBody}/>)}
            </div>
            {commented && <NewsPostForm onSubmit={onSubmit}/>}
        </div>
    )
}