<template>
  <v-layout>
    <v-flex>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" sm="12" xs="12" md="2">
              <v-card>
                <v-list shaped>
                  <v-list-item>
                    <v-list-item-icon><v-icon>mdi-magnify</v-icon></v-list-item-icon>
                    <v-list-item-title>Quick Search</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-text-field v-model="search" clearable placeholder="enter seach here" />
                  </v-list-item>
                  <v-list-group
                    v-model="list1"
                    no-action
                    sub-group
                  >
                    <template v-slot:activator>
                      <v-list-item-content><v-list-item-title>Filter by Product</v-list-item-title></v-list-item-content>
                    </template>
                    <v-list-item-group
                      v-model="productModel"
                      multiple
                    >
                      <template v-for="(item, i) in itemsFiltre">
                        <v-list-item
                          :key="`item-${i}`"
                          :value="item"
                          active-class="deep-purple--text text--accent-4"
                        >
                          <template v-slot:default="{ active }">
                            <v-list-item-content><v-list-item-title v-text="item" /></v-list-item-content>

                            <v-list-item-action>
                              <v-checkbox
                                :input-value="active"
                                color="deep-purple accent-4"
                              />
                            </v-list-item-action>
                          </template>
                        </v-list-item>
                      </template>
                    </v-list-item-group>
                  </v-list-group>
                  <v-list-group
                    v-model="list2"
                    no-action
                    sub-group
                  >
                    <template v-slot:activator>
                      <v-list-item-content><v-list-item-title>Filter by Brand</v-list-item-title></v-list-item-content>
                    </template>
                    <v-list-item-group
                      v-model="productBrand"
                      multiple
                    >
                      <template v-for="(item, i) in brandFilter">
                        <v-list-item
                          :key="`item-${i}`"
                          :value="item"
                          active-class="deep-purple--text text--accent-4"
                        >
                          <template v-slot:default="{ active }">
                            <v-list-item-content> <v-list-item-title v-text="item" /></v-list-item-content>
                            <v-list-item-action><v-checkbox :input-value="active" color="deep-purple accent-4" /></v-list-item-action>
                          </template>
                        </v-list-item>
                      </template>
                    </v-list-item-group>
                  </v-list-group>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" xs="12" md="10" class="d-flex">
              <v-row>
                <v-col
                  v-for="product in Filterproduct"
                  :key="product.name"
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                >
                  <v-card
                    class="pa-10 mx-auto"
                  >
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="product.image"
                    >
                      <v-card-title>{{ product.name }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                      product type :{{ product.type }} - brand : {{ product.brand }}
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>{{ product.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        fab
                        x-small
                        color="green"
                        :href="'https://wa.me/+96103327448?text=Im%20interested%20in%20your%20product%20('+product.name+')%20can%20you%20please%20assist%20me'"
                      >
                        <v-icon color="white">
                          mdi-whatsapp
                        </v-icon>
                      </v-btn>
                      <v-btn
                        color="black"
                        text
                        right
                        absolute
                        @click="getmoreinfo(product)"
                      >
                        More info<v-icon color="grey">
                          mdi-plus-circle
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-pagination
        v-model="page"
        :length="5"
        circle
        :total-visible="4"
      />
      <div class="text-center">
        <v-dialog v-model="dialog" max-width="1000px">
          <v-card>
            <v-card-actions>
              <v-spacer />
              <v-btn text color="primary" @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions>
            <v-divider />
            <!-- <v-card-text>
            {{ currProduct }}
          </v-card-text> -->
            <v-card-title> {{ currProduct.name }} </v-card-title>
            <v-card-subtitle> {{ currProduct.description }} </v-card-subtitle>
            <v-img
              max-width="500"
              :src="currProduct.subImage"
            />
            <v-card-text>
              {{ currProduct.detailedDesc }}
            </v-card-text>
            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn text color="primary" @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    itemsFiltre: [
      'Chimney Hood',
      'Dishwasher',
      'Hobs',
      'Microwave',
      'Oven',
      'Refrigerator',
      'Washing Machine',
      'Sinks',
      'Kitchen Top'
    ],
    brandFilter: [
      'Rossiere',
      'Candy',
      'Famos'
    ],
    list1: true,
    list2: false,
    productModel: [],
    productBrand: [],
    dialog: false,
    page: 1,
    currProduct: {},
    search: '',
    hreflink: 'https://wa.me/+96103327448?text=Im%20interested%20in%20your%20product%20can%20you%20please%20assist%20me',
    products: [
      {
        name: 'fridge1',
        type: 'Refrigerator',
        image: 'RBLP3683-3.jpg',
        subImage: 'RBLP230-det.jpg',
        description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3',
        detailedDesc: 'Interactive display on the door, Led Lights, Glass shelves,Handles: integrated Comfortable handle, 1 ice cube trays, 2 freezer drawers, 2 Adjustable Shelves in fridge compartment, Energy efficiency class - A +, Fridge gross capacity (l): 292, Freezer gross capacity (l): 129, Noise level dB (A): 43, Bottom Freezer, Automatic Defrost, NO FROST,',
        brand: 'rossiere'
      },
      { name: 'fridge2', type: 'Refrigerator', image: 'RBLP3683-3.jpg', subImage: 'RBLP3683-3-det.jpg', description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3', brand: 'rossiere' },
      { name: 'fridge3', type: 'Refrigerator', image: 'RBLP3683-3.jpg', subImage: 'RBLP3683-3-det.jpg', description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3', brand: 'rossiere' },
      { name: 'fridge4', type: 'Refrigerator', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3', brand: 'rossiere' },
      { name: 'fridge5', type: 'Refrigerator', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3', brand: 'famos' },
      { name: 'fridge6', type: 'Refrigerator', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3', brand: 'famos' },
      { name: 'fridge7', type: 'Refrigerator', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3', brand: 'famos' },
      { name: 'fridge8', type: 'Refrigerator', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'Rosieres Refrigerator Single Door - REF. RBLP3683-3', brand: 'famos' },
      { name: 'oven1', type: 'oven', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven1' },
      { name: 'oven2', type: 'oven', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven2' },
      { name: 'oven3', type: 'oven', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven3' },
      { name: 'oven4', type: 'oven', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven4' },
      { name: 'oven5', type: 'oven', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven5' },
      { name: 'oven6', type: 'oven', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven6' },
      { name: 'oven7', type: 'oven', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven7' },
      { name: 'Sinks', type: 'Sinks', image: 'RBLP3683-3.jpg', subImage: 'RBLP230-det.jpg', description: 'oven8' }
    ]
  }),
  computed: {
    Filterproduct () {
      let finalProduct = []
      if (this.search) {
        finalProduct = (this.products.filter(item => item.name === this.search)).sort()
      } else {
        finalProduct = this.products
      }
      if (this.productModel.length > 0) {
        finalProduct = [...new Set(finalProduct.filter(item => this.productModel.includes(item.type)))].sort()
      }
      if (this.productBrand.length > 0) {
        finalProduct = [...new Set(finalProduct.filter(item => this.productModel.includes(item.brand)))].sort()
      }
      return finalProduct
    }
  },
  methods: {
    getmoreinfo (product) {
      this.dialog = !this.dialog
      this.currProduct = product
    }
  },
  getwplink (productname) {
    return 'https://wa.me/+96103327448?text=Im%20interested%20in%20your%20product%20(' + productname + ')can%20you%20please%20assist%20me'
  }
}
</script>
