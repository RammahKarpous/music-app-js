<template>
	<div class="sidebar">
		<ProfilePicture />
		<Playlist />
		<PlayingSong />
	</div>
</template>

<script>
import ProfilePicture from "./ProfilePicture.vue";
import Playlist from "./Playlist.vue";
import PlayingSong from "./PlayingSong.vue";

export default {
	name: "Sidebar",
	components: {
		ProfilePicture,
		Playlist,
		PlayingSong
	}
};
</script>

<style lang="scss" scoped>
$width: 230px;

.sidebar {
	background: #1a1817;
	width: $width;
	height: 100vh;

	display: grid;
	grid-template-rows: $width 1fr ($width + 100px);
}
</style>