export const usersActions = {
    FETCH_USER_SUCCESS: '[USER] add user',
    CHANGE_IS_LOGIN: '[USER] change isLogin'
}

export const fetchUserSuccess = (user) => ({
    type: usersActions.FETCH_USER_SUCCESS,
    payload: { user }
})

export const changeIsLogin = () => ({
    type: usersActions.CHANGE_IS_LOGIN
})