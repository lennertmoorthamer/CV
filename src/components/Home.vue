<template>
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
</template>

<script>

import picture from '../assets/pf.jpg';

export default {
  name: 'Home',
  components: {  },
  data() {
     return {
        pf: picture,
        mail: "",
        tel: "",
    }
  }
};
</script>

<style lang="scss" scoped>
.homeHolder {
  display: flex;
  align-items: center;
  width: 80%;
  z-index: 2;
  pointer-events: none;

  h1,
  h2 {
    color: var(--white);
  }

  .pf {
    width: 25%;
    height: auto;
    border-radius: 50%;
    margin-right: 5vw;
    box-shadow: 0 10px 10px -7px var(--primary);
  }

  .icon {
    font-size: 2em;
    color: var(--white);
    margin-right: 1vw;
    &:hover {
      color: var(--primary);
    }
    pointer-events: auto;
  }
}

@media only screen and (max-width: 1100px) {
  .homeHolder {
    width: 95%;

    .pf {
      width: 16%;
    }
  }
}
</style>
