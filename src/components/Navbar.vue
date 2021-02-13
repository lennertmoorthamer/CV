<template>
  <div>
    <Slide
      id="hamburgerMenu"
      :closeOnNavigation="true"
      @openMenu="this.handleOpenMenu"
      @closeMenu="this.handleCloseMenu"
    >
      <a href="#Home">
        <span>Home</span>
      </a>
      <a href="#About">
        <span>About</span>
      </a>
      <a href="#Experience">
        <span>Experience</span>
      </a>
      <a href="#Skills">
        <span>Skills</span>
      </a>
    </Slide>
    <nav class="navHolder" role="navigation">
      <div
        id="defaultNavbar"
        aria-label="main navigation"
        :style="'border-bottom: 1px solid' + getBorder"
      >
        <a
          @click="emitAnimation('home')"
          :class="{
            navbarItemColor: !getMode,
            navbarItemColorDark: getMode,
          }"
          class="navbar-item"
          href="#Home"
        >
          Home
        </a>
        <a
          @click="emitAnimation('about')"
          class="navbar-item"
          :class="{
            navbarItemColor: !getMode,
            navbarItemColorDark: getMode,
          }"
          href="#About"
        >
          About
        </a>
        <a
          @click="emitAnimation('experience')"
          class="navbar-item"
          :class="{
            navbarItemColor: !getMode,
            navbarItemColorDark: getMode,
          }"
          href="#Experience"
        >
          Experience
        </a>
        <a
          @click="emitAnimation('skill')"
          class="navbar-item"
          :class="{
            navbarItemColor: !getMode,
            navbarItemColorDark: getMode,
          }"
          href="#Skills"
        >
          Skills
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
  import { Slide } from 'vue-burger-menu';
export default {
  name: 'Navbar',
  components: {
      Slide
  },
  data() {
     return {
      darkMode: true,
      hideBurger: false
    };
  },
  methods:{
     handleScroll(){
      switch(Math.floor(Math.floor(document.getElementById('indexHolder').scrollTop +2 + document.getElementById('indexHolder').offsetHeight) / window.innerHeight)){
        case(1): this.darkMode = true; break;
        case(2): this.darkMode = false; break;
        case(3): this.darkMode = true; break;
        case(4): this.darkMode = false; break;
      }
    },
    emitAnimation(page){
       this.$emit(page,true);
    },
    handleOpenMenu(){
      var x = document.getElementsByClassName("bm-burger-button")[0];
      x.style.display = "none";
      x.style.cursor = "default";
      x.style.pointerEvents = "none";
    },
    handleCloseMenu(){
      var x = document.getElementsByClassName("bm-burger-button")[0];
      x.style.display = "block";
      x.style.cursor = "pointer";
      x.style.pointerEvents = "auto";
    } 
  },
  created () {
    window.addEventListener("load", () =>
      document.getElementById('indexHolder').addEventListener('scroll', () => this.handleScroll())
    );
  },
  destroyed () {
    document.getElementById('indexHolder').removeEventListener('scroll', () => this.handleScroll());
  },
  computed: {
    getMode(){
      return this.darkMode
    },
    getBorder(){
      if(this.darkMode){
        return "#F4F5F5"
      }else{
        return "#403F45"
      }
    }
  }
};
</script>

<style lang="scss">
#hamburgerMenu {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  height: 5vh;
  width: 5vh;
  padding-top: 3vh;
  padding-right: 3vw;

  .bm-burger-button {
    left: 0;
  }
  .bm-burger-bars {
    background-color: var(--primary);
  }
  .bm-cross {
    background: var(--white);
  }
  .bm-menu {
    background-color: rgba(56, 56, 58, 0.9);
  }
  .bm-item-list {
    color: #f4f5f5;
    font-size: 1.2em;
  }
}

#defaultNavbar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  width: 30%;
  height: 5vh;
  min-height: 5vh;
  padding-top: 3vh;
  margin-right: 5%;
  font-size: 1.1em;
}

.navbar-item {
  padding: 0 1.2vw 0 1.2vw;
}

.navbarItemColor {
  color: var(--dark);
  &:hover {
    color: var(--primary);
  }
}

.navbarItemColorDark {
  color: var(--white);
  &:hover {
    color: var(--primary);
  }
}

@media only screen and (max-width: 1200px) {
  #defaultNavbar {
    width: 40%;
  }
}

@media only screen and (max-width: 900px) {
  #defaultNavbar {
    display: none;
  }

  #hamburgerMenu {
    display: inline;
  }
}
</style>
