<template>
	<div class="sidebar">
		<div>
			<ProfilePicture />
			<Playlist />
		</div>

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
	background: $black-300;
	width: $width;
	position: absolute;
	left: 0;
	bottom: 0;
	top: 0;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>