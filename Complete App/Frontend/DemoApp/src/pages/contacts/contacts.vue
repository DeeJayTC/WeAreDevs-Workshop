<template>
  <div class="d-flex flex-grow-1 flex-column">
    <v-app-bar flat max-height="60">
      <v-spacer></v-spacer>
      <addcontact></addcontact> 
    </v-app-bar>
    <v-row class="flex-grow-0" dense>
      <v-col v-for="contact in contacts" :key="contact.id" cols="3">
        <v-card flat>
          <v-card-actions>
            <v-spacer></v-spacer>
            <addcontact :mode="'update'" :person="contact"></addcontact> 
            <v-btn icon @click="deleteContact(contact.Id)"><v-icon>mdi mdi-delete</v-icon></v-btn>
          </v-card-actions>
          <adaptive-cards :card="card" :data="contact" :use-templating="true" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import personCard from '@/assets/cards/personCard.json'
import addcontact from '@/components/addContactDialog.vue'
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
    ...mapState('contacts',['contacts']),
    card() {
      return personCard
    }
  },
  mounted() {
    this.$store.dispatch('contacts/loadContacts')
  },
  beforeDestroy() {
    this.clear()
  },
  methods: {
    addContact() {

    },
    deleteContact(contactId) {
      this.$store.dispatch('contacts/deleteContact',contactId)
    },
    clear() {
      clearInterval(this.loadingInterval)
    }
  }
}
</script>
