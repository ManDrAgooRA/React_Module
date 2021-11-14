import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { usersActions, fetchUserSuccess } from './actions/user';
import * as api from '../apis'

const userMiddleWare = store => next => async (action) => {
    const { isLogin } = store.getState().user

    if (action.type !== usersActions.FETCH_USER_SUCCESS && !isLogin && localStorage.getItem('session_id')) {
        const sessionId = localStorage.getItem('session_id')
        const user = await api.getAccount(sessionId)

        store.dispatch(fetchUserSuccess(user))
    }

    next(action);
}


const middleWare = [thunk, userMiddleWare];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)