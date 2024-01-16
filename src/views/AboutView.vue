<template>
  <div class="about-container">
    <div class="about">
      <h1>Einkaufliste Aboutpage</h1>
      <p>Unsere Einkaufsliste ist ein einfaches, aber leistungsstarkes Tool, das Ihnen hilft, Ihre Einkäufe zu organisieren. Sie können Artikel hinzufügen, entfernen und den Preis jedes Artikels anzeigen. Probieren Sie es aus und erleichtern Sie Ihre Einkäufe!</p>
    </div>
  </div>
</template>

<style>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
}

.about h1, .about p {
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>