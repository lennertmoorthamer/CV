<template>
  <article>
    <navbar />
    <section id="Home">
      <home-page />
      <div class="line homeLine"></div>
    </section>
    <section id="About">
      <about />
      <div class="line aboutLine"></div>
      <div class="line aboutLineDown"></div>
    </section>
    <section id="Experience">
      <experience />
      <div class="line experienceLine"></div>
      <div class="line experienceLineDown"></div>
    </section>
    <section id="Skills">
      <skills-page />
    </section>
    <vue-particles class="particles" :particlesNumber="50" color="#F4F5F5" />
  </article>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Experience from './components/Experience.vue';
import HomePage from './components/Home.vue';
import About from './components/About.vue';
import SkillsPage from './components/Skills.vue';

export default {
  name: 'Index',
  components: { Navbar, Experience, About, HomePage, SkillsPage },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section:nth-child(even) {
  background: var(--black);
}

section:nth-child(odd) {
  background: var(--white);
}

.line {
  position: absolute;
  box-shadow: 0px 0px 3px 1px var(--primary);
  width: 1px;
}

.homeLine {
  left: 20%;
  bottom: 0;
  background-color: var(--primary-dark);
  height: 50%;
}

.aboutLine {
  left: 20%;
  top: 0;
  background-color: var(--primary);
  height: 60%;
}

.aboutLineDown {
  right: 20%;
  bottom: 0;
  background-color: var(--primary);
  height: 60%;
}

.experienceLine {
  right: 20%;
  top: 0;
  background-color: var(--primary-dark);
  height: 85%;
}

.experienceLineDown {
  left: 15%;
  bottom: 0;
  background-color: var(--primary-dark);
  height: 85%;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}
</style>
