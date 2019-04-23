<template lang="html">

	<main class="container-fluid">

		<!-- ..................... page title  ..................... -->

		<section id="team-presentation" class="row">

			<div>
				<h2 class=""> {{ title }} </h2>
			</div>

		</section>

		<!-- ..................... team member profiles ..................... -->

		<section id="team-profils" class="row">

			<div v-for="description in descriptions" class="col-12 description">
				<p class="offset-lg-2 col-lg-8"> {{ description.text }} </p>
			</div>

			<!-- ............. team member card ............. -->

			<aside v-for="profil in profils" class="profil col-6 col-md-4">

				<figure>
					<img class="" :src="profil.img_path" alt="">
				</figure>

				<h4> {{ profil.name }} </h4>
				<p class="job"> {{ profil.job }} </p>
				<p class="oncd"> {{ profil.oncd }} </p>
				<p class="description"> {{ profil.description }} </p>

			</aside>

		</section>

	</main>

</template>

<script>

export default {
	data () {
		return {
			title: 'Notre Equipe',
			img_path: 'img/equipe.jpg',
			descriptions: [
				{
					title: 'Bonjour ! Est duis elit culpa laborum adi pisicing conse quat ',
					text: 'L\'équipe du cabinet dentaire est constituée de trois chirurgiens dentistes dipômés d\'état et de trois assitants dentaires qualifiés. Tous les dentistes sont inscrit à l\'Ordre National des Chirurgiens-Centistes (ONCD)'
				}
			],
			profils: [
				{
					name: 'Dr. Eline',
					job: 'Docteur en Chirurgie Dentaire',
					oncd: 'ONCD n°123435445',
					description: 'Diplômée de la Faculté de Chirurgie Dentaire de Lille',
					img_path: 'img/team/profil-3.jpg'
				},
				{
					name: 'Dr. Bassett',
					job: 'Docteur en Chirurgie Dentaire',
					oncd: 'ONCD n°134567756',
					description: 'Diplômé de la Faculté de Chirurgie Dentaire de Lille',
					img_path: 'img/team/profil-7.jpg'
				},
				{
					name: 'Louise',
					job: 'Assistante Dentaire Qualifiée',
					oncd: '',
					description: '',
					img_path: 'img/team/profil-1.jpg'
				},
				{
					name: 'Olivier',
					job: 'Assistant Dentaire Qualifié',
					oncd: '',
					description: '',
					img_path: 'img/team/profil-8.jpg'
				},
				{
					name: 'Dr. Caelan',
					job: 'Docteur en Chirurgie Dentaire',
					oncd: 'ONCD n°10145645999',
					description: 'Diplômé de la Faculté de Médecine Dentaire de l’Université de Paris en 1982',
					img_path: 'img/team/profil-2.jpg'
				},
				{
					name: 'Amélie',
					job: 'Assistante Dentaire Qualifiée',
					oncd: '',
					description: '',
					img_path: 'img/team/profil-4.jpg'
				}
			]
		}
	},
	head: {
		// To use "this" in the component, it is necessary to return the object through a function
		title: function () {
			return {
				inner: 'Notre équipe de Chirurgien-dentistes | Cabinet Dentaire de Lille'
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

/* ------------ Styles : Team page ------------------------------------  */

/* ------------ title area ------------ */

#team-presentation {
	@include flex-column (center, center);
	@include background('https://media.istockphoto.com/photos/dentists-office-in-barcelona-medical-workers-portrait-picture-id687663822?s=2048x2048', cover, repeat, top center);

	padding: 0;

	div {
		width: 100%;
		height: 100%;
		background-color: rgba(45, 110, 255, 0.8);

		h2 {
			margin: 2em 0;
			color: white;
		}
	}
}

/* ------------ team member cards area ------------ */

#team-profils {

	background: #F8F8F8;
	padding: 5em 0;

	@include flex-row(center, center);
	flex-wrap: wrap;
	-ms-flex-wrap: wrap;

	.description {
		p {
			font-size: 1.2em;
			margin-bottom: 3em;

			@media #{$min-break-medium} {
				font-size: 1.8em;
			}
		}
	}

	aside {
		@include flex-column(center, flex-start);
		flex-wrap: wrap;
		-ms-flex-wrap: wrap;

		margin: 1em 0 3em;
		min-height: 430px;

		h4 {
			font-size: 1.2em;
			font-weight: 700;
		}

		p {
			max-width: 250px;
			font-size: 1em;
			margin-bottom: 0;
		}
		.job {
			font-size: 0.9em;
			font-weight: bold;
		}
		.oncd {
			font-size: 0.9em;
			font-weight: italic;
			margin-top: 0.5em;

		}
		.description {
			font-size: 0.8em;
			margin: 0.5em;

		}
	}

	figure {
		max-width: 200px;
		max-height: 200px;

		@media #{$min-break-medium} {
			max-width: 250px;
			max-height: 250px;
		}

		overflow: hidden;

		@include flex-row(center, flex-start);
		img {
			width: 250px;
			height: auto;
		}
	}
}

</style>
