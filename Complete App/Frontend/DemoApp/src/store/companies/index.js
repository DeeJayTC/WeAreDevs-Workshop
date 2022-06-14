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
  addCompany(state, company) {
    state.companies.push(company)
  }
}
  
const actions = {
  addCompany({ commit }, contact) {

    axios.post(`${process.env.VUE_APP_API_URI}/companies`, {
      'Name': contact.data.name,
      'Email': contact.data.email,
      'Description' : '.',
      'Address' : 'home',
      'Country' : 'haha',
      'Image' : contact.data.image,
      'Id': contact.data.id
    }).then((result) => {
      commit('addCompany', contact)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  
  },
  updateCompany({ commit }, contact) {
    axios.put(`${process.env.VUE_APP_API_URI}/companies/` + contact.data.contactId, {
      'Name': contact.data.name,
      'Email': contact.data.email,
      'Description' : '.',
      'Address' : 'home',
      'Country' : 'haha',
      'image' : 'haha',
      'Id': contact.data.id
    }).then((result) => {
      commit('updateCompany', contact)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  
  },
  loadCompanies({ commit }) {
    axios.get(`${process.env.VUE_APP_API_URI}/companies`).then((result) => {
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
