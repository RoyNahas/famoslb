<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      temporary
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      elevation="1"
      app
    >
      <v-app-bar-nav-icon class="hidden-md-and-up black--text" @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-img contain src="/rosieres-Logo.gif" max-width="150" max-height="150" />
        <v-img contain src="/famos-logo.jpg" max-width="150" max-height="150" />
        <!--<v-img contain src="/elleci-logo.gif" max-width="150" max-height="150" />
        <v-img contain src="/foster-logo.gif" max-width="150" max-height="150" /> -->
      </div>
      <template v-slot:extension>
        <v-tabs
          centered
          :value="!mobile"
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="item in items"
            :key="item.title"
            :to="item.to"
          >
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
        <v-speed-dial
          v-model="fab"
          :fixed="true"
          :top="false"
          :bottom="true"
          :right="true"
          :left="false"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
        >
          <template v-slot:activator>
            <v-btn
              v-model="fab"
              color="blue darken-2"
              dark
              fab
            >
              <v-icon v-if="fab">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-phone
              </v-icon>
            </v-btn>
          </template>
          <v-btn
            fab
            dark
            small
            color="green"
            href="https://wa.me/+96103327448?text=I'm%20interested%20in%20your%20products%20can%20you%20please%20assist%20me"
          >
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="indigo"
            href="https://www.facebook.com/RosieresLebanon/about/?ref=page_internal"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="blue"
            @click="dialog = !dialog"
          >
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <v-btn
            fab
            small
            href="https://www.instagram.com/rosieres_lebanon/"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-speed-dial>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <p class="display-1 text--primary d-flex justify-center">
                03327448
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text color="primary" @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
    <footer-famos />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      right: true,
      tab: 'tab-4',
      dialog: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home Page',
          to: '/'
        },
        {
          icon: 'mdi-fridge',
          title: 'Products',
          to: '/products'
        },
        {
          icon: 'mdi-information',
          title: 'About us',
          to: '/aboutus'
        },
        {
          icon: 'mdi-phone',
          title: 'Contact us',
          to: '/contactus'
        }
      ],
      rightDrawer: false,
      title: 'Famos | Rosiere | lebanon',
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      transition: 'slide-y-reverse-transition'
    }
  },
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { class: 'purple', icon: 'account_circle' }
        case 'two': return { class: 'red', icon: 'edit' }
        case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    },
    mobile () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
        default: return true
      }
    },
    screenbreakpoint () {
      return this.$vuetify.breakpoint.name
    }
  },
  watch: {
  },
  mounted () {
  }
}

</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>
