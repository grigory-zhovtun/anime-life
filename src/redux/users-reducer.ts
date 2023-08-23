import { PostsDataType } from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

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
    users: users,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3
}

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : { ...user })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : { ...user })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId: number) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: UserType[]) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalCount: number) => ({ type: SET_USERS_TOTAL_COUNT, totalCount })

export default usersReducer;