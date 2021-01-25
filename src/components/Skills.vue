<template>
  <div class="skillsHolder">
    <div class="prog">
      <vue-ellipse-progress
        class="progItem"
        :progress="90"
        color="#fdec00"
        emptyColor="#b4b4b4"
        :size="80"
        :thickness="8"
        emptyThickness="8"
      >
        <span slot="legend-value">%</span>
        <p slot="legend-caption">Java</p>
      </vue-ellipse-progress>
      <vue-ellipse-progress
        class="progItem"
        :progress="90"
        color="#fdec00"
        emptyColor="#b4b4b4"
        :size="80"
        :thickness="8"
        emptyThickness="8"
      >
        <span slot="legend-value">%</span>
        <p slot="legend-caption">Javascript</p>
      </vue-ellipse-progress>
      <vue-ellipse-progress
        class="progItem"
        :progress="70"
        color="#fdec00"
        emptyColor="#b4b4b4"
        :size="80"
        :thickness="8"
        emptyThickness="8"
      >
        <span slot="legend-value">%</span>
        <p slot="legend-caption">C#</p>
      </vue-ellipse-progress>
      <vue-ellipse-progress
        class="progItem"
        :progress="50"
        color="#fdec00"
        emptyColor="#b4b4b4"
        :size="80"
        :thickness="8"
        emptyThickness="8"
      >
        <span slot="legend-value">%</span>
        <p slot="legend-caption">Python</p>
      </vue-ellipse-progress>
    </div>
    <div class="holder" :class="{ animateText: animation }">
      <div class="taal">
        <h2>Talenkennis</h2>
        <p>Nederlands: Moedertaal</p>
        <p>Engels: goed</p>
        <p>Frans: basiskennis</p>
        <p>Duits: basiskennis</p>
      </div>
      <div class="vaar">
        <h2>Vaardigheden</h2>
        <p>Organisatorisch</p>
        <p>Communicatief</p>
        <p>Handig</p>
        <p>Flexibel</p>
        <p>Vlot in de omgang</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Skills',
   props:{
     animation: {
      type: Boolean,
      default: false
    }
  },
  data() {
     return {
    };
  },
};
</script>

<style lang="scss" scoped>
.skillsHolder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
  width: 50%;
  height: 90%;
  h2,
  h2 {
    color: var(--dark);
  }

  .prog {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    p {
      font-size: 0.7em;
    }

    .progItem {
      margin: 5%;
    }
  }
  .holder {
    margin-top: 20%;
    text-align: right;
    .vaar {
      margin-top: 10vh;
    }
  }
}

@media only screen and (max-width: 650px) {
  .skillsHolder {
    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: flex-start;

    .prog {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      height: 20%;
      .progItem {
        margin: 1%;
      }
    }
    .holder {
      margin-top: 5%;
      text-align: right;
      width: 70%;
      .vaar {
        margin-top: 10vh;
      }
    }
  }
}
</style>
