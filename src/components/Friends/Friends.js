import React from "react";
import s from './Friends.module.css'

const Friends = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLjTsWnfiq5ME7swO8un1LUlz92NWwHgeVm4MGZa-vMc3cT7HI&usqp=CAU',
                followed: true,
                fullname: 'Yan',
                status: 'I\'m a boss',
                location: {city: 'Warsaw', country: 'Poland'}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLjTsWnfiq5ME7swO8un1LUlz92NWwHgeVm4MGZa-vMc3cT7HI&usqp=CAU',
                followed: false,
                fullname: 'Lera',
                status: 'I\'m a bank-manager',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLjTsWnfiq5ME7swO8un1LUlz92NWwHgeVm4MGZa-vMc3cT7HI&usqp=CAU',
                followed: true,
                fullname: 'Dimon',
                status: 'I\'m a dota-gamer',
                location: {city: 'Mogilev', country: 'Belarus'}
            },
        ])
    }

    return (
        <div className={s.friend_row}>
            {props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img src={u.photoUrl} alt=""/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)}
        </div>
    )
}

export default Friends