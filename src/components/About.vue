<template>
  <div class="aboutHolder">
    <!-- <img :src="bg" alt="background" /> -->
    <div class="contentHolder">
      <div class="dipl" :class="{ animateText: this.animation }">
        <h1>Diploma's</h1>
        <h2>Middelbaar Onderwijs</h2>
        <p>Boekhouden Informatica</p>
        <p>Sint-Maarten Bovenschool - 9120 Beveren</p>
        <h2>Professionele Bachelor</h2>
        <p>Toegepaste Informatica</p>
        <p>Afstudeerrichting Full Stack</p>
        <p>Karel De Grote Hogeschool - 2000 Antwerpen</p>
        <p>Microservices & User Experience</p>
        <h2>Extra</h2>
        <p>Rijbewijs B</p>
        <p>Vaarbewijs - Algemeen stuurbrevet</p>
      </div>
      <div class="pers" :class="{ animateText: animation }">
        <h2>Woonplaats</h2>
        <p>Elsstraat-Zuid, 9140 Temse</p>
        <h2>Nationaliteit</h2>
        <p>Belg</p>
        <h2>Geboortedatum</h2>
        <p>10 Augustus 1999</p>
        <h2>Contact</h2>
        <p>{{ this.tel }}</p>
        <p>{{ this.mail }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props:{
     animation: {
      type: Boolean,
      default: false
    }
  },
  data() {
     return {
       mail: "",
       tel: ""
    };
  },
    created() {
    this.mail = atob("bGVubmVydG1vb3J0aGFtZXIyQGhvdG1haWwuY29t")
    this.tel = atob("MDQ3MTQ5NzM4NA==")
  }
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
      margin-top: 3%;
    }

    .pers {
      text-align: right;
      margin-top: 30%;
    }
  }
}

@media only screen and (max-width: 900px) {
  .contentHolder {
    padding-top: 10%;
  }
}

@media only screen and (max-width: 650px) {
  .aboutHolder {
    width: 50%;
    .contentHolder {
      padding-top: 0;
      flex-direction: column;
      justify-content: center;

      .pers {
        text-align: left;
      }
    }
  }
}
</style>
