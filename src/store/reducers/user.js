import { usersActions } from './../actions/user';

const initialState = {
    user: {},
    isLogin: false
}
export function user(state = initialState, action) {
    switch (action.type) {

        case usersActions.FETCH_USER_SUCCESS: {
            return {
                ...state,
                user: { ...action.payload.user },
                isLogin: true,
            }
        }

        case usersActions.CHANGE_IS_LOGIN:
            return {
                ...state,
                isLogin: true,
            }

        default: return state

    }
}