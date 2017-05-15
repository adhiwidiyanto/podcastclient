export const setPlaying = ({ commit }, podcast) => {
	commit('setPlaying', podcast)
}

export const setPaused = ({ commit }, value) => {
	commit('setPaused', value)
}