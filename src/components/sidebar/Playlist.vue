<template>
	<div class="playlist-wrapper">
		<Button />
		<ul class="playlist">
			<li class="playlist__name playlist__active">
				<a href="#">Lorem ipsum</a>
			</li>
			<li class="playlist__name">
				<a href="#">dolor sit</a>
			</li>
			<li class="playlist__name">
				<a href="#">amet consectetur</a>
			</li>
			<li class="playlist__name">
				<a href="#">Last one</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Button from "../shared/Button.vue";

export default {
	name: "Playlist",
	components: {
		Button
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
		height: 81.5%;
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