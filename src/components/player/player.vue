<template>
	<div class="player">
		<div class="player__header">
			<span>Now Playing</span> : {{ podcast.title }}
		</div>
		<audio controls autoplay ref="player" class="player__audio">
			<source type="audio/mp3" v-if="podcast.files.mp3" :src="podcast.files.mp3"></source>
			Your browser doesn't support audio player.
		</audio>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	export default {
		name: 'player',
		props: [
			'podcast', 'paused'
		],
		computed: {
			...mapGetters({
				getPaused: 'player/getPaused'
			}),
		},
		watch: {
			podcast () {
				setTimeout(() => {
					this.$refs.player.load()
				}, 100)
			},

			paused () {
				if (this.paused) {
					this.$refs.player.pause()
				}
			}
		},
		methods: {
			...mapActions({
				setPlaying: 'player/setPlaying'
			})
		},
		mounted () {
			this.$refs.player.addEventListener('ended', () => {
				this.setPlaying(null)
			}),

			console.log(this.getPaused)
		}
	}
</script>

<style lang="scss">
	.player {
		width: 100%;

		&__audio {
			width: 100%;
		}

		&__header {
			font-weight: 500px;
			margin-bottom: 20px;

			span {
				font-weight: 800;
			}
		}
	}
</style>