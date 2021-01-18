<template>
  <div class="aboutHolder">
    <!-- <img :src="bg" alt="background" /> -->
    <div class="contentHolder">
      <div  class="dipl">
        <h1>Diploma's</h1>
        <h2>Middelbaar Onderwijs</h2>
        <p>Boekhouden Informatica</p>
        <p>Sint-Maarten Bovenschool - 9120 Beveren</p>
        <h2>Professionele Bachelor</h2>
        <p>Toegepaste Informatica</p>
        <p>Afstudeerrichting Full Stack</p>
        <p>Karel De Grote Hogeschool - 2000 Antwerpen</p>
        <p>Microservices & User Experience</p>
      </div>
      <div class="pers">
        <h2>Woonplaats</h2>
        <p>Elsstraat-Zuid, 9140 Temse</p>
        <h2>Nationaliteit</h2>
        <p>Belg</p>
        <h2>Geboortedatum</h2>
        <p>10 Augustus 1999</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
     return {
    };
  },
};
</script>

<style lang="scss" scoped>
.aboutHolder {
  width: 80%;
  height: 100%;
  h2,
  h2 {
    color: var(--dark);
  }

  .contentHolder {
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .dipl {
      margin-top: 5%;
    }

    .pers {
      text-align: right;
      margin-top: 30%;
    }
  }
}
</style>
