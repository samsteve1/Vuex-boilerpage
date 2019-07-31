import { setHttpToken } from '../../../helpers'

export const register = ( {dispatch} ,  {payload, context} ) => {
    context.ready = false
   return axios.post('/api/register', payload).then((response) => {
    
    clearErrors(context)
    context.ready = true
   }).catch((error) => {
       context.errors = error.response.data.errors
       context.ready = true
   })
    
}

export const login = ({ dispatch }, { payload, context }) => {

    context.ready = false

    return axios.post('/api/login', payload).then((response) => {
       clearErrors(context)
        
    //    dispatch('sayHi', 'wezzy').then(() => {
    //        console.log('say hi dispatched')
    //    })

        dispatch('setToken', response.data.meta.token).then(() => {
           dispatch('fetchUser')
        })

        context.ready = true

    }).catch((error) => {

        context.errors = error.response.data.errors
        context.ready = true
    })
}

export const fetchUser = ({ commit }) => {
    return axios.get('/api/me').then((response) => {
        commit('setAuthenticated', true)
        commit('setUserData', response.data.data)
    })
}
export const setToken = ({commit, dispatch}, token) => {
    commit('setToken', token)
    setHttpToken(token)
}

export const clearErrors = (context) => {
    context.errors = []
}

export const sayHi = ({commit, dispatch}, hi) => alert(hi)