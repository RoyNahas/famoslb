<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="black lighten-1 white--text text-center"
    >
      <div class="d-flex justify-center">
        <p>Rosieres</p>
        <div
          v-for="icon in icons1"
          :key="icon.id"
          class="d-flex"
          title=""
        >
          <v-btn
            class="mx-4 white--text"
            icon
            :href="icon.source"
          >
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
        </div>

        <p>Famos</p>
        <div
          v-for="icon in icons2"
          :key="icon.id"
          class="d-flex"
        >
          <v-btn
            class="mx-4 white--text"
            icon
            :href="icon.source"
          >
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
        </div>
      </div>
      <v-card-text class="white--text pt-0">
        Rosières serves the market by providing leading brands such as Rosières, Candy and Famos for kitchen appliances, Sinks, kitchen chairs and mixers are available. Maameltein, Naaman Street, Naaman Center. Tel. +961 9 642 838 | +961 9 637 725 Antelias, Antelias Rd, facing Total Gaz Station, next to Pharmacy Abou Habib. Tel. +961 4 521 985 | +961 3 327 449
      </v-card-text>
      <v-divider />
      <v-card-text class="white--text">
        <strong>Famos-Rossiere-societee khalife</strong> - {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons1: [
      { id: 1, company: 'Rosieres', name: 'mdi-facebook', source: 'https://www.facebook.com/RosieresLebanon/about/?ref=page_internal' },
      { id: 2, company: 'Rosieres', name: 'mdi-instagram', source: 'https://www.instagram.com/rosieres_lebanon/' }
    ],
    icons2: [
      { id: 3, company: 'Famos', name: 'mdi-facebook', source: 'https://www.facebook.com/Famos-366366727542985' },
      { id: 4, company: 'Famos', name: 'mdi-instagram', source: 'https://www.instagram.com/rosieres_lebanon/' }
    ]
  })
}
</script>
