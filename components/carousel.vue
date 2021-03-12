<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="collection in collections"
        :key="collection.name"
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
              <v-carousel
                v-if="!checkeven(collection.id) || mobilee"
                cycle
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(img,i) in collection.images"
                  :key="i"
                  :src="img.source"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                />
              </v-carousel>
              <v-card
                v-if="checkeven(collection.id) || mobilee"
                class="d-flex align-center justify-center"
                outlined
                tile
                elevation="5"
              >
                <v-container>
                  <v-card-title class="text-justify-center">
                    Collection : {{ collection.name }}
                  </v-card-title>
                  <v-divider />
                  <v-card-title class="text-justify-center">
                    {{ collection.text }}
                  </v-card-title>
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
              <v-carousel
                v-if="checkeven(collection.id) && !mobilee"
                cycle
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(img,i) in collection.images"
                  :key="i"
                  :src="img.source"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                />
              </v-carousel>
              <v-card
                v-if="!checkeven(collection.id) && !mobilee"
                class="d-flex align-center justify-center"
                outlined
                tile
                elevation="5"
              >
                <v-container>
                  <v-card-title class="text-justify-center">
                    Collection : {{ collection.name }}
                  </v-card-title>
                  <v-divider />
                  <v-card-title class="text-justify-center">
                    {{ collection.text }}
                  </v-card-title>
                </v-container>
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
      collections: [
        {
          id: 1,
          name: 'Rosieres Esprit Chef',
          text: 'Et si on révolutionnait notre façon de cuisiner à la maison ? le nouveau four fonction vapeur combine vapeur et chaleur traditionnelle pour obtenir des plats biens dorés et très moelleux à l’intérieur 🥧 👨‍🍳',
          images: [
            { name: 'img1', source: '/lespritchef1.jpg' },
            { name: 'img2', source: '/lespritchef2.jpg' },
            { name: 'img3', source: '/lespritchef3.jpg' },
            { name: 'img4', source: '/lespritchef4.jpg' }
          ]
        },
        {
          id: 2,
          name: 'Rosieres Sublime',
          text: 'Né de la collaboration entre les ingénieurs du groupe rosières et les meilleures écoles de cuisine françaises, le four sublime est un concentré de technologie avant-gardiste.',
          images: [
            { name: 'img5', source: '/sublime1.jpg' },
            { name: 'img6', source: '/sublime2.jpg' },
            { name: 'img7', source: '/sublime3.jpg' },
            { name: 'img8', source: '/sublime4.jpg' },
            { name: 'img9', source: '/sublime5.jpg' }
          ]
        },
        {
          id: 3,
          name: 'Rosieres Origine',
          text: 'Né de la collaboration entre les ingénieurs du groupe rosières et les meilleures écoles de cuisine françaises,le four origine est un concentré de technologie avant-gardiste.',
          images: [
            { name: 'img10', source: '/origine1.jpg' },
            { name: 'img11', source: '/origine2.jpg' },
            { name: 'img12', source: '/origine4.jpg' }
          ]
        }
      ]
    }
  },
  computed: {
    mobilee () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
        default: return false
      }
    }
  },
  methods: {
    checkeven (value) {
      if (value % 2 === 0) { return true } else { return false }
    }
  }
}

</script>
