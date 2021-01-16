<template>
  <div class="xpHolder">
    <h1 class="ml">Experience</h1>
    <div class="xpItemHolder">
      <xp-item v-for="(xp, i) in xps" :key="i" :item="xp" />
    </div>
  </div>
</template>

<script>
import sheer from '../assets/sheerenshuis.png';
import niko from '../assets/Niko.png';
import wbt from '../assets/wbt.png';
import volvo from '../assets/volvo.png';
import studant from '../assets/studant.png';
import alten from '../assets/alten.png';
import xpItem from './xpItem.vue';

export default {
  
  name: 'Experience',
  components: { xpItem },
  data() {
     return {
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
    this.tel = atob("MDQ3MTQ5NzM4NA==")
  }
};
</script>

<style lang="scss" scoped>
.xpHolder {
  width: 90%;
  h1,
  h2 {
    color: var(--white);
  }
  .xpItemHolder {
    display: flex;
    flex-wrap: wrap;
  }

  .ml {
    margin-left: 2vh;
  }
}
</style>
