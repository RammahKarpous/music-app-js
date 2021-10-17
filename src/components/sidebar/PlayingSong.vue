<template>
	<div class="playing-song">
		<div class="thumbnail">
			<img src="../../assets/images/song-thumbnail.png" alt="Song thumbnail" />
			<div class="thumbnail__song-info">Artist name - Song name</div>
		</div>

		<div class="time">
			<p>
				<span class="time__current">2:32</span>
				<span class="time__divider"></span>
				<span class="time__full">3:42</span>
			</p>
			<span class="time__progress"></span>
		</div>

		<div class="controls">
			<img src="../../assets/icons/prev.svg" class="controls__icon" alt="Play previous song" />
			<img
				src="../../assets/icons/play.svg"
				class="controls__icon controls__icon--large"
				alt="Pause song"
			/>
			<img src="../../assets/icons/next.svg" class="controls__icon" alt="Play next song" />
		</div>
	</div>
</template>

<script>
export default {
	name: "PlayingSong",
};
</script>

<style lang="scss" scoped>
.playing-song {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;

	img {
		width: 100%;
	}

	.thumbnail {
		position: relative;

		&__song-info {
			position: absolute;
			bottom: 0;
			left: 0;
			@include padding(12px, 20px);
			background: transparentize($black-100, 0.1%);
			color: $white;
		}
	}

	.time {
		position: relative;
		padding: 15px 0;

		p {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			gap: 10px;
			color: $white;
			font-size: 1.4rem;
			margin: 0;
		}

		&__current,
		&__full {
			display: inline-block;
		}

		&__divider {
			width: 1px;
			height: 20px;
			background: $accent;
			display: inline-block;
		}

		&__progress {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 4px;
			width: 60%;
			background: $accent;
		}
	}

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 15px 0;
		background: $black-200;

		&__icon {
			width: 40px;
			cursor: pointer;

			&--large {
				width: 50px;
			}
		}
	}
}
</style>