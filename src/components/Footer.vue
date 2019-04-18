<template lang="html">

	<footer class="container-fluid">

		<section class="row footer-top">

			<div class="col-12 col-md-6 col-lg-6 footer-brand">
				<h2> {{ brand }} </h2>
				<p> {{ text }} </p>
			</div>

			<div id="footer-menu" class="col-12 col-md-6  col-lg-6">
				<div class="">
					<a v-for="nav_link in nav_links" :href="nav_link.link"> {{ nav_link.name }} </a>
				</div>

				<div class="footer-subcat">
					<a v-for="subcategories_link in subcategories_links" :href="subcategories_link.link"> {{ subcategories_link.name }} </a>
				</div>
			</div>

			<!-- <a href="/">Cabinet Dentaire</a>
			<a href="/">Notre Équipe</a>
			<a href="/">Nos Services</a>
			<a href="/">Contactez nous</a> -->

		</section>

		<section class="row footer-bottom">
			<aside v-for="socialmedia in socialmedia" class="">
				<i :class="socialmedia.icon"></i>
				<p> {{ socialmedia.name }} </p>
			</aside>

		</section>
	</footer>

</template>

<script>

// var $phone = "03 32 23 45 54";

import Variables from '@/Variables.js'

export default {
	data () {
		return {
			brand: 'Cabinet Dentaire',
			text: 'Ouvert du Lundi au Vendredi de 9h à 12h30 et de 14h30 à 18h',
			nav_links: [
				{
					name: 'Notre équipe',
					link: 'equipe.html'
				},
				{
					name: 'Nos Services',
					link: 'index.html/#services'
				},
				{
					name: 'Plan d\'accès',
					link: 'index.html/#acces'
				},
				{
					name: 'Nous contacter',
					link: 'contact.html'
				}
			],
			subcategories_links: [
				{
					name: 'En cas d\'Urgence',
					link: 'index.html'
				},
				{
					name: 'Orthodontie',
					link: 'index.html#services'
				},
				{
					name: 'Prothèses dentaires',
					link: 'prestations.html'
				},
				{
					name: 'Honoraires',
					link: 'prestations.html'
				}
			],
			socialmedia: [
				{
					name: 'hello@dentist.com',
					icon: 'fas fa-envelope'
				},
				{
					name: '$phone',
					icon: 'fas fa-phone'
				},
				{
					name: '3, rue de la rue 59000 Lille',
					icon: 'fas fa-map-marker',
					link: 'hello@dentist.com'
				}
			]
		}
	}
}
</script>

<style lang="scss">

footer {
	background: #1E242F;
	color: white;
	padding: 2em auto;

	a, p {
		@include hyperlink(white, #59BA84);
		font-weight: 500;
		font-size: 0.9em;
	}

	.footer-top {
		@include flex-row(center,center);
		flex-wrap: wrap;
		padding: 5em 0;


		.footer-brand {

			@media #{$min-break-large} {
				text-align: left;
				padding-left: 5em;
			}

			h2 {
				margin: 0;
				font-size: 3.5em;
			}


			p {
				padding: 2em 0;
				@media #{$max-break-small} {
					padding: 2em;

				}
			}
		}
	}

	#footer-menu {
		@media #{$min-break-medium} {
			@include flex-row (flex-end, flex-start);
		}
		div {
			@include flex-column (center, center);
			margin: 2em auto 0;

			@media #{$min-break-medium} {
				@include flex-column (flex-start, center);
			}
		}

		a {
			margin-bottom: 2em;

			@media #{$min-break-medium} {
				margin-bottom: 1em;
			}
			// font-size: 1em;
		}

		.footer-subcat {
			display: none;
			@media #{$min-break-medium} {
				@include flex-column (flex-start, flex-start);
			}
		}

	}



	// footer social media
	.footer-bottom {
		@include flex-column(center, center);
		padding: 3em 0;

		border-top: 1px solid #393E47;
		margin: 0 3em;

		@media #{$min-break-large} {
			@include flex-row(flex-end, center);
			padding: 3em 0;
		}
		aside {
			margin: 0.5em 1em;

			@include flex-row(center, center);
			color: white;
			i {
				padding: 0 1em;
			}
			p {
				margin: 0;
			}
		}
	}
}
</style>
