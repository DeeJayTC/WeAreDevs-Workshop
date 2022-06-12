/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import axios from 'axios'

const state = {
  companies: []
}
  
const mutations = {
  loadCompanies(state, companies) {
    state.companies = companies
  },
  addContact(state, company) {
    state.companies.push(company)
  }
}
  
const actions = {
  addContact({ commit }, contact) {
    commit('setAccount', accdata)
  },
  loadCompanies({ commit }) {
    axios.get('https://localhost:7165/companies').then((result) => {
      commit('loadCompanies', result.data)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  }
}
  
export default {
  state,
  mutations,
  actions,
  namespaced: true
}
