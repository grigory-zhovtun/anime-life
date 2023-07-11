import {PostsDataType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    photos?: {
        small: "SMALL"
        large: "LARGE"
        }
    uniqueUrlName: string
    followed: boolean
    name: string
    status: string
}

const users: UserType[] = []

const initialState = {
    users: users
}

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : {...user})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : {...user})
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users})

export default usersReducer;