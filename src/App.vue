<template>
  <div id="app">
    <nav-list :eventBus="eventBus"/>
  </div>
</template>

<script>
import NavList from "./components/NavList";

export default {
  name: 'App',
  props: ["eventBus"],
  components: {
    NavList
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
