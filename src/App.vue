<template>
  <div id="app">
    <div id="nav">


      <div id="nav-large">
        <router-link to="/">Cabinet Dentaire</router-link>
        <router-link to="/equipe">Equipe</router-link>
        <router-link to="/prestations">Prestations</router-link>
        <router-link to="/contact">Contact</router-link>
        <div class="sos">
          <router-link to="/urgences">Urgences</router-link>
        </div>
      </div>


      <div id="nav-mobile">

        <!-- nav-mobile exit menu button -->
        <button class="hamburger hamburger--squeeze isActive" v-if="show" key="on" @click="show = false">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <!-- nav-mobile hamburger open menu  button -->
        <button class="hamburger hamburger--squeeze " v-else key="off" @click="show = true">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <!-- nav-mobile menu -->
        <div class="nav-menu" v-bind:class="{ active: show }" v-if="show">
            <router-link class="router-link" to="/">Cabinet Dentaire</router-link>
            <router-link class="router-link"  to="/equipe">Equipe</router-link>
            <router-link class="router-link"  to="/prestations">Prestations</router-link>
            <router-link class="router-link"  to="/contact">Contact</router-link>

            <div class="sos">
              <router-link class="router-link"  to="/urgences">Urgences</router-link>
            </div>

        </div>









        <!-- <button class="hamburger hamburger--squeeze isActive" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button> -->
      </div>

    </div>



    <router-view/>

    <Footer/>

  </div>
</template>

<script type="text/javascript">
import Footer from '@/components/Footer.vue'



export default {

  data() {
    return {
      show: false
    }
  },
  components: {
    Footer
  }
}


</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  width: 100%;
  padding: 30px;
  background: rgba(255,255,255,0);
  position: fixed;

  z-index: 100;

  @include flex-row(flex-end, center);
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;


    padding: 0 1em;
    &:hover {
      text-decoration: none;
      color: #42b983;

    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.isActive-Bck {
  background: #2c3e50;
  width: 100%;
}

#nav-large {

  display: none;

  .sos {
    a {
      @include hyperlink(red, #42b983);
    }
  }

  @media #{$min-break-medium} {
    @include flex-row(flex-end, flex-start);
  }

}

#nav-mobile {

  // button {
  //   z-index: 500 !important;
  // }

  .hamburger-inner{
    z-index: 500;
  }


  .sos {
    a {
      @include hyperlink(red, #42b983);
    }
  }




  @media #{$min-break-medium} {
    display: none;
  }

  .nav-menu {
    width: 100%;

    padding: 5em;

    @include flex-column(center, center);
    background: white;

    z-index: -3;

    position: absolute;
    top: 0;
    left: 0;

    .router-link {
      margin: 0.5em auto;
    }
  }
}
</style>
