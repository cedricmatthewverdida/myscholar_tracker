<template>
  <v-sheet
    class="mx-auto"
    color="transparent"
  >
    <v-slide-group
      
      show-arrows
      center-active
    >
      <v-slide-item
      >
        <v-btn
          class="mx-2"
          depressed
          rounded
          :loading="slp.length == 0"
          color="transparent"
          style="text-transform:none"
        >
            <v-img
            v-if="slp.length != 0"
            :src="slp.image.thumb"
            :lazy-src="slp.image.thumb"
            >
            </v-img>
            <h5 v-if="slp.length != 0" class="white--text">
            {{slp.name}} <br>
            {{slp.market_data.current_price.php | currency_strings}} PHP
            </h5>
        </v-btn>
      </v-slide-item>

      <v-slide-item
      >
        <v-btn
          class="mx-2"
          depressed
          rounded
          :loading="eth.length == 0"
          color="transparent"
          style="text-transform:none"
        >
            <v-img
            v-if="eth.length != 0"
            :src="eth.image.thumb"
            :lazy-src="eth.image.thumb"
            >
            </v-img>
            <h5 v-if="eth.length != 0" class="white--text">
            {{eth.name}} <br>
            {{eth.market_data.current_price.php | currency_strings}} PHP
            </h5>
        </v-btn>
      </v-slide-item>

      <v-slide-item
      >
        <v-btn
          class="mx-2"
          depressed
          rounded
          :loading="axs.length == 0"
          color="transparent"
          style="text-transform:none"
        >
            <v-img
            v-if="axs.length != 0"
            :src="axs.image.thumb"
            :lazy-src="axs.image.thumb"
            >
            </v-img>
            <h5 v-if="axs.length != 0" class="white--text">
            {{axs.name}} <br>
            {{axs.market_data.current_price.php | currency_strings}} PHP
            </h5>
        </v-btn>
      </v-slide-item>

      <v-slide-item>
           <v-btn @click="reload()" color="primary" icon>

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
        }
    },
    mounted(){
        this.load_slp()
        this.load_eth()
        this.load_axs()
    }
  }
</script>