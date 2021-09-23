<template>
  <div class="xpHolder">
    <div class="xpItemHolder">
      <xp-item v-for="(xp, i) in xps" :key="i" :item="xp" />
    </div>
  </div>
</template>

<script>
import sheer from '../assets/sheerenshuis.png';
// import niko from '../assets/Niko.png';
// import wbt from '../assets/wbt.png';
import volvo from '../assets/volvo.png';
import prana from '../assets/prana.svg';
import studant from '../assets/studant.png';
import alten from '../assets/alten.png';
import talit from '../assets/talit.png';
import xpItem from './xpItem.vue';

export default {
  
  name: 'Experience',
  components: { xpItem },
  data() {
     return {
        xps: [
        {"company" : "Restaurant S'Heerenshuis", "locatie" : "9120 Melsele", "title" : "Afwasser/Ober", "pic" : sheer},
        // {"company" : "Niko Group", "locatie" : "9100 Sint-Niklaas", "title" : "Monteren schakelaars", "pic" : niko},
        {"company" : "Prananatha", "locatie" : "9250 Waasmunster", "title" : "Magazijnier", "pic" : prana},
        // {"company" : "Wij blijven thuis", "locatie" : "9100 Sint-Niklaas", "title" : "Logistiek medewerker", "pic" : wbt},
        {"company" : "Volvo Trucks", "locatie" : "9041 Gent", "title" : "Plaatsen benzinetanks/Banden spannen", "pic" : volvo},
        {"company" : "Studant", "locatie" : "2000 Antwerpen", "title" : "Bijles Informatica aan Hogeschool", "pic" : studant},
        {"company" : "Alten BE", "locatie" : "1060 Bruxelles", "title" : "IT Dienst", "pic" : alten},
        // {"company" : "Purna Pharmaceuticals", "locatie" : "2870 Puurs", "title" : "Verpakking", "pic" : purna},
        {"company" : "Talent-IT", "locatie" : "2870 Puurs", "title" : "Verpakking", "pic" : talit},
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.xpHolder {
  display: flex;
  align-items: center;
  width: 90%;

  h1,
  h2 {
    color: var(--white);
  }
  .xpItemHolder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media only screen and (max-width: 650px) {
  .xpHolder {
    width: 100%;
  }
}
</style>
