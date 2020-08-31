<template>
  <!--column justify-center align-center -->
  <v-layout>
    <v-flex>
      <v-parallax
        dark
        src="img-slide2.jpg"
      >
        <v-row
          align="center"
          no-gutters
        >
          <v-col class="text-center" cols="12">
            <h1>
              <strong>Ste. Khalife FAMOS S.A.R.L.</strong>
            </h1>
            <v-spacer />
            <h4 class="subheading font-weight-thin">
              Trading since 1993, Societe Khalife Famos SARL serves the Lebanese market by providing customers with leading
              brands for kitchen appliances and accessories for both free-standing as well fitted or built-in use.
              As agents for Rosieres and Candy built-in appliances, we collaborate with suppliers of kitchen furniture to ensure best fit for your kitchen design.
              Our showroom displays a wide range of French Rosieres and Italian Candy kitchen and laundry appliances. We display a wide range of Italian kitchen accessories including Foster inox sinks,
              Elleci resin sinks, AR & ES sink mixers. We also display a wide range of Italian kitchen chairs.
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
      <v-row>
        <v-col cols="12" class="d-flex pa-10">
          <div class="container1">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FRosieresLebanon%2Fvideos%2F1725596680806489%2F&show_text=0&width=560"
              style="border:1px;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
              class="responsive-iframe"
            />
          </div>
        </v-col>
      </v-row>
      <carousel />
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.container1 {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
