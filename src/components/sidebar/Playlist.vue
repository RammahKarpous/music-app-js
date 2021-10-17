<template>
	<div class="playlist-wrapper">
		<Button />
		<ul class="playlist">
			<li
				:class="`playlist__name ${playlist.active === true ? 'playlist__active' : ''}`"
				v-for="playlist in playlists"
				:key="playlist.id"
			>
				<a href="#">{{ playlist.name }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Button from "../shared/Button.vue";
import getPlaylists from "../../composables/getPlaylists";

export default {
	name: "Playlist",
	components: {
		Button
	},
	setup() {
		const { playlists, error, load } = getPlaylists()

		load()

		return { playlists, error }
	}
};
</script>

<style lang="scss" scoped>
.playlist-wrapper {
	width: 100%;
	max-height: 315px;
	height: 315px;

	.playlist {
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 84.7%;
		overflow-y: scroll;

		&__name {
			position: relative;
			list-style-type: none;
			width: 100%;

			a {
				text-decoration: none;
				color: #fff;
				display: inline-block;
				@include padding(12px, 20px);
				background: transparent;
				transition: 0.4s;

				&:hover {
					background: #161413;
				}
			}
		}

		.border {
			height: 3px;
			background: #f44d29;
			position: absolute;
			bottom: 0;
			left: 20px;
			transition: 0.4s;
		}

		&__active {
			background: #161413;

			.border {
				width: 30px;
			}
		}
	}
}
</style>