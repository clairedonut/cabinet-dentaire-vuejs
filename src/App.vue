<template>
	<div id="app">

		<!-- ..................... Nav ..................... -->

		<div id="nav">

			<!-- nav menu for tablettes and up -->
			<div id="nav-large">
				<router-link to="/">Cabinet Dentaire</router-link>
				<router-link to="/equipe">Equipe</router-link>
				<router-link to="/prestations">Prestations</router-link>
				<router-link to="/contact">Contact</router-link>
				<div class="nav-urgences">
					<router-link to="/urgences">Urgences</router-link>
				</div>
			</div>

			<!-- nav menu for mobile - hamburger menu -->
			<div id="nav-mobile">

				<!-- nav-mobile - exit button -->
				<button class="hamburger hamburger--squeeze isActive" v-if="show" key="on" @click="show = false">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>

				<!-- nav-mobile hamburger open menu  button -->
				<button class="hamburger hamburger--squeeze " v-else key="off" @click="show = true">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>

				<!-- nav-mobile menu -->
				<div class="nav-menu" v-bind:class="{ active: show }" v-if="show">
					<router-link class="router-link" to="/">Cabinet Dentaire</router-link>
					<router-link class="router-link"  to="/equipe">Equipe</router-link>
					<router-link class="router-link"  to="/prestations">Prestations</router-link>
					<router-link class="router-link"  to="/contact">Contact</router-link>

					<div class="nav-urgences">
						<router-link class="router-link"  to="/urgences">Urgences</router-link>
					</div>

				</div>

			</div>

		</div>

		<!-- ..................... Main Content ..................... -->

		<transition name="router-anim">

			<router-view/>

		</transition>

		<!-- ..................... Footer ..................... -->

		<Footer/>

	</div>
</template>

<script type="text/javascript">

import Footer from '@/components/Footer.vue'


// --------------- Nav - Change background color on scroll

function navScroll() {
	var myNav = document.getElementById('nav');
	if (document.documentElement.scrollTop > 200 ) {
		myNav.classList.add("nav-colored");
		myNav.classList.remove("nav-transparent");
	}

	else {
		myNav.classList.add("nav-transparent");
		myNav.classList.remove("nav-colored");
	}
}

window.onscroll = function() {
	navScroll();
};

// --------------- END

export default {

	data() {
		return {
			show: false
		}
	},
	components: {
		Footer
	}
}


</script>

<style lang="scss">

/**
* ----------------------------------------
* transition - animation fade-in-fwd
* ----------------------------------------
*/

.router-anim-enter-active {
	-webkit-animation: fade-in-fwd 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in-fwd 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;}

	@-webkit-keyframes fade-in-fwd {
		0% {
			-webkit-transform: translateZ(-80px);
			transform: translateZ(-80px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0);
			opacity: 1;
		}
	}
	@keyframes fade-in-fwd {
		0% {
			-webkit-transform: translateZ(-80px);
			transform: translateZ(-80px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0);
			opacity: 1;
		}
	}

	/* ------- Main ------------------------------------------------- */

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}


	/* ------- Nav ------------------------------------------------- */


	/* ------- Nav - scroll background color ------- */

	.nav-colored {
		background: rgba(255,255,255,0.7);
	}

	.nav-transparent {
		background: rgba(255,255,255,0);
	}


	/* ------- Nav main ------- */

	#nav {

		width: 100%;
		padding: 20px;
		position: fixed;

		z-index: 100;

		@media #{$max-break-small} {
			padding: 5px;
		}

		@include flex-row(flex-end, center);

		a {
			font-weight: bold;
			color: #2c3e50;
			text-decoration: none;


			padding: 0 1em;
			&:hover {
				text-decoration: none;
				color: #42b983;

			}
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

	/* ------- Nav : large screen format --------------------- */

	#nav-large {

		display: none;

		.nav-urgences {
			a {
				@include hyperlink(red, #42b983);
			}
		}

		@media #{$min-break-medium} {
			@include flex-row(flex-end, flex-start);
		}

	}

	/* ------- Nav : mobile format --------------------- */


	#nav-mobile {

		.hamburger-inner{
			z-index: 500;
		}

		.nav-urgences {
			a {
				@include hyperlink(red, #42b983);
			}
		}

		@media #{$min-break-medium} {
			display: none;
		}

		.nav-menu {
			width: 100%;

			padding: 5em;

			@include flex-column(center, center);
			background: white;

			z-index: -3;

			position: absolute;
			top: 0;
			left: 0;

			.router-link {
				margin: 0.5em auto;
			}
		}
	}
</style>
