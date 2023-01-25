<template>
		<v-dialog v-model="dialogCompose" width="500">
			<v-card>
				<v-card-title class="headline black" primary-title>
					Адрес пользователя
				</v-card-title>
				<v-card-text class="pa-5">
					{{ address }}
				</v-card-text>
				<v-card-actions class="pa-5">
					<v-btn class="ml-auto" @click="saveDraft()" outlined color="primary">Cancel</v-btn>
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
			}
		}

	}
</script>

<style lang="scss" scoped>

</style>