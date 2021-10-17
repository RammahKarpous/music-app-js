<template>
	<div class="app-wrapper">
		<Sidebar />

		<div class="bg">
			<img src="./assets/logo.svg" alt="Logo" />

			<div class="pages">
				<router-view />
			</div>
		</div>
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

::-webkit-scrollbar {
	width: 6px;
	background: $black-400;
}

::-webkit-scrollbar-thumb {
	background: $black-500;
	transition: 0.4s;

	&:hover {
		background: lighten($black-500, 5%);
	}
}

.app-wrapper {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	display: grid;
	grid-template-columns: 230px 1fr 230px;

	.bg {
		grid-column: 2;
		padding: 15px;
	}

	.pages {
		position: relative;
		grid-column: 2;

		display: flex;
		justify-content: center;
		align-items: center;

		.logo {
			position: absolute;
			left: 0;
			top: 0;
		}
	}
}
</style>
