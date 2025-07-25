<template>
  <PasswordGate>
    <Contents>
    <StartingBlock 
    headline="Kenntnisse"
    description ="Hier sind verschiedene Kenntnisse dargestellt."/>

    <ListEntry 
    boxText="Java" 
    :imgSrc="require('@/assets/se.png')"
    description="5/5"
    />

  <ListEntry 
  boxText="Python" 
  :imgSrc="require('@/assets/se.png')"
  description="4/5"
  />

  <ListEntry 
  boxText="HTML" 
  :imgSrc="require('@/assets/se.png')"
  description="5/5"
  />

  <ListEntry 
  boxText="JavaScript" 
  :imgSrc="require('@/assets/se.png')"
  description="5/5"
  />

  <ListEntry 
  boxText="CSS" 
  :imgSrc="require('@/assets/se.png')"
  description="5/5"
  />

  <ListEntry 
  boxText="Problemlösung" 
  :imgSrc="require('@/assets/arbeit.png')"
  description="5/5"
  />

  <ListEntry 
  boxText="Lernbereitschaft" 
  :imgSrc="require('@/assets/arbeit.png')"
  description="5/5"
  />

  <ListEntry 
  boxText="Kommunikationsfähigkeit" 
  :imgSrc="require('@/assets/arbeit.png')"
  description="4/5"
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