<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <div>
  <v-container>

    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('@/assets/logo.svg')" class="my-3" contain height="100" />
      </v-col>

      <filters-vue />

      <UsersList v-if="users" />

    </v-row>
  </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FiltersVue from '@/components/FiltersVue.vue';
import UsersList from '@/components/UsersList.vue';


export default {
  name: 'ContentBlock',

  components: {
    UsersList,
    FiltersVue,
  },

  computed: {
    ...mapState({
      users: state => state.users.data,
    }),
  },
}
</script>
