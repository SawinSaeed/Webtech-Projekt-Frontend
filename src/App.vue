<template>
  <div id="app">
    <Navbar />
    <router-view />
    <button @click="changeBackground">Hintergrund ändern</button>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      bgIndex: 0, // Index des aktuellen Hintergrundbildes
      bgImages: [ // Liste der Hintergrundbilder
        'url(/picpic.jpg)',
        'url(/coldaf.jpg)',
        'url(/coldaf2.jpg)',
        'url(/coldaf3.jpg)',
      ]
    }
  },
  methods: {
    changeBackground() {
      this.bgIndex = (this.bgIndex + 1) % this.bgImages.length; // Erhöht den Index und wickelt ihn um, wenn er das Ende der Liste erreicht
      document.body.style.backgroundImage = this.bgImages[this.bgIndex]; // Ändert das Hintergrundbild
    }
  }
}
</script>

<!-- Ihre vorhandenen Styles -->

<!-- Ihre vorhandenen Styles -->

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  z-index: 1000;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

button {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    color: aliceblue;
    background-color: #007BFF;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:active {
    background-color: #003d80;
    transform: translateY(2px);
  }
</style>