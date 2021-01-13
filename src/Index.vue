<template>
  <article>
    <navbar />
    <section id="Home">
      <div class="homeHolder">
        <img class="pf" :src="pf" alt="Profile picture" />
        <div>
          <h1>Lennert Moorthamer</h1>
          <h1>Student Toegepaste Informatica - Full stack</h1>
          <h1>Karel De Grote Hogeschool</h1>
          <a target="_blank" href="https://www.facebook.com/lennert.moorthamer"
            ><fa class="icon" :icon="['fab', 'facebook']"
          /></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lennert-moorthamer-143b0b1b5/"
            ><fa class="icon" :icon="['fab', 'linkedin']"
          /></a>
          <a href="tel:0471497384"
            ><fa class="icon" :icon="['fas', 'phone-square-alt']"
          /></a>
        </div>
      </div>
      <vue-particles class="particles" :particlesNumber="50" color="#F4F5F5" />
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
import picture from './assets/pf.jpg';

export default {
  name: 'Home',
  components: { Navbar },
   data() {
    return {
      pf: picture,
    };
  },
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

.homeHolder {
  display: flex;
  align-items: center;
  width: 80%;
  z-index: 2;

  .pf {
    width: 20vw;
    height: auto;
    border-radius: 50%;
    margin-right: 5vw;
  }

  .icon {
    font-size: 2em;
    color: var(--white);
    margin-right: 1vw;
  }
}

section:nth-child(even) {
  background: var(--grey);
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
