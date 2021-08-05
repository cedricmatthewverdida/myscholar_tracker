<template>
  <v-sheet
    color="transparent"
    max-width="800"
  >
    <v-slide-group
      
      show-arrows
      center-active
    >
      <v-slide-item
      >
        


          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mx-2"
                depressed
                rounded
                :loading="slp.length == 0"
                color="transparent"
                style="text-transform:none"
                v-bind="attrs"
                v-on="on"
              >
                <template v-slot:loader>
                    <v-progress-circular
                      indeterminate
                      :size="20"
                      color="white"
                    ></v-progress-circular>
                    <span class="white--text">SLP</span>
                </template>

                  <v-img
                  v-if="slp.length != 0"
                  :src="slp.image.thumb"
                  :lazy-src="slp.image.thumb"
                  >
                  </v-img>
                  <h5 v-if="slp.length != 0" >
                  {{slp.name}} <br>
                  {{slp.market_data.current_price.usd | currency_strings}} USD
                  </h5>
              </v-btn>
            </template>
            <v-list
            style="
            max-height: 300px;
            border-radius: 30px;
            border: 1px solid rgba(209, 213, 219, 0.3);"
            class="overflow-y-auto"
            v-if="slp.length !=0">

              <v-list-item 
               v-for="(item,key) in slp.market_data.current_price"
               :key="key"
              >
                  <v-list-item-content>
                    <v-list-item-title>
                      <div class="d-flex flex-row">
                          <span class="mr-5">{{key | toUpper}}</span>
                          <span>{{item| currency_strings}}</span>
                      </div>
                      </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>
          </v-menu>

      </v-slide-item>




      <v-slide-item
      >
        

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mx-2"
                depressed
                rounded
                :loading="eth.length == 0"
                color="transparent"
                style="text-transform:none"
                v-bind="attrs"
                v-on="on"
              >
                <template v-slot:loader>
                    <v-progress-circular
                      indeterminate
                      :size="20"
                      color="white"
                    ></v-progress-circular>
                    <span class="white--text">ETH</span>
                </template>

                  <v-img
                  v-if="eth.length != 0"
                  :src="eth.image.thumb"
                  :lazy-src="eth.image.thumb"
                  >
                  </v-img>
                  <h5 v-if="eth.length != 0">
                  {{eth.name}} <br>
                  {{eth.market_data.current_price.usd | currency_strings}} USD
                  </h5>
                </v-btn>
              </template>
                    <v-list
                          style="
                          max-height: 300px;
                          border-radius: 30px;
                          border: 1px solid rgba(209, 213, 219, 0.3);"
                          class="overflow-y-auto"
                          v-if="eth.length !=0">

                            <v-list-item 
                            v-for="(item,key) in eth.market_data.current_price"
                            :key="key"
                            >
                                <v-list-item-content>
                                  <v-list-item-title>
                                    <div class="d-flex flex-row">
                                        <span class="mr-5">{{key | toUpper}}</span>
                                        <span>{{item| currency_strings}}</span>
                                    </div>
                            </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
        </v-menu>
      </v-slide-item>



      <v-slide-item
      >

              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                  class="mx-2"
                  depressed
                  rounded
                  :loading="axs.length == 0"
                  color="transparent"
                  style="text-transform:none"
                  v-bind="attrs"
                  v-on="on"
                >
                  <template v-slot:loader>
                      <v-progress-circular
                        indeterminate
                        :size="20"
                        color="white"
                      ></v-progress-circular>
                      <span class="white--text">AXS</span>
                  </template>
                    <v-img
                    v-if="axs.length != 0"
                    :src="axs.image.thumb"
                    :lazy-src="axs.image.thumb"
                    >
                    </v-img>
                    <h5 v-if="axs.length != 0" >
                    {{axs.name}} <br>
                    {{axs.market_data.current_price.usd | currency_strings}} USD
                    </h5>
                </v-btn>
                </template>
                <v-list
                style="
                max-height: 300px;
                border-radius: 30px;
                border: 1px solid rgba(209, 213, 219, 0.3);"
                class="overflow-y-auto"
                v-if="axs.length !=0">

                  <v-list-item 
                  v-for="(item,key) in axs.market_data.current_price"
                  :key="key"
                  >
                      <v-list-item-content>
                        <v-list-item-title>
                          <div class="d-flex flex-row">
                              <span class="mr-5">{{key | toUpper}}</span>
                              <span>{{item| currency_strings}}</span>
                          </div>
                          </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                </v-list>
              </v-menu>
        
      </v-slide-item>

      <v-slide-item>
           <v-btn 
           @click="reload()" 
           color="primary"
           x-small
           depressed
           fab>

                <v-icon>
                    mdi-reload
                </v-icon>

            </v-btn>
      </v-slide-item>

    </v-slide-group>

   
  </v-sheet>
</template>



<script>
  export default {

    data: () => ({
      model: null,
      slp:[],
      eth:[],
      axs:[]
    }),

    methods:{
        async load_slp (){
            this.slp = []
            const send = await this.$axios.get('https://api.coingecko.com/api/v3/coins/smooth-love-potion');
            const respo = await send.data;
            this.slp = respo
        },
        async load_eth (){
            this.eth = []
            const send = await this.$axios.get('https://api.coingecko.com/api/v3/coins/ethereum');
            const respo = await send.data;
            this.eth = respo
        },
        async load_axs (){
            this.axs = []
            const send = await this.$axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity');
            const respo = await send.data;
            this.axs = respo
        },
        reload(){
            this.load_slp()
            this.load_eth()
            this.load_axs()
        }
    },
    filters:{
        currency_strings : function (val){
            return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        },
        toUpper(str) {
          return str.toUpperCase()
        }
    },
    mounted(){
        this.load_slp()
        this.load_eth()
        this.load_axs()
    }
  }
</script>

<style>
h5{
  color:#EDEDED;
}
</style>