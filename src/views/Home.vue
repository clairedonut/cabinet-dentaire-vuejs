<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <main class="container-fluid">
      <Banner />
      <About />
      <Services />
      <Acces />
    </main>



  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Acces from '@/components/Acces.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    Banner,
    About,
    Services,
    Acces
  }
}
</script>

<style lang="scss">
  main {
    // @include flex-column(center, center);
  }
</style>
