<template>
  <div class="container">
    <h2>{{ item.title }}</h2>
    <div class="jobContainer">
      <div class="job" v-for="(job, i) in item.items" :key="i" :item="job">
        <img :src="job.pic" alt="company" />
        <div class="info">
          <h3>{{ job.company }} | {{ job.locatie }}</h3>
          <h3>{{ job.desc }}</h3>
        </div>
      </div>
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
  border-radius: 0.5em;
  background-color: var(--dark);
  width: 45%;
  color: var(--grey);
  z-index: 2;
  margin: 0 1%;
  height: 100%;

  h2 {
    margin-left: 10%;
  }

  .jobContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .job {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      width: 100%;

      img {
        box-shadow: 8px 0 10px -10px var(--black);
        padding: 1em;
        width: 3vw;
        height: 3vw;
        object-fit: contain;
      }

      .info {
        margin-left: 3%;
        h3 {
          margin: 2px;
        }
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .container {
    width: 100%;
    margin-bottom: 2%;
  }
}
</style>
