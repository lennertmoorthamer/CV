<template>
  <article>
    <navbar />
    <section id="Home">
      <h1>Home</h1>
      <vue-particles class="particles" :particlesNumber="50" color="F4F5F5" />
    </section>
    <section id="About">
      <h1>About</h1>
    </section>
    <section id="Experience">
      <h1>Experience</h1>
    </section>
    <section id="Skills">
      <h1>Skills</h1>
    </section>
  </article>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'Home',
  components: { Navbar }
};
</script>

<style lang="scss" scoped>


.particles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section:nth-child(even) {
  background: var(--dark);
  h1 {
    color: var(--white);
  }
}

section:nth-child(odd) {
  background: var(--white);
  h1 {
    color: var(--dark);
  }
}
</style>
