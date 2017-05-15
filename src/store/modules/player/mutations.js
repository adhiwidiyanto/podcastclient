export const setPlaying = (state, podcast) => {
	state.playing = podcast
}

export const setPaused = (state, value) => {
	return state.paused = value
}
