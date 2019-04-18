<template lang="html">

  <section id="acces" class="row">

    <figure class="col-12">
      <img class="img-fluid" :src="img_path" alt="">
    </figure>

    <h2 class="col-12"> {{ title }} </h2>

      <div class="col-12">



        <aside v-for="contact in contacts" class="col-12 col-md-6">


          <div class="title-area">
            <div class="icon">
              <font-awesome-icon :icon="contact.icon" />
              <i :class="contact.icon"></i>
            </div>
            <h3> {{ contact.title }} </h3>
          </div>

          <p> {{ contact.text }} </p>

          <div v-for="description in contact.descriptions">
            <div class="">
              <font-awesome-icon :icon="description.icon" />
              <i :class="description.icon"></i>
            </div>


            <p v-for="address in description.address"> {{ address }} </p>
            <p> {{ description.text }} </p>
          </div>

          <p v-for="info in contact.infos"> {{ info }} </p>


        </aside>


      </div>

      <div class="col-12 map-iframe ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.3735009097504!2d2.564212315136998!3d50.490005979480806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd1828b0d39059%3A0xac8c2365c6154a1b!2sSalome+Suybeng!5e0!3m2!1sen!2sfr!4v1524062289496" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>

      </div>


  </section>

</template>

<script>
export default {
  data () {
    return {

      title: 'Accès',
      img_path: '../img/contact1.jpg',
      contacts: [
        {
          title:'Nous Contacter',
          icon: '',
          descriptions: [
            {
              address: ['137 rue Jean Jaures ','- 62700 Bruay-La-Buissière'],
              icon:'fas fa-map-marker'
            },
            {
              text: '03 4567 4321',
              icon: 'fas fa-phone'
            },
            {
              text: 'cabinetdentaire@email.com',
              icon: 'fas fa-envelope'
            }
          ]
        },
        {
          title: 'Nos Horaires',
          icon: 'clock',
          infos: ['Lundi - Vendredi: 9h30 - 19h', 'Samedi: 10h - 13h']
        },
        {
          title: 'Moyen d\'accès',
          icon: 'bus',
          infos: ['Situé à 2 minutes à pieds de l\'arrêt "Mairie De Labuissière" de la ligne 16.','Situé à 5 minutes à pieds de l\'arrêt "Bruay Poste" de la ligne Bulle 2 et 32.']
        },
        {
          descriptions: [
            {
              icon: 'fab fa-accessible-icon',
              text: 'Accès possible aux personnes à mobilité réduite'
            },
            {
              icon: 'fas fa-location-arrow',
              text: 'calculer son itinéraire en voiture ici'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">

#acces {

  @include flex-row(center, center);
  flex-wrap: wrap;
  font-family: $brand-font;
  line-height: 2em;

  h2 {
    font-weight: 700;
    font-size: 5em;
    margin: 2em auto 1.5em;
  }

  div {
    @include flex-row(center, center);
    flex-wrap: wrap;

    aside {
      @include flex-column(flex-start, center);
      margin: 1.5em auto;
      .title-area {
        margin-bottom: 2em;
      }

      h3 {
        font-weight: 600;
        letter-spacing: -2px;
        margin: 0;
      }
      p {
        margin: 0;
        text-align: left;
      }
    }
  }

  figure {
    padding: 0;
    overflow: hidden;

    @include flex-row(center,center);

    @media #{$min-break-medium} {
      overflow: hidden;
      max-height: 600px;
    }
    img {
      @media #{$min-break-medium} {
        width: 100%;
        height: auto;
      }
    }
  }

  .map-iframe {
    min-height: 100%;
  }

  .icon {
    font-size: 1.2em;
  }
  i {
    margin-right: 1em;

  }
}

</style>
