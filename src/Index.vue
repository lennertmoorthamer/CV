<template>
  <article>
    <navbar />
    <section id="Home">
      <div class="homeHolder">
        <img class="pf" :src="pf" alt="Profile picture" />
        <div>
          <h1>Lennert Moorthamer</h1>
          <h2>Student Toegepaste Informatica - Full stack</h2>
          <h2>Karel De Grote Hogeschool</h2>
          <a target="_blank" href="https://www.facebook.com/lennert.moorthamer"
            ><fa class="icon" :icon="['fab', 'facebook']"
          /></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lennert-moorthamer-143b0b1b5/"
            ><fa class="icon" :icon="['fab', 'linkedin']"
          /></a>
          <a :href="'tel:' + this.tel"
            ><fa class="icon" :icon="['fas', 'phone-square-alt']"
          /></a>
          <a :href="'mailto:' + this.mail"
            ><fa class="icon" :icon="['fas', 'envelope']"
          /></a>
        </div>
      </div>
      <vue-particles class="particles" :particlesNumber="50" color="#F4F5F5" />
    </section>
    <section id="About">
      <div class="aboutHolder">
        <h1>woonplaats, nationaliteit, leeftijd, diplomas</h1>
      </div>
    </section>
    <section id="Experience">
      <div class="xpHolder">
        <h1 class="ml-2">Experience</h1>
        <div class="xpItemHolder">
          <xp-item v-for="(xp, i) in xps" :key="i" :item="xp" />
        </div>
      </div>
    </section>
    <section id="Skills">
      <h1>Skills</h1>
    </section>
  </article>
</template>

<script>
import Navbar from './components/Navbar.vue';
import xpItem from './components/xpItem.vue';
import picture from './assets/pf.jpg';
import sheer from './assets/sheerenshuis.png';
import niko from './assets/Niko.png';
import wbt from './assets/wbt.png';
import volvo from './assets/volvo.png';
import studant from './assets/studant.png';
import alten from './assets/alten.png';

export default {
  name: 'Home',
  components: { Navbar, xpItem },
   data() {
    return {
      pf: picture,
      mail: "",
      tel: "",
      xps: [
        {"company" : "Restaurant S'Heerenshuis", "locatie" : "9120 Melsele", "title" : "Afwasser/Ober", "pic" : sheer},
        {"company" : "Niko Group", "locatie" : "9100 Sint-Niklaas", "title" : "Monteren schakelaars", "pic" : niko},
        {"company" : "Wij blijven thuis", "locatie" : "9100 Sint-Niklaas", "title" : "Logistiek medewerker", "pic" : wbt},
        {"company" : "Volvo Trucks", "locatie" : "9041 Gent", "title" : "Plaatsen benzinetanks/Banden spannen", "pic" : volvo},
        {"company" : "Studant", "locatie" : "2000 Antwerpen", "title" : "Bijles Informatica aan Hogeschool", "pic" : studant},
        {"company" : "Alten BE", "locatie" : "1060 Bruxelles", "title" : "IT Dienst", "pic" : alten},
      ]
    };
  },
  created() {
    this.mail = atob("bGVubmVydG1vb3J0aGFtZXIyQGhvdG1haWwuY29t")
    this.tel = atob("0471497384")
  }
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

.aboutHolder {
  display: flex;
  align-items: center;
  z-index: 2;
}

.ml-2{
  margin-left: 2vw;
}

.xpHolder {
  width: 90%;
  .xpItemHolder {
    display: flex;
    flex-wrap: wrap;
  }
}

section:nth-child(even) {
  background: var(--grey);
  h1,
  h2 {
    color: var(--white);
  }
}

section:nth-child(odd) {
  background: var(--white);
  h1,
  h2 {
    color: var(--dark);
  }
}
</style>
