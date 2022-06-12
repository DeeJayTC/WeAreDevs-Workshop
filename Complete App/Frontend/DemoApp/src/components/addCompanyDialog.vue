<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-if="mode==='create'"
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Add Company
      </v-btn>
      <v-btn
        v-if="mode==='update'"
        color="primary"
        text
        v-bind="attrs"
        icon
        v-on="on"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5">
        Add Company
      </v-card-title>
      <adaptive-cards
        :card="card"
        :data="company"
        :use-templating="true"
        @onActionClicked="onCardAction"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import personCard from '@/assets/cards/companyCreate.json'
import { mapState } from 'vuex'
export default {
  name: 'People',
  props: {
    company:{
      type: Object,
      default() {
        return {
          Id: '',
          Name: '',
          Email: '',
          Image: '',
          Description: ''
        }
      }
    },
    mode: {
      type: String,
      default: 'create'
    }
  },
  computed: {
    ...mapState('companies',['companies']),
    card() {
      return personCard
    }
  },
  mounted() {
    this.$store.dispatch('contacts/loadContacts')
    this.$store.dispatch('companies/loadCompanies').then(() => {
      this.person.companies = this.companies
    })

  },
  methods:{
    async onCardAction(data,data2) {
      if (this.mode === 'create') {
        this.$store.dispatch('companies/addCompany', data)
      } else {
        this.$store.dispatch('companies/updateCompany', data)
      }
    }
  }
}
</script>
