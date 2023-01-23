<template>

	<v-col cols="12" md="4">
		<v-select @change="setFilter($event)" v-model="variant" :items="country" clearable
			label="Filter by country"></v-select>

		<v-select @change="setFilter($event)" v-model="variant" :items="score" clearable
			label="Filter by score"></v-select>
	</v-col>

</template>

<script>
import { actionTypes } from '../store/modules/filters';

export default {
	name: 'FiltersVue',
	data: () => {
		return {
			variant: 'all',
			country: [
				'Russia',
				'Usa'
			],
			score: [
				'> 20',
				'< 10'
			]
		}
	},
	methods: {
		setFilter(e) {
			if (e) {
				this.$store.dispatch(actionTypes.setUserFilterBy, e);
			} else {
				this.$store.dispatch(actionTypes.setUserFilterBy, 'all');
			}
		}
	}
}
</script>