import state from './state'
import * as  mutations from './mutation'
import * as  actions from './actions'
import * as  getters from './getters'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}