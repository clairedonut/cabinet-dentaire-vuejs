<template lang="html">

	<main class="container-fluid">

		<section id="emergency" class="row">

			<!-- <figure class="col-12 col-md-4 col-lg-6">
				<img :src="img_path" class="img-fluid" alt="">
			</figure> -->

			<article class="col-12 col-md-8 col-lg-6">

				<h2> {{ title }} </h2>

				<table>
					<tbody>
						<tr v-for="emergency_number in emergency_numbers">
							<td>
								<h4> {{ emergency_number.name }} : {{ emergency_number.phone }} </h4>
								<p> {{ emergency_number.description }} </p>
							</td>
							<!-- <td> {{ emergency_number.phone }} </td> -->
						</tr>
					</tbody>
				</table>

				<div v-for="item in items">

					<h3> {{ item.title }} </h3>

					<p> {{ item.text }} </p>

				</div>

			</article>

		</section>

	</main>

</template>

<script>
// @ is an alias to /src
// import Banner from '@/components/Banner.vue'


export default {
  data () {
		return {
			title: 'En cas d Urgence!',
			img_path: '../img/emergency.jpg',
			items: [
				{
					title: '',
					text: 'Vous pouvez nous joindre au 03 21 65 00 01, durant nos heures d\'ouvertures. En cas d\'urgence, prenez contact avec le service dentaire de l\'hôpital le plus proche.'
				},
				{
					title: 'Service de garde',
					text: 'Un service de garde est assuré par les chirurgiens dentistes du département les dimanches et jours fériés de 9h à 12h. Joignable au 03 21 71 33 33'
				}
			],
			emergency_numbers: [
				{
					name: 'Service de garde',
					description: 'Dimanche et jours fériés',
					phone: '03 21 71 33 33'
				},
				{
					name: 'Cabinet Dentaire',
					description: 'du Lundi au Vendredi jusque 18h',
					phone: '03 21 65 00 01'
				}
			],
			itemsOLD:[
        'Le Cabinet Dentaire des Docteurs Jean-François SALOME et Aline SUYBENG. Notre cabinet est moderne et est équipé des dernières technologies dentaires.',
        'Tous nos produits et pièces prothétiques sont de marque premium ; les prothèses sont fabriquées en France.',
				'Soyez assuré de la forte implication de l\'ensemble des praticiens et assistantes du cabinet dans la prise en charge de nos patients.',
        'Pour prendre rendez-vous, veuillez nous contacter au 03 8575 6666.'
      ]
		}
	},
	components: {
		// Banner
	}

}
</script>

<style lang="scss">

#emergency {



	@include background('https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', cover, no-repeat, left );

	@media #{$min-break-medium} {
		@include background('https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', cover, no-repeat, left );
	}

	// background: blue;
	@include flex-row(flex-end, flex-start);
	padding: 0;


	article {
		@include flex-column(center, center);
		background-color: rgba(255, 255, 255,0.9);
		padding: 5em 0;

		table {
			margin: 2em 0;

			font-weight: 800;
			color: red;

			td {
				padding: 1em 0;
			}

			h4 {
				text-transform: uppercase;
			}

			p {
				font-style: italic;

			}

			h4, p {
				margin: 0;
				padding: 0;
			}
		}

		h2 {
			font-size: 3em;
		}

		p {
			line-height: 2em;
			font-size: 1em;
			font-weight: 500;

			margin: 2em 0;

			padding: 2em;
			text-align: justify;

			@media #{$min-break-medium} {
				// font-size: 1em;

				padding: 2em 5em;

			}
		}

	}
}

</style>
