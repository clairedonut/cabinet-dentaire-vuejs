<template lang="html">


		<section id="about" class="row">

			<div class="col-12">

				<h2> {{ title }} </h2>

				<p v-for="item in items"> {{ item }} </p>
			</div>

		</section>


</template>

<script>
// @ is an alias to /src
// import Banner from '@/components/Banner.vue'


export default {
  data () {
		return {
			title: 'Bienvenu',
			img_path: 'https://images.unsplash.com/photo-1473232117216-c950d4ef2e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1313&q=80',
			items:[
        'Le Cabinet Dentaire vous souhaite la bienvenue! Notre cabinet est moderne et est équipé des dernières technologies dentaires',
				'Soyez assuré de la forte implication de l\'ensemble des praticiens et assistants du cabinet dans la prise en charge de nos patients.',
        'Pour prendre rendez-vous, veuillez nous envoyer un message ou nous appeler directement au 03 85 75 66 66.'
      ]
		}
	},
	components: {
		// Banner
	}

}
</script>

<style lang="scss">

	#about {

    @include flex-column(center, center);
		@include background('https://images.unsplash.com/photo-1473232117216-c950d4ef2e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1313&q=80' ,cover, no-repeat, center);

    color: white;
    text-align: center;

		padding-bottom: 0;

    div {
    	padding: 5em 0;

			height: 100%;
			width:100%;

			background: rgba(#10A5FF, 0.7);

    }

		h2 {
			font-family: $brand-font;

      margin: 2em auto 1em;
			font-size: 3em;
      font-weight: 700;

      @media #{$min-break-medium} {
      	font-size: 5em;
        margin: 1em auto 0.5em;
      }
		}

    p {
    	line-height: 1.5em;
			font-size: 1.2em;
      font-weight: 500;
			padding: 1.2em 2em;
			text-align: justify;

			@media #{$min-break-medium} {
				font-size: 1.5em;

				margin: 2em;
			}

			@media #{$min-break-large} {
				font-size: 1.7em;
				width: 60%;
				margin: 1em auto;
			}
    }

	}



</style>
