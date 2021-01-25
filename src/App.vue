<template>
  <div id="app">
    <index id="page-wrap" />
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
</style>
