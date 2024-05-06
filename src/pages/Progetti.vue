<script>
export default {
  name: "Progetti",
  data() {
    return {
      projectsHtmlCss: [
        {
          name: "Discord",
          src: "discord.mov",
          description: "Simulazione statica della schermata iniziale di Discord utilizzando HTML e CSS.",
          linkGit: "https://github.com/AnaC1997/htmlcss-discord"
        },
        {
          name: "Boolando",
          src: "boolando.mov",
          description: "Simulazione statica della schermata iniziale di Zalando utilizzando HTML e CSS.",
          linkGit: "https://github.com/AnaC1997/html-css-boolando"
        },
        {
          name: "Dropbox",
          src: "dropbox.mov",
          description: "Simulazione statica della schermata iniziale di Dropbox.",
          linkGit: "https://github.com/AnaC1997/htmlcss-dropbox"
        },
        {
          name: "Boolean",
          src: "boolean.mov",
          description: "Creazione di una pagina statica di Boolean responsive.",
          linkGit: "https://github.com/AnaC1997/html-css-resp-wannabe"
        },
        {
          name: "Freelancer",
          src: "freelencer.mov",
          description: "Creazione di una pagina statica responsive utilizzando HTML e la libreria Bootstrap.",
          linkGit: "https://github.com/AnaC1997/html-css-bootstrap-freelancer"
        },
        {
          name: "Spotify",
          src: "spotify.png",
          description: "Creazione statica della schermata iniziale di Spotify responsive, utilizzando HTML e CSS.",
          linkGit: "https://github.com/AnaC1997/html-css-spotifyweb"
        },
        {
          name: "Dashboard",
          src: "dashboard.png",
          description: "Creazione statica di una pagina dashboard utilizzando HTML e la libreria Bootstrap.",
          linkGit: "https://github.com/AnaC1997/html-css-bootstrap-dashboard"
        }
      ],
      projectsJavascript: [
        {
          name: "Biglietto Treno",
          src: "bigliettoTreno.mov",
          description: "Pagina che simula il calcolo del costo del biglietto del treno, considerando la distanza e l'età del passeggero, con sconti correlati all'età.",
          linkGit: "https://github.com/AnaC1997/js-biglietto-treno"
        },
        {
          name: "Campo Minato",
          src: "campominato.png",
          description: "Simulazione del gioco del campo minato con una griglia di 100 celle numerate da 1 a 100. L'obiettivo è scoprire tutte le celle libere evitando quelle con le mine.",
          linkGit: "https://github.com/AnaC1997/js-campominato-dom"
        },
        {
          name: "Social Post",
          src: "social.png",
          description: "Pagina che genera una lista di post e include un pulsante 'Mi Piace'.",
          linkGit: "https://github.com/AnaC1997/js-social-posts"
        },
        {
          name: "Comics",
          src: "comics.png",
          description: "Pagina home dei fumetti generata con Vue.js utilizzando lo strumento Vite.",
          linkGit: "https://github.com/AnaC1997/vite-comics"
        },
        {
          name: "Boolflix",
          src: "boolflix.png",
          description: "Sviluppo di un sito vetrina utilizzando l'API di The Movie Database per gestire informazioni su film e serie TV, includendo una funzione di ricerca per entrambi. Le tecnologie impiegate sono Vite come strumento e Vue.js come framework.",
          linkGit: "https://github.com/AnaC1997/vite-boolflix"
        },
        {
          name: "Boolzapp",
          src: "boolzapp.png",
          description: "Creazione di un mock-up dinamico di WhatsApp utilizzando Vue.js per simulare una chat con risposte preimpostate.",
          linkGit: "https://github.com/AnaC1997/vue-boolzapp"
        }
      ],
      projectsLaravel: [
        {
          name: "Deliveboo",
          src: "deliveboo.mov",
          description: "Lavoro in team per la creazione di una piattaforma online per ordinare cibo a domicilio, consentendo agli utenti di effettuare ricerche e ordini, e ai ristoranti di gestire il proprio menu, gli ordini e le modifiche ai prodotti tramite un'area riservata. Le tecnologie impiegate includono Vue.js per il lato client, Laravel per il lato server, Vite come strumento e MySQL come database.",
          linkGit: {
            backend: "https://github.com/AnaC1997/deliveboo-back-office",
            frontend: "https://github.com/AnaC1997/deliveboo-front-office"
          }
        },
      ]
    }
  }

}
</script>

