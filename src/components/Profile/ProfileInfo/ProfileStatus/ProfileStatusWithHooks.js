import React, {useEffect, useState} from "react";


export const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div onClick={ activateEditMode }>
                <span>{props.status || 'Write your status'}</span>
            </div>
            }
            { editMode &&
            <div>
                <input onBlur={ deactivateEditMode } autoFocus={ true } onChange={ onStatusChange } value={status}/>
            </div>
            }
        </div>
    )
}