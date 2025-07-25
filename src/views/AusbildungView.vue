<template>
  <PasswordGate>
    <Contents>
    <StartingBlock 
    headline="Ausbildung"
    description ="Hier sind die verschiedenen Stationen meiner Ausbildung dargestellt."/>

    <ListEntry 
      boxText="Universität" 
      :imgSrc="require('@/assets/uni.png')"
      description="Studium"
      />
  

  <ListEntry 
  boxText="Gymnasium" 
  :imgSrc="require('@/assets/schule.png')"
  description="Abitur"
  />

  <ListEntry 
  boxText="Grundschule" 
  :imgSrc="require('@/assets/schule.png')"
  description="Erste Station"
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