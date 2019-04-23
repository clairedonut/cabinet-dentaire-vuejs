<template>

    <div class="home">

        <!-- ..................... Main content ..................... -->

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
        Banner,
        About,
        Services,
        Acces
    },
    head: {
        // To use "this" in the component, it is necessary to return the object through a function
        title: function () {
            return {
                inner: 'Chirurgien-dentistes à Lille | Traitements dentaires, implants, orthodontie'
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
</style>
