const state = {
	isLoading: false,
	error: null,
	userFilterBy: 'all'
}

const getters = {
}

export const getterTypes = {
}

export const actionTypes = {
	setUserFilterBy: "[filters] setUserFilterBy"
}

export const mutationTypes = {
	setFilterStart: "[filters] setFilterStart",
	setFilterSuccess: "[filters] setFilterSuccess",
	setFilterFailure: "[filters] setFilterFailure",
}

const mutations = {
	[mutationTypes.setFilterStart](state) {
		state.isLoading = true;
	},
	[mutationTypes.setFilterSuccess](state, data) {
		state.isLoading = false;
		state.userFilterBy = data;
	},
	[mutationTypes.setFilterFailure](state, error) {
		state.isLoading = false;
		state.error = error;
	}
}

const actions = {
	[actionTypes.setUserFilterBy](context, data) {
		try {
			context.commit(mutationTypes.setFilterStart);
			context.commit(mutationTypes.setFilterSuccess, data);
		} catch (error) {
			context.commit(mutationTypes.setFilterFailure)
		}
	}
}

export default {
	state,
	mutations,
	actions,
	getters,

}