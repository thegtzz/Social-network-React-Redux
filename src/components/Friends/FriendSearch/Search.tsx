import React from "react";
import s from "./FriendSearch.module.css";
import {Formik, Form, Field} from "formik";
import {FilterType} from "../../../redux/friends-reducer";


const friendsSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: "true" | "false" | "null"
}

export const FriendsSearch: React.FC<PropsType> = (props) => {
    const submit = (values: FormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={friendsSearchFormValidate}
            onSubmit={submit}>
            {({isSubmitting}) => (
                <Form className={s.friendSearch}>
                    <button type="submit" disabled={isSubmitting} className={s.btnSearch}/>
                    <Field type="text" name="term"  placeholder='Search friends'/>
                    <span className={s.params}>Parameters: </span>
                    <Field name='friend' as='select' className={s.selectField}>
                        <option value="null">Show all</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                </Form>
            )}
        </Formik>
    </>
}