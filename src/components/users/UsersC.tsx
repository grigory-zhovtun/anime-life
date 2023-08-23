import React from 'react';
import { UserType } from '../../redux/users-reducer';
import axios from 'axios';

type UsersPropsType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount(): void {
        axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    {user.followed ?
                                        <button onClick={() => this.props.unfollow(user.id)}>Unfollowed</button> :
                                        <button onClick={() => this.props.follow(user.id)}>Followed</button>}
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
    }
}

export default Users;