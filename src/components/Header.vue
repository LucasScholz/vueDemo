<template>
    <header>
        <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/">Startseite</router-link></li>
        <li class="nav-item"><router-link to="/ausbildung">Ausbildung</router-link></li>
        <li class="nav-item"><router-link to="/berfahrung">Berufserfahrung</router-link></li>
        <li class="nav-item"><router-link to="/kenntnisse">Kenntnisse</router-link></li>
        <li class="nav-item"><router-link to="/bootstrap">Bootstrap</router-link></li>
      </ul>
    </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>

  header {
  font-family: "Roboto", sans-serif;
  color: white;
}

.navbar {
  display: flex;
  justify-content: center;
  background-color: #2a2252;
  padding: 0.75em 0;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 2em;
  margin: 0;
  padding: 0;
}

.nav-item a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.25em 0.5em;
  transition: background-color 0.3s ease;
  border-radius: 4px;
}

.nav-item a:hover {
  background-color: #666;
}

.subtitle {
  text-align: center;
  padding: 0.75em 0;
  font-size: 1.5em;
  font-weight: 500;
  color: #ddd;
}

</style>