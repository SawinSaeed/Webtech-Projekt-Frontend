<template>
    <div>
        <h1>Einkaufsliste</h1>
        <div v-for="thing in things" :key="thing.id">
            <p>Name: {{ thing.name }}</p>
            <p>Preis: {{ thing.price }} €</p> <!-- Dollarzeichen hier hinzugefügt -->
            <button @click="startEdit(thing)">Ändern</button>
            <button @click="deleteThing(thing.id)">Löschen</button> <!-- Neuer Löschen-Button -->
        </div>
        <input v-model="newThing.name" placeholder="Neues Item hinzufügen">
        <input v-model="newThing.price" placeholder="Preis hinzufügen">
        <button v-if="editing" @click="updateThing">Update</button>
        <button v-else @click="addThing">Hinzufügen</button>
    </div>
</template>
  
<!-- Ihr vorhandener JavaScript- und CSS-Code -->
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            things: [],
            newThing: {
                name: '',
                price: ''
            },
            editing: false,
            currentThing: null
        }
    },
    async created() {
        const response = await axios.get('http://localhost:8080/things');
        this.things = response.data;
    },
    methods: {
        async addThing() {
            const response = await axios.post('http://localhost:8080/things', this.newThing);
            this.things.push(response.data);
            this.newThing.name = '';
            this.newThing.price = '';
        },
        startEdit(thing) {
            this.newThing = {...thing};
            this.editing = true;
            this.currentThing = thing;
        },
        async updateThing() {
            const response = await axios.put(`http://localhost:8080/things/${this.currentThing.id}`, this.newThing);
            const index = this.things.findIndex(thing => thing.id === this.currentThing.id);
            this.things[index] = response.data;
            this.newThing.name = '';
            this.newThing.price = '';
            this.editing = false;
            this.currentThing = null;
        },
        async deleteThing(id) {
            await axios.delete(`http://localhost:8080/things/${id}`);
            this.things = this.things.filter(thing => thing.id !== id);
        }
    }
}
</script>

<!-- Ihre vorhandenen Styles -->

<style scoped>
h1 {
    color: aliceblue;
    text-align: center;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input {
    margin: 20px 0;
    padding: 10px;
    font-size: 16px;
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
  
  @media (min-width: 768px) {
    button {
      padding: 0.75em 1.5em;
    }
  }
</style>