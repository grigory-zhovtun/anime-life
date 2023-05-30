import React from 'react';
import { UserType } from '../../redux/users-reducer';

type UsersPropsType = {
    users: UserType[]
}

const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photoUrl} alt="ava"/>
                            </div>
                            <div>
                                {user.followed ? <button>Unfollowed</button> : <button>Followed</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;