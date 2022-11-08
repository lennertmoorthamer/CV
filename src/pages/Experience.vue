<template>
  <div class="xpHolder">
    <xp-item v-for="(xp, i) in xps" :key="i" :item="xp" />
  </div>
</template>

<script>
import sheer from '../assets/sheerenshuis.png';
import niko from '../assets/Niko.png';
import wbt from '../assets/wbt.png';
import volvo from '../assets/volvo.png';
import prana from '../assets/prana.svg';
import studant from '../assets/studant.png';
import alten from '../assets/alten.png';
import talit from '../assets/talit.png';
import vh from '../assets/vh.png';
import xpItem from '../components/xpItem.vue';

export default {
  name: 'Experience',
    props:{
     animation: {
      type: Boolean,
      default: false
    }
  },
  components: { xpItem },
  data() {
     return {
        xps: [
        {"title" : "Studentenwerk", "items":[
          {"company" : "Studant", "locatie" : "2000 Antwerpen", "desc" : "Bijles Informatica aan Hogeschool", "pic" : studant},
          {"company" : "Restaurant S'Heerenshuis", "locatie" : "9120 Melsele", "pic" : sheer},
          {"company" : "Alten BE", "locatie" : "1060 Bruxelles", "pic" : alten},
          {"company" : "Van Hoecke", "locatie" : "9100 Sint-Niklaas", "pic" : vh},
          {"company" : "Prananatha", "locatie" : "9250 Waasmunster", "pic" : prana},
          {"company" : "Niko Group", "locatie" : "9100 Sint-Niklaas", "pic" : niko},
          {"company" : "Wij blijven thuis", "locatie" : "9100 Sint-Niklaas",  "pic" : wbt},
          {"company" : "Volvo Trucks", "locatie" : "9041 Gent", "pic" : volvo},
        ]},
        {"title" : "Beroepsmatig", "items":[
          {"company" : "Talent-IT", "locatie" : "2030 Antwerpen", "desc" : "Functional Analyst - SD Worx", "pic" : talit},
          {"company" : "Talent-IT", "locatie" : "2030 Antwerpen", "desc" : "Business Analyst - TUI", "pic" : talit},
        ]},
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  color: var(--white);
}
.xpHolder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  margin-top: 5vh;
}

@media only screen and (max-width: 650px) {
  .xpHolder {
    width: 90%;
  }
}
</style>
