<template>
  <PasswordGate>
        <Contents>
    <StartingBlock 
    headline="Berufserfahrung"
    description ="Hier sind die verschiedenen Stationen meiner Berufserfahrung dargestellt."/>

    <ListEntry 
      boxText="Praktikum Softwareentwicklung" 
      :imgSrc="require('@/assets/se.png')"
      description="Entwicklung Webanwendung"
      />
  

  <ListEntry 
  boxText="Ferienarbeit Logistik" 
  :imgSrc="require('@/assets/arbeit.png')"
  description="Qualitätssicherung"
  />

  <ListEntry 
  boxText="Praktikum Montage" 
  :imgSrc="require('@/assets/arbeit.png')"
  description="Praktikum in der Montage"
  />
  </Contents>
  </PasswordGate>
</template>

<script>
import Contents from '@/components/Contents.vue';
import ListEntry from '@/components/ListEntry.vue';
import PasswordGate from '@/components/PasswordGate.vue'
import StartingBlock from '@/components/StartingBlock.vue';

export default {
  components: {
    PasswordGate,
    Contents,
    ListEntry,
    StartingBlock
  }
}
</script>