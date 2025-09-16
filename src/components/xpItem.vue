<template>
  <div class="container">
    <h2>{{ item.title }}</h2>
    <div class="jobContainer">
      <div class="job" v-for="(job, i) in item.items" :key="i" :item="job">
        <img :src="job.pic" alt="company" />
        <div class="info">
          <h3>{{ job.company }} | {{ job.locatie }}</h3>
          <h3>{{ job.desc }}</h3>
          <h3>{{ job.period }}</h3>
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
  width: 60%;
  color: var(--grey);
  z-index: 2;
  margin: 0 1%;
  height: 100%;

  h2 {
    margin-left: 5%;
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
        margin: 1vw;
        width: 5vw;
        height: 5vw;
        object-fit: contain;
        border-radius: 50%;
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

@media only screen and (max-width: 900px) {
  .container {
    width: 100%;

    .jobContainer {
      margin-bottom: 2%;

      .job {
        height: 7vh;
        margin-top: 2%;

        img {
          width: 7vw;
          height: 7vw;
        }
      }
    }
  }
}
</style>
