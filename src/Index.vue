<template>
  <div>
    <navbar
      id="menu"
      v-on:home="handleHomeAnimation()"
      v-on:about="handleAboutAnimation($event)"
      v-on:experience="handleExperienceAnimation()"
      v-on:skill="handleSkillAnimation($event)"
    />
    <div id="indexHolder">
      <section id="Home">
        <home-page />
        <vue-particles
          class="particles"
          :particlesNumber="90"
          clickMode="repulse"
          color="#F4F5F5"
        />
        <div class="line homeLine"></div>
      </section>
      <section id="About">
        <about :animation="this.aboutAnimations" />
        <div class="line aboutLine"></div>
        <div class="circle aboutCircle"></div>
        <div class="line aboutLineDown"></div>
        <div class="circle aboutCircleDown"></div>
      </section>
      <section id="Experience">
        <experience />
        <div class="line experienceLine"></div>
        <div class="circle experienceCircle"></div>
        <div class="line experienceLineDown"></div>
        <div class="circle experienceCircleDown"></div>
      </section>
      <section id="Skills">
        <skills-page :animation="this.skillsAnimations" />
        <div class="line skillsLine"></div>
        <div class="circle skillsCircle"></div>
        <div class="wave">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style="height: 100%; width: 100%"
          >
            <path
              d="M-0.97,99.12 C189.21,-132.74 265.95,300.41 500.72,27.09 L500.00,149.98 L0.01,149.98 Z"
              style="stroke: none; fill: #fdec00"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  </div>
</template>

<script>


import Navbar from './components/Navbar.vue';
import Experience from './components/Experience.vue';
import HomePage from './components/Home.vue';
import About from './components/About.vue';
import SkillsPage from './components/Skills.vue';

export default {
  name: 'Index',
  components: { Navbar, Experience, About, HomePage, SkillsPage },
  data(){
    return{
      aboutAnimations: false,
      skillsAnimations: false,
    }
  },
  methods:{
    handleHomeAnimation(){
      this.aboutAnimations = false
      this.skillsAnimations = false
    },
    handleAboutAnimation(event){
      this.aboutAnimations = event
      this.skillsAnimations = false
    },
    handleExperienceAnimation(){
      this.aboutAnimations = false
      this.skillsAnimations = false
    },
    handleSkillAnimation(event){
      this.aboutAnimations = false
      this.skillsAnimations = event
    }
  }
};
</script>

<style lang="scss" scoped>
#indexHolder::-webkit-scrollbar {
  width: 0.5vw;
}
#indexHolder::-webkit-scrollbar-track {
  background-color: var(--white);
}
#indexHolder::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background-color: var(--primary);
}

#indexHolder {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }

  section {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;

    &:nth-of-type(even) {
      background-color: var(--white);
    }

    &:nth-of-type(odd) {
      background-color: var(--black);
    }
  }

  .line {
    position: absolute;
    box-shadow: 0px 0px 3px 1px var(--primary);
    width: 1px;
    z-index: 1;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    height: 3vh;
    width: 3vh;
    box-shadow: 0px 0px 2px 1px var(--primary);
    z-index: 1;
  }

  .homeLine {
    left: 20%;
    bottom: 0;
    background-color: var(--primary-dark);
    height: 50%;
  }

  .aboutLine {
    left: 20%;
    top: 0;
    background-color: var(--primary);
    height: 60%;
  }

  .aboutCircle {
    left: calc(20% - 1.5vh - 3px);
    top: 60%;
    border: 3px solid var(--primary);
  }

  .aboutLineDown {
    right: 20%;
    bottom: 0;
    background-color: var(--primary);
    height: 60%;
  }

  .aboutCircleDown {
    right: calc(20% - 1.5vh - 3px);
    bottom: 60%;
    border: 3px solid var(--primary);
  }

  .experienceLine {
    right: 20%;
    top: 0;
    background-color: var(--primary-dark);
    height: 85%;
  }

  .experienceCircle {
    right: calc(20% - 1.5vh - 3px);
    top: 85%;
    border: 3px solid var(--primary-dark);
  }

  .experienceLineDown {
    left: 20%;
    bottom: 0;
    background-color: var(--primary-dark);
    height: 85%;
  }

  .experienceCircleDown {
    left: calc(20% - 1.5vh - 3px);
    bottom: 85%;
    border: 3px solid var(--primary-dark);
  }

  .skillsLine {
    left: 20%;
    top: 0;
    background-color: var(--primary);
    height: 60%;
  }

  .skillsCircle {
    left: calc(20% - 1.5vh - 3px);
    top: 60%;
    border: 3px solid var(--primary);
  }

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25%;
  }

  @media only screen and (max-width: 1400px) {
    .homeLine {
      left: 10%;
    }

    .aboutLine {
      left: 10%;
    }

    .aboutCircle {
      left: calc(10% - 1.5vh - 3px);
    }

    .aboutLineDown {
      right: 10%;
    }

    .aboutCircleDown {
      right: calc(10% - 1.5vh - 3px);
    }

    .experienceLine {
      right: 10%;
    }

    .experienceCircle {
      right: calc(10% - 1.5vh - 3px);
      top: 85%;
      border: 3px solid var(--primary-dark);
    }

    .experienceLineDown {
      left: 10%;
    }

    .experienceCircleDown {
      left: calc(10% - 1.5vh - 3px);
    }

    .skillsLine {
      left: 10%;
    }

    .skillsCircle {
      left: calc(10% - 1.5vh - 3px);
    }
  }
}
</style>
