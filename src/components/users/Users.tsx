import React from 'react';
import { UserType } from '../../redux/users-reducer';

import s from "./Users.module.scss"

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pages}>
                {pages.map(page => {
                    return <div
                        className={props.currentPage === page ? s.activePage : ''}
                        onClick={() => props.onPageChanged(page)}>{page}
                    </div>
                })}
            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollowed</button> :
                                    <button onClick={() => props.follow(user.id)}>Followed</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
};

export default Users;