<template lang="html">

  <main class="container">

    <section id="prestations" class="row">

      <div class="col-12 col-md-10 col-lg-8">
        <h2> {{ title }} </h2>
        <p> {{ description }} </p>

        <!-- ..................... download PDF price rates ..................... -->

        <p>
          Téléchargez la liste de nos prestations <a :href="link" download>ici</a>
        </p>
      </div>

      <!-- ..................... table : display service and price rates ..................... -->

      <div class="col-12 overflow">
        <table class="table">
          <thead  class="thead-light">
            <tr>
              <th v-for="categories in categories"> {{ categories }} </th>
            </tr>
          </thead>
          <tbody v-for="soin in soins">
            <td class="titre" colspan="4"> {{ soin.name }} </td>
            <tr v-for="care in soin.care" class="po" >
              <td class="soin">{{care.name}}</td>
              <td>{{care.rate}} €</td>
              <td>{{care.secu_rate}} €</td>
              <td>{{care.mutuelle_rate}} €</td>
            </tr>
            <td class="padding-b" colspan="4"></td>
          </tbody>
        </table>
      </div>

    </section>

  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Soins et prothèses dentaires',
      description: 'Veuillez trouver ici tous nos service proposés. Pour plus de renseignements, n\'hésitez pas à nous joindre directement',
      link: '/images/myw3schoolsimage.jpg',
      items: [
        {
          name: 'Prophylaxie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Endodontie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Parodontologie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Prothèses dentaires',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Implants',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Prophylaxie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Parodontologie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        }
      ],
      categories: [
        'Soins dentaires',
        'Tarifs des honoraires pratiqués',
        'Base de remboursement Assurance maladie',
        'Remboursement Assurance maladie (70%)'
      ],
      soins: [
        {
          name: 'Examens radiographiques dentaires',
          care: [
            {
              name: 'Radiographie Panoramique',
              rate: 20,
              secu_rate: 20,
              mutuelle_rate: 14,
            },
            {
              name: 'Scanner implantaire',
              rate: 90,
              secu_rate: 72,
              mutuelle_rate: 0,
            }
          ]
        },
        {
          name: 'Prestation de soins conservateurs, chirurgicaux et de prévention les plus pratiqués',
          care: [
            {
              name: 'Consultation',
              rate: 23,
              secu_rate: 23,
              mutuelle_rate: 16,
            },
            {
              name: 'Détartrage',
              rate: 28,
              secu_rate: 28,
              mutuelle_rate: 20,
            },
            {
              name: 'Restauration d’une dent sur 1 à 3 faces (carie)',
              rate: 'De 19,28 € à 43',
              secu_rate: 'De 19,28 € à 43',
              mutuelle_rate: 'De 13,50 € à 30,10',
            },
            {
              name: 'Extraction d’une dent',
              rate: 33.44,
              secu_rate: 33.44,
              mutuelle_rate: 25,
            }
          ]
        },
        {
          name: 'Prothèses dentaires fixes et amovibles',
          care: [
            {
              name: 'Couronne dentaire',
              rate: 'De 300 € à 650' ,
              secu_rate: 107.50,
              mutuelle_rate: 75.65,
            },
            {
              name: 'Bridge métallique (3 dents)',
              rate: 'De 900 € à 1710',
              secu_rate: 	279.50,
              mutuelle_rate: 	195.65,
            },
            {
              name: 'Prothèse amovible ',
              rate: 'De 935 € à 1439' ,
              secu_rate: '193,50 € à 311,75 ',
              mutuelle_rate: 'De 135,45 € à 218,23 ',
            },
            {
              name: 'Bridge métallique (3 dents)',
              rate: 'De 900 € à 1710',
              secu_rate: 	279.50,
              mutuelle_rate: 	195.65,
            }
          ]
        },
        {
          name: 'Traitements orthodontiques pour adultes et enfants',
          care: [
            {
              name: 'Diagnostic',
              rate: 127 ,
              secu_rate: 43,
              mutuelle_rate: 30,
            },
            {
              name: 'Semestre',
              rate: 'De 700 € à 1110',
              secu_rate: 	193.50,
              mutuelle_rate: 	195.65,
            },
            {
              name: 'Traitement Invisalign',
              rate: 'De 3000 € à 4500 ' ,
              secu_rate: 0,
              mutuelle_rate: 0,
            },
            {
              name: 'Contention',
              rate: '450',
              secu_rate: 	161,
              mutuelle_rate: 	161,
            }
          ]
        }
      ]
    }
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: 'Les prestations du Cabinet Dentaire'
      }
    },
    meta: [
      { name: 'description', content: 'Cabinet Dentaire à Lille (59000) avec les chirurgiens-dentistes Drs Eline, Bassett et Caelan. Traitements esthétiques, implants', id: 'desc' },
      { name: 'image', content: 'https://media.istockphoto.com/photos/woman-at-dentist-picture-id664274496?k=6&m=664274496&s=612x612&w=0&h=Gri8H1qqTguq7nkWamrlwNz2AxvqDHpIQgQy7h-jg74=' },

      // Google+ / Schema.org
      { itemprop: 'name', content: 'Chirurgien-dentistes à Lille' },
      { itemprop: 'description', content: 'Cabinet Dentaire à Lille (59000) avec les chirurgiens-dentistes Drs Eline, Bassett et Caelan. Traitements esthétiques, implants' },
      { itemprop: 'image', content: 'https://media.istockphoto.com/photos/woman-at-dentist-picture-id664274496?k=6&m=664274496&s=612x612&w=0&h=Gri8H1qqTguq7nkWamrlwNz2AxvqDHpIQgQy7h-jg74=' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Chirurgien-dentistes à Lille depuis 2012' },
      { name: 'twitter:card', content: 'Cabinet Dentaire à Lille (59000) avec les chirurgiens-dentistes Drs Eline, Bassett et Caelan. Traitements dentaires, implants, orthodontie' },

      // Open Graph general (Facebook, Pinterest & Google+)
      { name: 'og:title', content: 'Chirurgien-dentistes à Lille depuis 2012' },
      { name: 'og:description', content: 'Cabinet Dentaire à Lille (59000) avec les chirurgiens-dentistes Drs Eline, Bassett et Caelan. Traitements dentaires, implants, orthodontie' },
      { name: 'og:image', content: 'https://media.istockphoto.com/photos/woman-at-dentist-picture-id664274496?k=6&m=664274496&s=612x612&w=0&h=Gri8H1qqTguq7nkWamrlwNz2AxvqDHpIQgQy7h-jg74=' },
      { name: 'og:url', content: 'http://cookiesandwifi.ovh/dentist-vuejs' },
      { name: 'og:site_name', content: 'Cabinet Dentaire' },
      { name: 'og:locale', content: 'fr_FR' },
      { name: 'og:type', content: 'website' }
    ]
  }
}
</script>

<style lang="scss">

#prestations {
  @include flex-column(center, center);

  h2 {
    font-size: 2.5em;
    font-weight: 500;

    @media #{$min-break-medium} {
      font-size: 3em;
      letter-spacing: -2px;
      // margin: 1em auto 0.5em;
    }
  }

  p {
    font-size: 1.2em;
    color: #5a5a5a;
  }

  .overflow {
    overflow: scroll;

  }

  table {
    margin: 3em 0;

    th {
      padding-bottom: 2.5em;
    }

    tr {
      td {
        padding: 1em 0;
      }
    }

    .padding-b {
      padding-bottom: 1em;
    }

    .titre {
      text-align: left;
      border-top: 1px solid lightgrey;
      border-bottom: 1px solid lightgrey;
      padding: 1em 0;
      margin: 2em 0;
    }
    .soin {
      text-align: left;
      font-weight: 600;
    }
  }
}

</style>
