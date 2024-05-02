<script>
import AppHeader from "./components/AppHeader.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,

	},
	data() {
		return {
			store
		}
	},
	mounted() {
		// Aggiungi event listener a tutti i video
		this.addVolumeChangeListeners();
	},
	methods: {
		addVolumeChangeListeners() {
			// Seleziona tutti i video
			var videos = document.querySelectorAll("video");
			// Itera su ciascun video e aggiungi l'event listener
			videos.forEach(video => {
				video.addEventListener("volumechange", () => {
					if (video.volume !== 0) {
						video.volume = 0;
					}
				});
			});
		}
	}
}
</script>

<template>
	<main>
		<AppHeader />
		

            <!--Vue router-->
        <router-view></router-view>
	</main>
</template>


<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>
