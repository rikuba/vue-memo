<template>
  <div id="app">
    <h1><router-link to="/">VueMemo</router-link></h1>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: #f1f2f3;
}
</style>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  max-width: 60em;
  height: 100%;
  margin: auto;
}

h1 {
  margin: 20px;
  font-size: 150%;
}

h1 a {
  color: inherit;
  text-decoration: none;
}

.container {
  flex: 1;
  max-height: 60em;
  overflow: hidden;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);
}
</style>
