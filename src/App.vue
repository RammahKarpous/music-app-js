<template>
	<Sidebar />
	<router-view />
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
</style>
