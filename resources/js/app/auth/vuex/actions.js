import { setHttpToken } from '../../../helpers'
import { isEmpty } from 'lodash'
import localforage from 'localforage'

export const register = ( {dispatch} ,  {payload, context} ) => {
    context.ready = false
   return axios.post('/api/register', payload).then((response) => {
    
    clearErrors(context)

    dispatch('setToken', response.data.meta.token).then(() => {
        dispatch('fetchUser')
     })
     
    context.ready = true
    return true
   }).catch((error) => {
       context.errors = error.response.data.errors
       context.ready = true
   })
    
}

export const login = ({ dispatch }, { payload, context }) => {

    context.ready = false

    return axios.post('/api/login', payload).then((response) => {
       clearErrors(context)

        dispatch('setToken', response.data.meta.token).then(() => {
           dispatch('fetchUser')
        })

        context.ready = true
        return true

    }).catch((error) => {

        context.errors = error.response.data.errors
        context.ready = true
    })
}

export const logout = ({ dispatch }) => {
    return axios.post('/api/logout').then(() => {
        dispatch('clearAuth')
    })
}

export const fetchUser = ({ commit }) => {
    return axios.get('/api/me').then((response) => {
        commit('setAuthenticated', true)
        commit('setUserData', response.data.data)
    })
}

export const setToken = ({commit, dispatch}, token) => {

    if( isEmpty(token)) {
        return dispatch('checkTokenExists').then((token) => {
            setHttpToken(token)
           
        })
    }

    commit('setToken', token)
    setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }) => {
    return localforage.getItem('authtoken').then((token) => {
        if (isEmpty(token)) {
            return Promise.reject('NO_STORAGE_TOKEN');
        }
        
        return Promise.resolve(token)
    })
}

export const clearAuth = ({ commit }) => {
    commit('setAuthenticated', false)
    commit('setUserData', null)
    commit('setToken', null)
    setHttpToken(null)
}

export const clearErrors = (context) => {
    context.errors = []
}

export const sayHi = ({commit, dispatch}, hi) => alert(hi)