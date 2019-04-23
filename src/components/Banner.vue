<template lang="html">

    <!-- ..................... component Home.vue ..................... -->

    <section id="banner" class="row">
        <!-- ........... main banner page ........... -->

        <div class="hero-text">
            <h1> {{ title }} </h1>
            <p> {{ description }} </p>
        </div>

    </section>

</template>

<script>
export default {
    data () {
        return {
            title: 'Cabinet Dentaire',
            name: 'Dr Suybeng & Dr Salomé',
            description: 'à Lille depuis 2012',
            // banner: '../assets/logo.png'
            banner: 'https://res.cloudinary.com/heartland-dental/image/upload/c_fill,f_auto,w_1920/v1517611615/_common/hero/couples/couple-60',
            alt: 'Photo of smiling couple'
        }
    }
}</script>

<style lang="scss">

#banner {

    @include flex-column (center, center);
    @include background('https://res.cloudinary.com/heartland-dental/image/upload/c_fill,f_auto,w_1920/v1517611615/_common/hero/couples/couple-60', cover, no-repeat, center left);

    height: 600px;
    padding: 0;

    @media #{$min-break-medium} {
        @include flex-column (flex-end, center);
    }

    .hero-text {

        color: white;
        font-family: $brand-font;
        height: 100%;
        width: 100%;
        background: rgba(255, 255, 255, 0.25);
        @include flex-column(center, center);

        @media #{$min-break-large} {
            @include flex-column(flex-end, center);
            padding-right: 8em;
        }

        h1 {
            font-size: 3.5em;
            font-weight: 600;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
            margin-bottom: 0.5em;
            color: #2E4052;
            @media #{$min-break-large} {
                // margin-right: 2em;
                font-size: 5em;
            }
        }

        p {
            font-weight: 700;
            color: $text-color;
            font-size: 2em;
        }
    }

}
</style>
