<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
		<v-col cols="12" md="4">
			<div v-if="isLoading" class="text-center">
				<v-progress-circular indeterminate color="primary"></v-progress-circular>
			</div>

			<div v-if="error">Something gone wrong</div>

			<v-card max-width="450" class="mx-auto">
				<v-list three-line>
					<transition-group name="list" appear>
						<template v-for="(item, index) in usersList">
							<v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

							<v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

							<v-list-item v-else :key="item.title">
								<v-list-item-avatar>
									<v-img class="avatar" @click="showLocation(item)" :src="item.avatar"></v-img>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title v-html="item.title"></v-list-item-title>
									<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</template>
					</transition-group>
				</v-list>
			</v-card>
			<modal-vue v-if="showModal" @close="showModal=false" :address="address" :showModal="showModal" />
		</v-col>


	<!-- </div> -->
</template>

<script>
import { ref } from 'vue';
import { actionTypes } from '@/store/modules/users';
import { mapState } from 'vuex';
import ModalVue from './ModalVue.vue';

export default {
	name: 'UsersList',
	components: {
		ModalVue,
	},

	data: () => {
		return {
			address: null,
			header: 'User list',
			showModal: ref(false),
		}
	},

	computed: {
		...mapState({
			isLoading: state => state.users.isLoading,
			users: state => state.users.data,
			error: state => state.users.error,
			filterBy: state => state.filters.userFilterBy,
		}),
		usersList() {
			if (this.filterBy === 'all') return this.users;
			if (this.filterBy === '> 20') return this.users.filter(u => u.score > 20);
			if (this.filterBy === '< 10') return this.users.filter(u => u.score < 10);
			return this.users.filter(u => u?.address?.country === this.filterBy)
		}
	},

	mounted() {
		this.fetchUsers();
	},

	methods: {
		fetchUsers() {
			if (!this.users) {
				this.$store.dispatch(actionTypes.getUsers)
			}
		},
		showLocation(item) {
			const country = item.address.country;
			const city = item.address.city;
			this.address = `${country}, ${city}`;
			this.showModal = true;
		}
	},
}
</script>

<style scoped>
.avatar {
	cursor: pointer;
}

.list-enter-active,
.list-leave-active {
	transition: all 0.3s;
}

.list-enter,
.list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
</style>