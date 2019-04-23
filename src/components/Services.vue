<template lang="html">

  <!-- ..................... component Home.vue ..................... -->

  <section id="services" class="row">

    <h2> {{ title }} </h2>

    <div class="col-12">

      <!-- ........... list services ........... -->

      <aside v-for="service in services" class="col-12 col-md-4">
        <img :src="service.icon" alt="">
        <h4> {{ service.name }} </h4>
        <p> {{ service.description }} </p>
      </aside>

    </div>

</section>


</template>

<script>
export default {
  data() {
    return {
      title: 'Nos Services',
      services: [
        {
          icon: 'img/icons/service-1.svg',
          name: 'Soins',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: 'img/icons/service-2.svg',
          name: 'Une équipe à votre écoute',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: 'img/icons/service-3.svg',
          name: 'Consultation',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: 'img/icons/service-4.svg',
          name: 'Implants & Couronnes',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: 'img/icons/service-5.svg',
          name: 'Orthodontie',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: 'img/icons/service-6.svg',
          name: 'Soins Dentaires',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

#services {
  background-color: #0072BB;
  color: #fff;
  font-family: $brand-font;

  @include flex-column(center, center);

  div {

    @include flex-row(center,center);
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    aside {
      text-align: center;
      padding: 2em 0;
      @include flex-column(center,center);
      h4 {
        margin: 1em 0;
        font-weight: 200;
      }
      p {
        text-align: center;
        width: 250px;
        font-weight: 300;
      }
    }
  }

  h2 {
    margin: 2em 0;
    text-align: center;
    color: #fff;
    font-size: 4.5em;
    font-weight: 800;
  }
}

</style>
