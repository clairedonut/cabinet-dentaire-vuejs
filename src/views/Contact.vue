<template lang="html">

	<section id="contact" class="row">

		<div class="form-container col-12 col-lg-10">

			<div class="">
				<h2> {{ title }} </h2>
				<p> {{ text }} </p>
			</div>

		<form method="post" action="contactengine.php" class="floating-form">

			<div class="floating-label">
				<input class="floating-input" type="text" name="Name" placeholder=" ">
				<span class="highlight"></span>
				<label>Votre nom</label>
			</div>

			<div class="floating-label">
				<input class="floating-input" type="text" name="Email" placeholder=" ">
				<span class="highlight"></span>
				<label>Votre Email</label>
			</div>

			<div class="floating-label">
				<textarea class="floating-input floating-textarea" name="Message" placeholder=" "></textarea>
				<span class="highlight"></span>
				<label>Votre message ...</label>
			</div>

			<input type="submit" name="submit" value="Submit" class="submit-button btn btn-primary" />

		</form>

	</div>
</section>




</template>

<script>

export default {
	data () {
		return {
			title: 'Contactez nous',
			text: 'Ipsum fugiat in do eiusmod minim culpa elit Lorem sint enim sint amet commodo.'
		}
	}
}
</script>

<style lang="scss">

*{
	// border: 0.5px solid blue;
}

#contact {

	@include background('https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg', cover, no-repeat, left );


	margin: 0;
	@include flex-column(center, center);

	h2 {
		font-size: 3em;
		font-weight: 700;
		letter-spacing: -2px;


		@media #{$min-break-medium} {
			font-size: 4em;
			letter-spacing: -4px;

		}
	}

	.form-container {
		background-color: rgba(255,255,255,0.99);

		@media #{$min-break-medium} {

		}
		@media #{$min-break-large} {
			border-radius: 5px;
			margin: 5em 0;
		}

	}

	form {

		@include flex-column(center, center);
		margin: 5em 0;

		input, textarea {
			margin: 1.5em 0;

		}

		.floating-label {
			width: 80%;

			@media #{$min-break-medium} {
				width: 60%;
			}

			@media #{$min-break-large} {
				width: 45%;
			}
		}

		input, textarea {
			border: 0;
			border-bottom: 2px solid #8a8c8b;
			padding: 0.5em 1em;
		}

		input:focus, textarea:focus {
			outline:none;
			border-bottom: 2px solid blue;
		}

		textarea {
			min-height: 100px;
		}

		.submit-button {
			width: 250px;
		}

	}
}

/****  floating-Lable style start ****/
.floating-label {
	position:relative;
	margin-bottom:20px;
}
.floating-input , .floating-select {
	font-size:14px;
	padding:4px 4px;
	display:block;
	width:100%;
	height:30px;
	background-color: transparent;
	border:none;
	border-bottom:1px solid #757575;
}

.floating-input:focus , .floating-select:focus {
	outline:none;
	border-bottom:2px solid #5264AE;
}

label {
	color:#999;
	font-size:14px;
	font-weight:normal;
	position:absolute;
	pointer-events:none;
	left:5px;
	top:5px;
	transition:0.2s ease all;
	-moz-transition:0.2s ease all;
	-webkit-transition:0.2s ease all;
}

.floating-input:focus ~ label, .floating-input:not(:placeholder-shown) ~ label {
	top:-18px;
	font-size:14px;
	color:#5264AE;
}

.floating-select:focus ~ label , .floating-select:not([value=""]):valid ~ label {
	top:-18px;
	font-size:14px;
	color:#5264AE;
}

/* active state */
.floating-input:focus ~ .bar:before, .floating-input:focus ~ .bar:after, .floating-select:focus ~ .bar:before, .floating-select:focus ~ .bar:after {
	width:50%;
}

*, *:before, *:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.floating-textarea {
	min-height: 30px;
	max-height: 260px;
	overflow:hidden;
	overflow-x: hidden;
}

/* highlighter */
.highlight {
	position:absolute;
	height:50%;
	width:100%;
	top:15%;
	left:0;
	pointer-events:none;
	opacity:0.5;
}

/* active state */
.floating-input:focus ~ .highlight , .floating-select:focus ~ .highlight {
	-webkit-animation:inputHighlighter 0.3s ease;
	-moz-animation:inputHighlighter 0.3s ease;
	animation:inputHighlighter 0.3s ease;
}

/* animation */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
	to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
	to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
	to 	{ width:0; background:transparent; }
}

/****  floating-Lable style end ****/
</style>
