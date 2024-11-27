<template>
  <div class="xpHolder">
    <xp-item v-for="(xp, i) in xps" :key="i" :item="xp" />
  </div>
</template>

<script>
// import talit from '../assets/talit.png';
import talentit from '../assets/talentit.png';
import tui from '../assets/tui.png';
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
        {"title" : "Experience", "items":[
          {"company" : "Talent-IT", "locatie" : "2030 Antwerp", "desc" : "Functional Analyst - SD Worx", "pic" : talentit},
          {"company" : "Talent-IT", "locatie" : "2030 Antwerp", "desc" : "Business Analyst - TUI", "pic" : talentit},
          {"company" : "Talent-IT", "locatie" : "2030 Antwerp", "desc" : "Product Owner - TUI", "pic" : talentit},
          {"company" : "TUI", "locatie" : "8400 Ostend", "desc" : "Product Owner - TUI", "pic" : tui},
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

</style>
