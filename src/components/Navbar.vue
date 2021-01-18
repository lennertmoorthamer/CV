<template>
  <nav
    id="navbarHolder"
    role="navigation"
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
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
     return {
      darkMode: true,
    };
  },
  methods:{
    handleScroll(){
      switch(Math.floor((window.pageYOffset + document.getElementById('navbarHolder').offsetHeight) / window.innerHeight)){
        case(0): this.darkMode = true; break;
        case(1): this.darkMode = false; break;
        case(2): this.darkMode = true; break;
        case(3): this.darkMode = false; break;
      }
    },
    emitAnimation(page){
       this.$emit(page,true);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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

<style lang="scss" scoped>
#navbarHolder {
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
</style>
