<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="image in images"
        :key="image.name"
        class="d-flex child-flex"
        cols="12"
      >
        <v-card elevation="10">
          <v-row
            align="center"
            justify="center"
            no-gutters
          >
            <v-col cols="12" xs="12" sm="12" md="6">
              <v-img
                v-if="!checkeven(image.id)"
                :src="image.source"
                class="grey lighten-2"
                contain
                max-height="600"
                max-width="600"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5" />
                  </v-row>
                </template>
              </v-img>
              <v-card
                v-if="checkeven(image.id)"
                class="d-flex align-center justify-center"
                outlined
                tile
                shaped
                elevation="5"
              >
                <v-card-title class="text-justify-center">
                  {{ image.text }}
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
              <v-img
                v-if="checkeven(image.id)"
                :src="image.source"
                class="grey lighten-2"
                max-height="600"
                max-width="600"
                contain
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5" />
                  </v-row>
                </template>
              </v-img>
              <v-card
                v-if="!checkeven(image.id)"
                class="d-flex align-center justify-center"
                outlined
                tile
                shaped
                elevation="5"
              >
                <v-card-title class="text-justify-center">
                  {{ image.text }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      images: [
        { id: 1, name: 'img1', source: '/img1.jpg', text: 'Et si on révolutionnait notre façon de cuisiner à la maison ? Le nouveau four fonction vapeur combine vapeur et chaleur traditionnelle pour obtenir des plats biens dorés et très moelleux à l’intérieur 🥧 👨‍🍳' },
        { id: 2, name: 'img2', source: '/img2.jpg', text: 'Rosieres l\'esprit chef collection' },
        { id: 3, name: 'img3', source: '/img3.jpg', text: 'À vous la viande moelleuse et la purée super vitaminée !Le four NutriPréserve cuit à basse température et les aliments gardent leur goût naturel, leur texture, mais aussi leurs vitamines et minéraux 👨‍🍳🥕🍅🥦 Livré avec un appareil de mise sous-vide, vous pouvez préparer vos recettes en avance et conserver vos plats plus longtemps.' },
        { id: 4, name: 'img4', source: '/img4.jpg', text: '' },
        { id: 5, name: 'img5', source: '/img5.jpg', text: '' }
      ]
    }
  },
  methods: {
    checkeven (value) {
      if (value % 2 === 0) { return true } else { return false }
    }
  }
}

</script>
