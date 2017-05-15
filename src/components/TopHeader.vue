<template>
	<header class="topheader">
		<div class="container">
			<player v-if="playing" :podcast="playing" :paused="paused"></player>
			<p class="welcome" v-else>Oh, hi. <strong>Choose something to play.</strong></p>
		</div>
	</header>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Player from './player/player'

	export default {
		name: 'top-header',
		components: {
			Player
		},
		computed: {
			...mapGetters({
				playing: 'player/getPlaying',
				paused: 'player/getPaused'
			})
		}
	}
</script>

<style lang="scss">
	@import '~styles/variables';

	.welcome {
		font-size: 1.1em;
		text-align: center;
	}

	.topheader {
		display: flex;
		align-items: center;
		width: 100%;
		height: $header-height;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		padding: 20px;
		z-index: 2;
	}
</style>