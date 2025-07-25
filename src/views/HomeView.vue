<template>

  <Contents>
    <StartingBlock 
    headline="Willkommen auf meiner ersten Vue-Website"
    description ="Ich habe begonnen, diese Vue-Seite zu entwerfen, um meine Fähigkeiten im Umgang mit Vue zu verbessern. Vue.js ist ein modernes, fortschrittliches JavaScript-Framework zur Erstellung interaktiver Benutzeroberflächen. Es ist besonders beliebt, weil es einfach zu erlernen ist und gleichzeitig leistungsstarke Funktionen für komplexe Anwendungen bietet. Ein zentrales Konzept von Vue ist die Komponentenbasierte Architektur: Anstatt eine ganze Seite als eine Einheit zu entwickeln, zerlegt man sie in wiederverwendbare Komponenten – z. B. eine Navigationsleiste, ein Suchfeld oder einen Inhaltsteil. Diese Komponenten sind jeweils kleine, unabhängige Bausteine mit eigenem HTML, CSS und JavaScript. Vue verwendet ein reaktives Datenmodell, das bedeutet: Wenn sich Daten im Hintergrund ändern, wird die Benutzeroberfläche automatisch aktualisiert."
    />

    <ListEntry 
      boxText="Diese Website" 
      :imgSrc="require('@/assets/web.png')"
      description="Auf dieser Website werden meine Ausbildung, Berufserfahrung und Kenntnisse dargestellt."
      dest="/"
      />
  

  <ListEntry 
  boxText="Ausbildung" 
  :imgSrc="require('@/assets/hut.png')"
  description="Meine Ausbildung."
  dest="/ausbildung"
  />

  <ListEntry 
  boxText="Berufserfahrung" 
  :imgSrc="require('@/assets/arbeit.png')"
  description="Meine Berufserfahrung."
  dest="/berfahrung"
  />

  <ListEntry 
  boxText="Kenntnisse" 
  :imgSrc="require('@/assets/stern.png')"
  description="Meine Kenntnisse."
  dest="/kenntnisse"
  />

  </Contents>
  
</template>

<script>
import Contents from '@/components/Contents.vue';
import ListEntry from '@/components/ListEntry.vue';
import StartingBlock from '@/components/StartingBlock.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Contents,
    ListEntry,
    StartingBlock
  }
}
</script>


<style>
</style>