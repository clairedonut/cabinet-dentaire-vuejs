<template lang="html">

	<main class="container-fluid">

		<section id="team-presentation" class="row">

			<div class="">
				<h2 class=""> {{ title }} </h2>
			</div>




			<!-- <figure class="col-12 col-md-8 col-lg-8">
				<img class="img-fluid" :src="img_path" alt="">
			</figure>

			<div v-for="description in descriptions" class="col-12 col-md-10">
				<h3> {{ description.title }} </h3>
				<p> {{ description.text }} </p>
			</div> -->

		</section>




		<section id="team-profils" class="row">

			<div v-for="description in descriptions" class="col-12 description">
				<p class="offset-lg-2 col-lg-8"> {{ description.text }} </p>
			</div>

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

		<!-- <section id="team" class="row">

			<h2 class=""> {{ title }} </h2>

			<article class="team-presentation">

				<figure class="col-12 col-md-6">
					<img class="img-fluid" :src="img_path" alt="">
				</figure>

				<div v-for="description in descriptions" class="col-12 col-md-6">
					<h3> {{ description.title }} </h3>
					<p> {{ description.text }} </p>
				</div>

			</article>


			<article class="team-profils">

				<aside v-for="profil in profils" class="profil col-12 col-md-6 col-lg-4">
					<figure>
						<img class="" :src="profil.img_path" alt="">
					</figure>

					<h4> {{ profil.name }} </h4>
					<p> {{ profil.job }} </p>
					<p> {{ profil.oncd }} </p>
					<p> {{ profil.description }} </p>

				</aside>

			</article>


		</section> -->

	</main>

</template>

<script>

// import Aboutee from '@/components/Aboutee.vue'


export default {
	data () {
		return {
			title: 'Notre Equipe',
			img_path: '../img/equipe.jpg',
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
					oncd: 'ONCD n°10100123456',
					description: 'Diplômée de la Faculté de Chirurgie Dentaire de Lille',
					img_path: '../img/team/profil-3.jpg'
				},
				{
					name: 'Dr. Bassett',
					job: 'Docteur en Chirurgie Dentaire',
					oncd: 'ONCD n°10100123456',
					description: 'Diplômé de la Faculté de Chirurgie Dentaire de Lille',
					img_path: '../img/team/profil-7.jpg'
				},
				{
					name: 'Louise',
					job: 'Assistante Dentaire Qualifiée',
					oncd: '',
					description: '',
					img_path: '../img/team/profil-1.jpg'
				},
				{
					name: 'Olivier',
					job: 'Assistant Dentaire Qualifié',
					oncd: '',
					description: '',
					img_path: '../img/team/profil-8.jpg'
				},
				{
					name: 'Dr. Caelan',
					job: 'Docteur en Chirurgie Dentaire',
					oncd: 'ONCD n°10100123456',
					description: 'Diplômé de la Faculté de Médecine Dentaire de l’Université de Paris en 1982',
					img_path: '../img/team/profil-2.jpg'
				},
				{
					name: 'Amélie',
					job: 'Assistante Dentaire Qualifiée',
					oncd: '',
					description: '',
					img_path: '../img/team/profil-4.jpg'
				}
			]
		}
	},
	components: {
		// Aboutee
	}
}
</script>

<style lang="scss">

#team-profils {


background: #F8F8F8;
padding: 5em 0;

	@include flex-row(center, center);
	flex-wrap: wrap;

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


	// div {
	// 	margin: 5em 0 0;
	// 	text-align: left;
	//
	// 	p, h3 {
	// 	}
	// 	h3 {
	// 		font-weight: 600;
	// 		font-size: 1.7em;
	// 		margin: 0 auto 2em;
	//
	// 		@media #{$min-break-medium} {
	// 			font-size: 2.2em;
	// 		}
	// 		@media #{$min-break-large} {
	// 			font-size: 3.2em;
	//
	// 		}
	// 	}
	// 	p {
	// 		font-size: 1.4em;
	//
	// 		@media #{$min-break-medium} {
	// 			font-size: 1.8em;
	// 		}
	//
	// 	}
	// }
}








#team {
	margin: 0;

	@include flex-column(center, center);

	.team-presentation {
		flex-wrap: nowrap;

		margin-bottom: 10em;

		p {
			max-width: 400px;
			margin: 2em auto;
		}

	}

	.team-profils {
		@include flex-row(center, center);
		flex-wrap: wrap;
	}

	.profil {
		@include flex-column(center, center);

		figure {
			max-width: 350px;
			overflow: hidden;
			@include flex-row(center, center);
			img {
				width: 500px;
				height: auto;
			}
		}
	}




}

// h2 {
//   font-family: $brand-font;
//
//   margin: 2em auto 1em;
//   font-size: 5em;
//   font-weight: 700;
//
//   @media #{$min-break-medium} {
//     font-size: 5em;
//     // margin: 1em auto 0.5em;
//   }
// }

</style>
