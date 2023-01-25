<!-- eslint-disable vue/no-mutating-props -->
<template>
	<v-dialog v-model="showModal" width="500">
		<v-card>
			<v-card-title class="headline dark" primary-title>
				Адрес пользователя
			</v-card-title>
			<v-card-text class="pa-5">
				<h3>{{ address }}</h3>
			</v-card-text>
			<v-card-actions class="pa-5">
				<v-btn class="ml-auto" @click="$emit('close', false)" outlined>Close</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'ModalVue',
	props: {
		address: {
			type: String,
			required: true
		},
		showModal: {
			type: Boolean,
			required: true,
		}
	},
}
</script>

<style lang="scss" scoped>

</style>