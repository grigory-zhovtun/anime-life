import React from 'react';
import { UserType } from '../../redux/users-reducer';
import axios from 'axios';

type UsersPropsType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }



    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
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
    );
};

export default Users;