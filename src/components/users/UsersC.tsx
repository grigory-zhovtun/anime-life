import React from 'react';
import { UserType } from '../../redux/users-reducer';
import s from "./Users.module.scss"
import axios from 'axios';

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount(): void {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize )
        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={s.pages}>
                    {pages.map(page => {
                        return <div 
                            className={this.props.currentPage === page ? s.activePage : ''}
                            onClick={() => this.onPageChanged(page)}>{page}                            
                        </div>
                    })}   
                </div>
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