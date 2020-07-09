import React, {ChangeEvent, useEffect, useState} from "react";


type PropsType = {
    editMode: boolean
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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