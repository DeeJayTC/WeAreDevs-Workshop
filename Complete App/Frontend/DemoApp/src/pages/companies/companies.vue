<template>
  <div class="d-flex flex-grow-1 flex-column">
    <v-app-bar flat max-height="60">
      <v-spacer></v-spacer>
      <addcontact></addcontact> 
    </v-app-bar>
    <v-row class="flex-grow-0" dense>
      <v-col v-for="company in companies" :key="company.id" cols="3">
        <v-card flat>
          <adaptive-cards :card="card" :data="company" :use-templating="true" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import companyCard from '@/assets/cards/companyCard.json'
import addcontact from '@/components/addCompanyDialog.vue'
import { mapState } from 'vuex'
export default {
  components: {
    addcontact
  },
  data() {
    return {
      loadingInterval: null,

      isLoading1: true
    }
  },
  computed: {
    ...mapState('companies',['companies']),
    card() {
      return companyCard
    }
  },
  mounted() {
    this.$store.dispatch('companies/loadCompanies')
  },
  beforeDestroy() {
    this.clear()
  },
  methods: {
    addContact() {

    },
    clear() {
      clearInterval(this.loadingInterval)
    }
  }
}
</script>
