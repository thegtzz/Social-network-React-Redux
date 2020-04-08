import React from "react";
import Friend from "./Friend/Friend";
import s from './Friends.module.css'

const Friends = (props) => {
    let friendsElements = props.state.friends.map( f => <Friend name={f.name} id={f.id}/>)

    return (
        <div className={s.friends}>
            <div>
                {friendsElements}
            </div>

        </div>
    )
}

export default Friends