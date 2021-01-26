<template>
  <div class="container">
    <img :src="item.pic" alt="company" />
    <div class="info">
      <h3>{{ item.company }} | {{ item.locatie }}</h3>
      <h3>{{ item.title }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'XpItem',
  props:{
     item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
     return {
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 12vh;
  border-radius: 0.5em;
  background-color: var(--dark);
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2vh;
  color: var(--grey);
  z-index: 2;

  img {
    box-shadow: 8px 0 10px -10px var(--black);
    padding: 1em;
    width: 5vw;
    height: 5vw;
    object-fit: contain;
  }

  .info {
    width: 70%;
  }
}

@media only screen and (max-width: 800px) {
  h3 {
    font-size: 0.6em;
  }

  .container {
    height: 9vh;
    width: 60%;
    margin: 1vh;
    color: var(--grey);
    z-index: 2;

    img {
      box-shadow: 8px 0 10px -10px var(--black);
      width: 7vw;
      height: 9vw;
      object-fit: contain;
      padding: 0;
      padding-left: 1vw;
      padding-right: 1vw;
    }

    .info {
      width: 80%;
    }
  }
}
</style>
