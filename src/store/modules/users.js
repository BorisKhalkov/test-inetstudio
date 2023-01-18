import usersApi from '@/api/users';

const state = {
	data: [
		{ header: 'List' },
		{
			avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
			title: 'Brunch this weekend?',
			subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
			address: {
				country: 'russia',
				city: 'Novosibirsk',
			},
			score: 10,
		},
		{ divider: true, inset: true },
		{
			avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
			title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
			subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
			address: {
				country: 'usa',
				city: 'New York',
			},
			score: 5,
		},
		{ divider: true, inset: true },
		{
			avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
			title: 'Oui oui',
			subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
			address: {
				country: 'russia',
				city: 'Moscow',
			},
			score: 15,
		},
		{ divider: true, inset: true },
		{
			avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
			title: 'Birthday gift',
			subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
			address: {
				country: 'usa',
				city: 'San Francisco',
			},
			score: 25,
		},
		{ divider: true, inset: true },
		{
			avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
			title: 'Recipe to try',
			subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
			address: {
				country: 'russia',
				city: 'Saint-Petersburg',
			},
			score: 5,
		},
	],
	isLoading: false,
	error: null,
	country: [
		'russia',
		'usa'
	],
	score: [
		'> 20',
		'< 10'
	]
}

const getters = {
	getUsersByCountry(state, country) {
		return state.data.filter((item) => item.address.country === country);
	},
	getUsersByScore(state, score) {
		return state.data.filter((item) => item.score === score);
	}
}

export const actionTypes = {
	getUsers: "[users] getUsers",
}

export const mutationTypes = {
	getUsersStart: "[users] getUsersStart",
	getUsersSuccess: "[users] getUsersSuccess",
	getUsersFailure: "[users] getUsersFailure",
}

const mutations = {
	[mutationTypes.getUsersStart](state) {
		state.isLoading = true;
		state.data = null;
	},
	[mutationTypes.getUsersSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload
	},
	[mutationTypes.getUsersFailure](state) {
		state.isLoading = false;
	}
}

const actions = {
	[actionTypes.getUsers](context) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.getUsersStart);
			usersApi
				.getUsers()
				.then((data) => {
					context.commit(mutationTypes.getUsersSuccess, data);
					resolve(data)
				})
				.catch(() => {
					context.commit(mutationTypes.getUsersFailure)
				})
		})
	}
}

export default {
	state,
	mutations,
	actions,
	getters,

}