<template>
  <div class="background">
    <div class="container">
      <div class="col">
        <div class="row justify-content-center">
          <h1 class="text-center fw-bold p-5">I miei progetti</h1><br>
          <p class="pb-3">Nel mio percorso fino ad ora, mi sono imbattuta in un mondo nuovo e pieno di sfide, ma che
            ogni volta ti
            gratifica, perché ogni conoscenza acquisita è come un bastoncino in un gioco Jenga, dove ogni cosa che
            impari
            ti aiuta a costruire il tuo sapere. In questo caso, il gioco non finisce mai, poiché ogni volta dobbiamo
            cercare
            di aggiornare la nostra conoscenza per avere sempre le migliori basi.</p>
          <!--HTML CSS BOOTSTRAP-->
          <p class="pb-3">All'inizio del mio percorso, ho sviluppato i seguenti siti statici utilizzando <strong
              class="colorBlue">HTML</strong>, <strong class="colorBlue">CSS</strong> e <strong
              class="colorBlue">Bootstrap</strong></p>
          <!--INIZIO CARD-->
          <div v-for="projectHtmlCss in projectsHtmlCss" :key="index" class="card m-2" style="width: 40rem;">
            <span v-if="projectHtmlCss.src.endsWith('.mov')" class="ratio" style="--bs-aspect-ratio: 50%;">
              <video controls>
                <source :src="projectHtmlCss.src">
              </video>
            </span>
            <span v-else class="ratio" style="--bs-aspect-ratio: 50%;">
              <img :src="projectHtmlCss.src" alt="Immagine" class="img-fluid">
            </span>

            <div class="card-body ">
              <h5 class="card-title">{{ projectHtmlCss.name }}</h5>
              <p class="card-text">{{ projectHtmlCss.description }}</p>
              <p class="card-text pb-1"><a :href="projectHtmlCss.linkGit"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Link di
                  GitHub</a></p>
            </div>
          </div>

          <!--JAVASCRIP VUE-->
          <p class="pt-5 pb-3">Dopo aver imparato le basi di come gestire il design e la presentazione di una pagina
            web, ho sviluppato i
            seguenti progetti utilizzando anche <strong class="colorBlue">JavaScript</strong> con il suo
            framework <strong class="colorBlue">Vue.js</strong> per dare dinamicità ai siti:
          </p>
          <!--INIZIO CARD-->
          <div v-for="(projectJavascript, index) in projectsJavascript" :key="index" class="card m-2"
            style="width: 40rem;">
            <span v-if="projectJavascript.src.endsWith('.mov')" class="ratio" style="--bs-aspect-ratio: 50%;">
              <video controls >
                <source :src="projectJavascript.src">
              </video>
            </span>
            <span v-else  class="ratio" style="--bs-aspect-ratio: 50%;">
              <img :src="projectJavascript.src" alt="Immagine" class="img-fluid">
            </span>

            <div class="card-body">
              <h5 class="card-title">{{ projectJavascript.name }}</h5>
              <p class="card-text">{{ projectJavascript.description }}</p>
            </div>
            <div class="card-body">
              <p><a :href="projectJavascript.linkGit"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Link di
                  GitHub</a></p>
            </div>
          </div>


          <!--PHP LARAVEL-->
          <p class="pt-5 pb-3">Successivamente abbiamo iniziato a studiare la persistenza dei dati utilizzando <strong
              class="colorBlue">MySQL</strong> e la funzionalità dei siti web utilizzando <strong
              class="colorBlue">PHP</strong>, con <strong class="colorBlue">Laravel</strong> come framework.</p>
          <!--INIZIO CARD-->
          <div v-for="projectLaravel in projectsLaravel" :key="index" class="card m-2" style="width: 40rem;">
            <span v-if="projectLaravel.src.endsWith('.mov')" class="ratio" style="--bs-aspect-ratio: 50%;">
              <video controls>
                <source :src="projectLaravel.src">
              </video>
            </span>
            <span v-else>
              <img :src="projectLaravel.src" alt="Immagine" class="ratio" style="--bs-aspect-ratio: 50%;">
            </span>

            <div class="card-body">
              <h5 class="card-title">{{ projectLaravel.name }}</h5>
              <p class="card-text">{{ projectLaravel.description }}</p>
            </div>
            <div class="card-body">
              <p><a :href="projectLaravel.linkGit"
                  class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Link di
                  GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
h1,
h5,
p,
a {
  color: white;
}

.colorBlue {
  color: #0DC9EF;
}


.background {
  background-color: black;
  cursor: pointer;
}

.card {
  background-color: rgb(51, 49, 49);

}

.card:hover {
  background-color: rgb(105, 102, 102);

}
</style>
