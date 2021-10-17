<template>
	<div class="app-wrapper">
		<Sidebar />
		<router-view />
	</div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";

export default {
	components: {
		Sidebar
	}
}
</script>

<style lang="scss">
body {
	background: $black-100;
	margin: 0;
}

.app-wrapper {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	display: grid;
	grid-template-columns: 260px 1fr;
	gap: 60px;
}
</style>
