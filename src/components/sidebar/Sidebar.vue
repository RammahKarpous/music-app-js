<template>
	<div class="sidebar"></div>
</template>

<script>

export default {
	name: "Test",
	components: {}
};
</script>

<style lang="scss" scoped>
.sidebar {
	background: #1a1817;
	width: $width;
	height: 100vh;

	display: grid;
	grid-template-rows: $width 1fr ($width + 100px);
}
</style>