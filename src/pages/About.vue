<template>
  <div class="aboutHolder">
    <div class="contentHolder">
      <div class="dipl" :class="{ animateText: animation }">
        <h1>Diplomas</h1>
        <h2>Secondary Education</h2>
        <p>Accounting and Computer Science</p>
        <p>Sint-Maarten Bovenschool - 9120 Beveren</p>
        <h2>Professional Bachelor's Degree</h2>
        <p>Applied Computer Science - Full Stack</p>
        <p>Specialization in Microservices & User Experience</p>
        <p>Karel De Grote University College - 2000 Antwerp</p>
        <h2>Additional</h2>
        <p>Driver's License B</p>
        <p>Boating License - General Steering Certificate</p>
      </div>
      <div class="pers" :class="{ animateText: animation }">
        <h2>Residence</h2>
        <p>Prosper Van Raemdonckstraat, 9120 Beveren</p>
        <h2>Nationality</h2>
        <p>Belgian</p>
        <h2>Date of Birth</h2>
        <p>August 10, 1999</p>
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
    this.tel = atob("MDQ3MSA0OSA3MyA4NA==")
  }
}
  
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

@media only screen and (max-width: 700px) {
  .aboutHolder {
    width: 50%;
    .contentHolder {
      padding-top: 0;
      flex-direction: column;
      justify-content: center;

      .pers {
        text-align: left;
        margin-top: 10%;
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .aboutHolder {
    width: 50%;
    .contentHolder {
      padding-top: 0;
      flex-direction: column;
      justify-content: center;

      .pers {
        text-align: left;
        margin-top: 10%;
      }
    }
  }
}
</style>
