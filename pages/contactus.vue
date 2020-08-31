<template>
  <v-layout>
    <v-flex>
      <v-row>
        <v-col cols="12">
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-center">
              <p><strong>Contact Us-Ste Khalife FAMOS S.A.R.L.</strong></p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" xs="12" sm="12" md="6" class="d-flex justify-end">
              <v-card
                max-width="400"
                max-height="500"
                shaped
                elevation="5"
              >
                <v-card-title class="justify-center">
                  First Branch
                </v-card-title>
                <v-card-text>
                  Maameltein, Naaman Street, Naaman Center.
                  <v-divider />
                  <v-icon>mdi-phone</v-icon>Tel: +961 9 642 838
                  <v-divider />
                  <v-icon>mdi-fax</v-icon>Fax:  - +961 9 637 725
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto" xs="12" sm="12" md="6" class="d-flex justify-start">
              <v-card
                max-width="400"
                max-height="500"
                shaped
                elevation="5"
              >
                <v-card-title
                  class="justify-center"
                >
                  Second Branch
                </v-card-title>
                <v-card-text>
                  Antelias, Antelias Rd, facing Total Gaz Station, next to Pharmacy Abou Habib.
                  <v-divider />
                  <v-icon>mdi-phone</v-icon>Tel: ++961 4 521 985
                  <v-divider />
                  <v-icon>mdi-fax</v-icon>Fax:  - ++961 4 521 985
                  <v-divider />
                  <v-icon>mdi-email</v-icon>nakhalife@hotmail.com
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- <v-col cols="12" class="d-flex justify-center d-none-xs">
              <v-img contain src="/rosieres-Logo.gif" max-width="150" max-height="150" />
              <v-img contain src="/famos-logo.jpg" max-width="150" max-height="150" />
              <v-img contain src="/elleci-logo.gif" max-width="150" max-height="150" />
              <v-img contain src="/foster-logo.gif" max-width="150" max-height="150" />
            </v-col> -->
          <v-row>
            <v-col col="12">
              <v-card elevation="10" shaped>
                <v-card-title class="justify-center">
                  Email Us
                </v-card-title>
                <v-form
                  ref="form"
                  v-model="form"
                  class="pa-4 pt-6"
                >
                  <v-text-field
                    v-model="phone"
                    filled
                    color="deep-purple"
                    label="Phone number"
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    filled
                    color="deep-purple"
                    label="Email address"
                    type="email"
                  />
                  <v-text-field
                    v-model="subject"
                    filled
                    color="deep-purple"
                    label="Subject"
                  />
                  <v-textarea
                    v-model="emailBody"
                    auto-grow
                    filled
                    color="deep-purple"
                    label="Enter your Email"
                    rows="4"
                  />
                </v-form>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="d-flex">
            <v-col cols="12" class="align-center">
              <div class="container1">
                <GmapMap
                  :center="{lat:34.000407, lng:35.646392}"
                  :zoom="17"
                  map-type-id="roadmap"
                  class="responsive-iframe"
                >
                  <GmapMarker
                    v-for="(m, index) in markers"
                    :key="index"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                  />
                </GmapMap>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    markers: [{
      position: {
        lat: 34.000407,
        lng: 35.646392
      }
    }, {
      position: {
        lat: 34.000394,
        lng: 35.646389
      }
    }],
    agreement: false,
    emailBody: '',
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    subject: '',
    phone: undefined,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      required: v => !!v || 'This field is required'
    }
  })
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
