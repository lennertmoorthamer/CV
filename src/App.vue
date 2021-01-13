<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import Index from './Index'
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style lang="scss">
@import "./sass/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");
#app {
  transition: background 1s, color 1s;
  transition: 1s;
  -webkit-transition: background 1s, color 1s;
}
</style>
