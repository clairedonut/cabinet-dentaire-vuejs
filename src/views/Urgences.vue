<template lang="html">

	<main class="container-fluid">

		<section id="emergency" class="row">

			<article class="col-12 col-md-8 col-lg-6">

				<h2> {{ title }} </h2>

				<!-- ..................... table emergency contact info ..................... -->

				<table>
					<tbody>
						<tr v-for="emergency_number in emergency_numbers">
							<td>
								<h4> {{ emergency_number.name }} : {{ emergency_number.phone }} </h4>
								<p> {{ emergency_number.description }} </p>
							</td>
						</tr>
					</tbody>
				</table>

				<!-- ..................... texts ..................... -->

				<div v-for="item in items">
					<h3> {{ item.title }} </h3>
					<p> {{ item.text }} </p>
				</div>

			</article>

		</section>

	</main>

</template>

<script>

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
			]
		}
	},
	head: {
		// To use "this" in the component, it is necessary to return the object through a function
		title: function () {
			return {
				inner: 'Contacter notre Cabinet Dentaire d\'urgence'
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

#emergency {

	@include flex-row(flex-end, flex-start);
	padding: 0;

	@include background('https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', cover, no-repeat, left );

	@media #{$min-break-medium} {
		@include background('https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', cover, no-repeat, left );
	}



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
				padding: 2em 5em;
			}
		}

	}
}

</style>
