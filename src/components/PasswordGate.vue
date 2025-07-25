<template>
  <div class="password-gate">
    <div v-if="!accessGranted">
      <p>Bitte Passwort eingeben:</p>
      <input type="password" v-model="password" />
      <button @click="checkPassword">Anmelden</button>
      <p v-if="error" style="color: red">{{ error }}</p>
    </div>
    <div v-else>
      <!-- Inhalt nur sichtbar nach Passwort -->
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      accessGranted: false,
      error: ''
    }
  },
  methods: {
    checkPassword() {
      const correctPassword = 'bewerbung'
      if (this.password === correctPassword) {
        this.accessGranted = true
      } else {
        this.error = 'Falsches Passwort.'
      }
    }
  }
}
</script>

<style scoped>
    .password-gate {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3em;
        width: 100%;
    }
</style>