<template>
  <v-app 
    style="
    background-color: #50E3C2;
    background-image: 
    radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
    radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55
    "
  >
 

    <v-app-bar
      
      fixed
      app
      flat
      style="
      border-bottom-left-radius:30px;
      border-bottom-right-radius:30px;
      background-color: #f5f7fa;
      background-image: 
      radial-gradient(at 47% 33%, hsl(216.00, 33%, 97%) 0, transparent 59%), 
      radial-gradient(at 82% 65%, hsl(216.00, 33%, 79%) 0, transparent 55%);
      "
    >
      <v-app-bar-nav-icon class="ml-2">
          <v-img
            :src="require('@/assets/tab-axie.png')"
            :lazy-src="require('@/assets/tab-axie.png')"
        
            ></v-img>
      </v-app-bar-nav-icon> 

      <v-toolbar-title class="overline" v-text="title" />

      <v-spacer />

    </v-app-bar>


    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  








    <v-snackbar
      v-model="copy_clipboard_stat"
      :timeout="3000"
      color="primary"
    >
    
    
      Ronin Address copied to the clipboard horay! Thankyou so much 

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="copy_clipboard_stat = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>


    <v-footer
      padless
    >
        <v-card
          class="flex"
          flat
          tile
        >




          <v-card-text class="teal py-2 text-center">


                        <small class="white--text">We don't use cookies to gather information. No ads. No trackers. No kidding. Your contribution helps the developers to pay their tuition thank you. We are also willing to be one of your scholars.</small> <br>

             <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 512.009 512.009" style="enable-background:new 0 0 512.009 512.009;" xml:space="preserve">
            <circle style="fill:#F7B239;" cx="256.004" cy="256.004" r="256.004"/>
            <path style="fill:#E09B2D;" d="M121.499,390.501C29.407,298.407,22.15,153.608,99.723,53.204
              c-8.593,6.638-16.861,13.895-24.743,21.777c-99.974,99.974-99.974,262.065,0,362.038s262.065,99.974,362.038,0
              c7.881-7.881,15.138-16.15,21.777-24.743C358.392,489.85,213.593,482.593,121.499,390.501z"/>
            <g>
              <circle style="fill:#F95428;" cx="94.811" cy="267.479" r="25.013"/>
              <circle style="fill:#F95428;" cx="417.185" cy="267.479" r="25.013"/>
            </g>
            <g>
              <path style="fill:#4D4D4D;" d="M196.533,199.542c-3.23,0-6.379-1.65-8.155-4.624c-8.571-14.347-23.667-22.913-40.38-22.913
                s-31.809,8.565-40.38,22.913c-2.687,4.498-8.511,5.966-13.012,3.279c-4.499-2.688-5.966-8.513-3.279-13.012
                c12.03-20.136,33.215-32.156,56.671-32.156s44.641,12.022,56.671,32.156c2.688,4.499,1.22,10.325-3.279,13.012
                C199.867,199.108,198.189,199.542,196.533,199.542z"/>
              <path style="fill:#4D4D4D;" d="M412.536,199.542c-3.23,0-6.378-1.65-8.154-4.624c-8.571-14.347-23.667-22.913-40.381-22.913
                c-16.713,0-31.807,8.566-40.379,22.913c-2.686,4.499-8.513,5.966-13.012,3.279c-4.499-2.687-5.966-8.513-3.279-13.012
                c12.03-20.135,33.215-32.156,56.67-32.156c23.456,0,44.641,12.02,56.673,32.156c2.687,4.499,1.22,10.324-3.279,13.012
                C415.87,199.108,414.192,199.542,412.536,199.542z"/>
              <path style="fill:#4D4D4D;" d="M296.511,335.795c-16.646,0-31.418-8.177-40.512-20.725c-9.093,12.547-23.866,20.725-40.512,20.725
                c-27.57,0-50-22.43-50-49.999c0-5.24,4.248-9.489,9.489-9.489s9.489,4.248,9.489,9.489c0,17.106,13.917,31.022,31.023,31.022
                s31.023-13.917,31.023-31.022c0-5.24,4.248-9.489,9.489-9.489c5.242,0,9.489,4.248,9.489,9.489
                c0,17.106,13.917,31.022,31.023,31.022c17.106,0,31.022-13.917,31.022-31.022c0-5.24,4.247-9.489,9.489-9.489
                s9.489,4.248,9.489,9.489C346.51,313.365,324.08,335.795,296.511,335.795z"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>

            <strong class="subheading white--text">
              Please Consider Donating To Us
            </strong>

             <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 512.009 512.009" style="enable-background:new 0 0 512.009 512.009;" xml:space="preserve">
            <circle style="fill:#F7B239;" cx="256.004" cy="256.004" r="256.004"/>
            <path style="fill:#E09B2D;" d="M121.499,390.501C29.407,298.407,22.15,153.608,99.723,53.204
              c-8.593,6.638-16.861,13.895-24.743,21.777c-99.974,99.974-99.974,262.065,0,362.038s262.065,99.974,362.038,0
              c7.881-7.881,15.138-16.15,21.777-24.743C358.392,489.85,213.593,482.593,121.499,390.501z"/>
            <g>
              <circle style="fill:#F95428;" cx="94.811" cy="267.479" r="25.013"/>
              <circle style="fill:#F95428;" cx="417.185" cy="267.479" r="25.013"/>
            </g>
            <g>
              <path style="fill:#4D4D4D;" d="M196.533,199.542c-3.23,0-6.379-1.65-8.155-4.624c-8.571-14.347-23.667-22.913-40.38-22.913
                s-31.809,8.565-40.38,22.913c-2.687,4.498-8.511,5.966-13.012,3.279c-4.499-2.688-5.966-8.513-3.279-13.012
                c12.03-20.136,33.215-32.156,56.671-32.156s44.641,12.022,56.671,32.156c2.688,4.499,1.22,10.325-3.279,13.012
                C199.867,199.108,198.189,199.542,196.533,199.542z"/>
              <path style="fill:#4D4D4D;" d="M412.536,199.542c-3.23,0-6.378-1.65-8.154-4.624c-8.571-14.347-23.667-22.913-40.381-22.913
                c-16.713,0-31.807,8.566-40.379,22.913c-2.686,4.499-8.513,5.966-13.012,3.279c-4.499-2.687-5.966-8.513-3.279-13.012
                c12.03-20.135,33.215-32.156,56.67-32.156c23.456,0,44.641,12.02,56.673,32.156c2.687,4.499,1.22,10.324-3.279,13.012
                C415.87,199.108,414.192,199.542,412.536,199.542z"/>
              <path style="fill:#4D4D4D;" d="M296.511,335.795c-16.646,0-31.418-8.177-40.512-20.725c-9.093,12.547-23.866,20.725-40.512,20.725
                c-27.57,0-50-22.43-50-49.999c0-5.24,4.248-9.489,9.489-9.489s9.489,4.248,9.489,9.489c0,17.106,13.917,31.022,31.023,31.022
                s31.023-13.917,31.023-31.022c0-5.24,4.248-9.489,9.489-9.489c5.242,0,9.489,4.248,9.489,9.489
                c0,17.106,13.917,31.022,31.023,31.022c17.106,0,31.022-13.917,31.022-31.022c0-5.24,4.247-9.489,9.489-9.489
                s9.489,4.248,9.489,9.489C346.51,313.365,324.08,335.795,296.511,335.795z"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>




            <br>
            
            <h5 class="white--text">
              {{donation_ronin}} 

              <v-icon
                color="white"
                small
                class="ml-2"
                @click="copy_clipboard(),copy_clipboard_stat = ! copy_clipboard_stat"
              >
                mdi-content-copy
              </v-icon>

            </h5>

            

          
          </v-card-text>

          

          <v-card-text class="py-2 text-center">
            {{ new Date().getFullYear() }} — <strong>This site is not affiliated with axie infinity.</strong> Report a bug @ cedandamiel@protonmail.com
          </v-card-text>
        </v-card>
    </v-footer>



    



  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'My Scholar Tracker',
      donation_ronin: 'ronin:04b319864b624fc05c7366771dacdec6335ca96a',
      copy_clipboard_stat:false
    }
  },
  methods:{
    copy_clipboard : function (){
    var input = document.createElement('input');
    input.setAttribute('value', this.donation_ronin);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;

    }

  }
}
</script>


<style scoped>

.theme--dark.v-icon {
    color: #FFFFFF;
}

</style>