<template>
  <div class="skillsHolder">
    <div class="prog">
      <div class="progress-circle-container">
        <div class="progress-circle progress-100">
          <span>
            <p>Nederlands</p>
          </span>
        </div>
      </div>
      <div class="progress-circle-container">
        <div class="progress-circle progress-80">
          <span>
            <p>Engels</p>
          </span>
        </div>
      </div>
      <div class="progress-circle-container">
        <div class="progress-circle progress-30">
          <span>
            <p>Frans</p>
          </span>
        </div>
      </div>
    </div>
    <div class="holder" :class="{ animateText: animation }">
      <div class="taal">
        <h2>Technische skills</h2>
        <p>Java, Javascript, HTML, SCSS</p>
        <p>Spring, Vue, React</p>
        <p>UML, BPMN, SQL</p>
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
  width: 60%;
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

    .progress-circle {
      position: relative;
      width: 12vh;
      height: 12vh;
      margin-top: 1vh;
      margin-left: 3vw;
      border-radius: 50%;

      span {
        font-size: 1em;
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        width: 10vh;
        height: 10vh;
        line-height: 4vh;
        margin-left: -5vh;
        margin-top: -5vh;
        text-align: center;
        border-radius: 50%;
        background: var(--white);
        z-index: 1;

        p {
          margin-top: 3vh;
        }
      }
    }

    .progress-circle:after {
      content: "";
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .progress-circle.progress-100:after {
      background-color: var(--primary);
    }

    .progress-circle.progress-80:after {
      background-image: linear-gradient(
          35deg,
          var(--primary) 50%,
          transparent 50%,
          transparent
        ),
        linear-gradient(
          270deg,
          var(--primary) 50%,
          var(--grey) 50%,
          var(--grey)
        );
    }

    .progress-circle.progress-30:after {
      background-image: linear-gradient(
          -90deg,
          var(--primary) 50%,
          transparent 50%,
          transparent
        ),
        linear-gradient(
          270deg,
          var(--primary) 50%,
          var(--grey) 50%,
          var(--grey)
        );
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
      .progress-circle {
        width: 10vh;
        height: 10vh;

        span {
          width: 8vh;
          height: 8vh;
          margin-left: -4vh;
          margin-top: -4vh;

          p {
            margin-top: 2vh;
          }
        }
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

@media only screen and (max-width: 450px) {
  .skillsHolder .prog {
    .progress-circle {
      width: 15vw;
      height: 15vw;

      span {
        font-size: 0.8em;
        width: 12vw;
        height: 12vw;
        margin-left: -6vw;
        margin-top: -6vw;

        p {
          margin-top: 1vh;
        }
      }
    }
  }
}
</style>
