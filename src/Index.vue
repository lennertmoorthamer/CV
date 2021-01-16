<template>
  <article>
    <navbar />
    <section id="Home">
      <home-page />
      <div class="homeLine"></div>
    </section>
    <section id="About">
      <about />
      <div class="aboutLine"></div>
      <div class="aboutLineDown"></div>
    </section>
    <section id="Experience">
      <experience />
      <div class="experienceLine"></div>
      <div class="experienceLineDown"></div>
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

.homeLine {
  position: absolute;
  left: 20%;
  bottom: 0;
  width: 1px;
  background-color: var(--primary-dark);
  box-shadow: 0px 0px 3px 1px var(--primary);
  height: 50%;
}

.aboutLine {
  position: absolute;
  left: 20%;
  top: 0;
  width: 1px;
  background-color: var(--primary);
  box-shadow: 0px 0px 3px 1px var(--primary);
  height: 60%;
}

.aboutLineDown {
  position: absolute;
  right: 20%;
  bottom: 0;
  width: 1px;
  background-color: var(--primary);
  box-shadow: 0px 0px 3px 1px var(--primary);
  height: 60%;
}

.experienceLine {
  position: absolute;
  right: 20%;
  top: 0;
  width: 1px;
  background-color: var(--primary-dark);
  box-shadow: 0px 0px 3px 1px var(--primary);
  height: 70%;
}

.experienceLineDown {
  position: absolute;
  left: 15%;
  bottom: 0;
  width: 1px;
  background-color: var(--primary-dark);
  box-shadow: 0px 0px 3px 1px var(--primary);
  height: 60%;
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
