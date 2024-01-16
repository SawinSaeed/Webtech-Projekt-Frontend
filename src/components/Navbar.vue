<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/apptodo">App Todo</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #f8f9fa;
    padding: 10px 20px;
  }
  
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
  }
  </style>