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
  background-color: rgba(255, 255, 255, 0.4);
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2vh;
  box-shadow: 0px 0px 5px var(--dark);
  color: var(--dark);

  img {
    box-shadow: 8px 0 10px -10px var(--white);
    padding: 1em;
    width: 7vw;
    height: 7vw;
    object-fit: contain;
  }

  .info{
    width: 70%;
  }
}
</style>
