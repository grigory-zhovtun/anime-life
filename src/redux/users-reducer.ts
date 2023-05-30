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
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const users: UserType[] = [
    {id: 1, photoUrl: 'https://i.pinimg.com/550x/0c/17/ae/0c17ae80425d53c2dbd359864166e5f9.jpg', followed: true, fullName: "Grigory", status: 'married', location: {country: 'Russia', city: 'Saint-Petersburg'}},
    {id: 1, photoUrl: 'https://i.pinimg.com/550x/0c/17/ae/0c17ae80425d53c2dbd359864166e5f9.jpg',followed: false, fullName: "Sergey", status: 'married', location: {country: 'Russia', city: 'Moscow'}},
    {id: 1, photoUrl: 'https://i.pinimg.com/550x/0c/17/ae/0c17ae80425d53c2dbd359864166e5f9.jpg',followed: true, fullName: "James", status: 'married', location: {country: 'USA', city: 'New York'}},
]
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