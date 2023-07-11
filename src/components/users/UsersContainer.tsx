import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { UserType, followAC, setUsersAC, unFollowAC } from "../../redux/users-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)