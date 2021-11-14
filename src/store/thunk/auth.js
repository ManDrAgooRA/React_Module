import * as api from '../../apis'
import { fetchUserSuccess } from '../actions'


export const getCurrentUser = (requestToken) => {
    return async (dispatch) => {
        const { session_id } = await api.getSessionId(requestToken)
        localStorage.setItem('session_id', session_id)

        const user = await api.getAccount(session_id)
        dispatch(fetchUserSuccess(user))
    }
}