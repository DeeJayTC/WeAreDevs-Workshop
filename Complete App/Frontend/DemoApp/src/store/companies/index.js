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

    console.log(contact.data)
    axios.post('https://localhost:7165/companies', {
      'Name': contact.data.name,
      'Email': contact.data.email,
      'Description' : '.',
      'Address' : 'home',
      'Country' : 'haha',
      'image' : 'haha',
      'Id': contact.data.id
    }).then((result) => {
      commit('addCompany', contact)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  
  },
  updateCompany({ commit }, contact) {
    axios.put('https://localhost:7165/companies/' + contact.data.contactId, {
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
