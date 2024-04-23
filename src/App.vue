<script>
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"


import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppContent
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
		<AppContent />

		<div>
			<H1>HTML CSS</H1>
			<!-- Discord -->
			<video id="discordVideo" muted width="320" height="240" controls disabled>
				<source src="discord.mov">
			</video>
			<!-- Boolando -->
			<video id="boolandoVideo" muted width="320" height="240" controls disabled>
				<source src="boolando.mov">
			</video>
			<!-- Dropbox -->
			<video id="dropboxVideo" muted width="320" height="240" controls>
				<source src="dropbox.mov">
			</video>
			<!-- Dropbox -->
			<video id="freelencerVideo" muted width="320" height="240" controls>
				<source src="freelencer.mov">
			</video>
			<!-- Boolean -->
			<img src="shopify.png" alt="schermataShopify">

			<!-- Dashboard-->
			<img src="dashboard.png" alt="schermataDashboard">

		</div>
		<div>
			qui javascrip vue
			<!-- Biglietto Treno-->
			<video id="freelencerVideo" muted width="320" height="240" controls>
				<source src="bigliettoTreno.mov">
			</video>

			<!--Campominato-->
			<img src="campominato.png" alt="#">

			<!--Social Post-->
			<img src="social.png" alt="#">

			<!--Boolzapp-->
			<img src="boolzapp.png" alt="#">


		</div>
		<div>
			qui proggetti laravel
		</div>
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
