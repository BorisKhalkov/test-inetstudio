<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <div>
  <v-container>
    <div v-if="isLoading">Loading ...</div>
    <div v-if="error">Something gone wrong</div>

    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col cols="12" md="4">
        <v-select v-model="variant" :items="items" clearable label="Filter by country"></v-select>

        <v-select v-model="variant" :items="items" clearable label="Filter by score"></v-select>
      </v-col>

      <UsersList v-if="users" :users="users" />


    </v-row>
  </v-container>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList';
import { actionTypes } from '@/store/modules/users';
import { mapState } from 'vuex';

export default {
  name: 'ContentBlock',

  components: {
    UsersList,
  },

  data: () => ({
    items: [
      'russia',
      'usa',
      '> 20',
      '< 10',
    ],
    variant: 'default',
  }),

  computed: {
    ...mapState({
      isLoading: state => state.users.isLoading,
      users: state => state.users.data,
      error: state => state.users.error,
    }),

  },

  mounted() {
    this.fetchUsers();
  },

  methods: {
    fetchUsers() {
      if (!this.users){
        this.$store.dispatch(actionTypes.getUsers)
      }
    }
  }
}
</script>
