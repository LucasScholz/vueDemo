<template>

    <div class="container-fluid">
<Contents>
    <StartingBlock 
    headline="Bootstrap"
    description ="Bootstrap ist ein weit verbreitetes, kostenloses Frontend-Framework zur schnellen und einfachen Gestaltung von responsiven Websites und Webanwendungen. Es basiert auf HTML, CSS und JavaScript und bietet vorgefertigte Komponenten wie Buttons, Formulare und Navigationselemente. Durch das Grid-System von Bootstrap lassen sich Layouts flexibel an verschiedene Bildschirmgrößen anpassen."
    />

    

    <div class="container">

<div class="container-l mt-3 mb-4">

<h3>Bisher eingesetzte Sprachen und Frameworks:</h3>

<div id="carouselExampleCaptions" class="carousel slide carousel-fade bg-dark text-white w-75 mx-auto mt-4 mb-4">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/javaCode.png" class="d-block w-100 carousel-image" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Java</h5>
        <p>Java ist eine plattformunabhängige, objektorientierte Programmiersprache.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/pythonCode.png" class="d-block w-100 carousel-image" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Python</h5>
        <p>Python ist eine vielseitige Programmiersprache, die in vielen Bereichen eingesetzt wird.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/springboot.png" class="d-block w-100 carousel-image" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Spring Boot</h5>
        <p>Spring Boot ist ein Framework zur Entwicklung von Java-basierten Webanwendungen.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/htmlCode.png" class="d-block w-100 carousel-image" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>HTML</h5>
        <p>HTML strukturiert den Inhalt einer Webseite.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/javaScriptCode.png" class="d-block w-100 carousel-image" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>JavaScript</h5>
        <p>JavaScript macht Webseiten interaktiv und dynamisch.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/cssCode.png" class="d-block w-100 carousel-image" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>CSS</h5>
        <p>CSS sorgt für das Aussehen und Layout.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Vorheriges</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Nächstes</span>
  </button>
</div>



</div>

<h3>Für diese Website wurde verwendet:</h3>


        <div class="container-xl mt-4">

            <div class="accordion">
  <div class="accordion-item bg-dark text-white">
    <h2 class="accordion-header">
      <button class="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Vue.js
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Mit <strong>Vue.js</strong> lassen sich Komponenten modular entwickeln und der Datenfluss übersichtlich steuern. Dabei kommen hauptsächlich JavaScript, HTML und CSS zum Einsatz.
      </div>
    </div>
  </div>
  <div class="accordion-item bg-dark text-white">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Bootstrap
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Bootstrap</strong> ist ein beliebtes CSS-Framework, das die Entwicklung responsiver und mobiler Webanwendungen erleichtert. Es bietet eine Vielzahl von vorgefertigten Komponenten und Styles, die das Design und Layout schnell und konsistent gestalten.
      </div>
    </div>
  </div>
  <div class="accordion-item bg-dark text-white">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        GitHub Pages
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>GitHub Pages</strong> ist ein kostenloser Hosting-Dienst, der es ermöglicht, statische Websites direkt aus GitHub-Repositories zu veröffentlichen. Diese Website wird über GitHub Pages gehostet und ist unter folgendem Link erreichbar: <a href="https://lucasscholz.github.io/vueDemo/#/">https://lucasscholz.github.io/vueDemo/#/</a>.
      </div>
    </div>
  </div>
</div>
        </div>
    </div>

  </Contents>
  </div>
  
</template>

<script>
import Contents from '@/components/Contents.vue';
import ListEntry from '@/components/ListEntry.vue';
import StartingBlock from '@/components/StartingBlock.vue';

// @ is an alias to /src

export default {
  name: 'BootstrapView',
  components: {
    Contents,
    ListEntry,
    StartingBlock
  }
}
</script>


<style>

.carousel-image {
    height: 400px;
    object-fit: cover;
    object-position: left top;
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    padding: 1rem;
  }

</style>