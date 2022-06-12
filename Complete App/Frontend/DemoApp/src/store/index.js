import Vue from 'vue'
import Vuex from 'vuex'

// Global vuex
import AppModule from './app'
import contacts from './contacts'
import companies from './companies'
Vue.use(Vuex)

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  modules: {
    app: AppModule,
    contacts: contacts,
    companies: companies
  }
})

export default store
