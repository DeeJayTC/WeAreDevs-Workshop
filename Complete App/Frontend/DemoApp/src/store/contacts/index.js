/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import axios from 'axios'

const state = {
  contacts: []
}
  
const mutations = {
  loadContacts(state, contacts) {
    state.contacts = contacts
  },
  addContact(state, contact) {
    state.contacts.push(contact)
  },
  deleteContact(state,contactId) {
    const contact = state.contacts.find((p) =>  p.Id === contactId  )
    const index = state.contacts.indexOf(contact)

    console.log(index)

    if (index > -1) {
      state.contacts.splice(index, 1)
    }
  },
  updateContact(state, contact) {
    const existingPerson = state.contacts.find((p) => p.id === person.id)

    if (existingPerson) {
      existingPerson.displayName = person.displayName
      existingPerson.jobTitle = person.jobTitle
      existingPerson.mail = person.mail
      existingPerson.officeLocation = person.officeLocation
      existingPerson.businessPhones = [person.businessPhones]
      existingPerson.image = person.image !== '' ? person.image : existingPerson.image
    }
  }
}
  
const actions = {
  addContact({ commit }, contact) {

    console.log(contact.data)
    axios.post('https://localhost:7165/people', {
      'Name': contact.data.name,
      'Email': contact.data.email,
      'Phone': contact.data.phone,
      'Image': contact.data.image,
      'CompanyId': contact.data.company,
      'Job': contact.data.job,
      'Id': contact.data.id
    }).then((result) => {
      commit('addContact', contact)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  
  },
  updateContact({ commit }, contact) {
    axios.put('https://localhost:7165/people/' + contact.data.contactId, {
      'Name': contact.data.name,
      'Email': contact.data.email,
      'Phone': contact.data.phone,
      'Image': contact.data.image,
      'Job': contact.data.job
    }).then((result) => {
      commit('updateContact', contact)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  
  },
  deleteContact({ commit }, contactId) {
    axios.delete('https://localhost:7165/people/' + contactId).then((result) => {
      commit('deleteContact', contactId)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  
  },
  loadContacts({ commit }) {
    axios.get('https://localhost:7165/people?$expand=company').then((result) => {
      commit('loadContacts', result.data)

      return result.data
    }
    ).catch((error) => {  console.log(error) })  }
}
  
const getters = {
  getContacts(state) {  return state.contacts } 
}
  
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
