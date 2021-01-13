<template>
  <nav
    class="navbarHolder"
    role="navigation"
    aria-label="main navigation"
    :style="'border-bottom: 1px solid' + getBorder"
  >
    <a
      @click="changeMode(true)"
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
      @click="changeMode(false)"
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
      @click="changeMode(true)"
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
      @click="changeMode(false)"
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
    changeMode(dark){
      if(dark){
        this.darkMode = true
      }else{
        setTimeout(() => this.darkMode = false, 500);
      }
    }
  },
  computed: {
    getMode(){
      return this.darkMode
    },
    getBorder(){
      console.log(this.darkMode)
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
.navbarHolder {
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
  background-color: transparent;
}

.navbar-item {
  padding: 0 1.2vw 0 1.2vw;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}

.navbarItemColor {
  color: var(--dark);
  &:hover {
    color: var(--primary-dark);
  }
}

.navbarItemColorDark {
  color: var(--white);
  &:hover {
    color: var(--primary);
  }
}
</style>
