import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = (state, token) => {

    if (isEmpty(token)) {
        localforage.removeItem('authtoken')
        return
    }
    localforage.setItem('authtoken', token)  
}

export const setAuthenticated = (state, authStatus) => {
    state.user.authenticated = authStatus
}

export const setUserData = (state, userData) => {
    state.user.data = userData
}

export const testCommit = (state, token) => { alert(state)}