<template>
    <div>
    
        <v-card
        
        style="
    
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 30px;
        border: 1px solid rgba(209, 213, 219, 0.3);

        "

        >



        <form>

            <v-card-subtitle>

                <v-text-field
                    label="Scholar share percent"
                    v-model="share"
                    rounded
                    filled
                    style="max-width:200px"
                    placeholder="50"
                    hide-details
                    type="number"
                    @input="$v.share.$touch()"
                    @blur="$v.share.$touch()"
                    :error-messages="percentErrors"
                    max="100"
                ></v-text-field>

            </v-card-subtitle>

            <v-row no-gutters class="px-5">

                <v-col
                cols="12"
                md="6"
                >
                    <v-text-field
                    class="pa-2"
                    v-model="Ronin"
                    :error-messages="RoninChecker"
                    label="Ronin Address"
                    required
                    prepend-inner-icon="mdi-wallet-outline"
                    @input="$v.Ronin.$touch()"
                    @blur="$v.Ronin.$touch()"
                    rounded
                    persistent-hint
                    hint='Make sure your Ronin address starts with "ronin:"'
                    filled
                    ></v-text-field>

                </v-col>

                <v-col
                cols="12"
                md="6"
                >
                    <v-text-field
                    class="pa-2"
                    v-model="name"
                    :error-messages="nameErrors"
                    :counter="10"
                    label="Name"
                    required
                    prepend-inner-icon="mdi-account-outline"
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    rounded
                    filled
                    ></v-text-field>
                </v-col>
            </v-row>
        <v-card-actions>
        <v-container>
            <v-btn
            class="mr-4 mt-2"
            @click="submit"
            rounded
            style="text-transform: none;"
            :loading="load"
            color="primary"
            depressed
            >
                <template v-slot:loader>
                        Checking Info
                </template>


                <svg width="20px" height="20px" viewBox="0 -5 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Uploaded to SVGRepo https://www.svgrepo.com -->
                    <title>graduation-cap</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Vivid-Icons" transform="translate(-273.000000, -176.000000)">
                            <g id="Icons" transform="translate(37.000000, 169.000000)">
                                <g id="graduation-cap" transform="translate(234.000000, 0.000000)">
                                    <g transform="translate(2.000000, 7.000000)" id="Shape">
                                        <path d="M22,34 L9,26 L9,15 L35,15 L35,26 L22,34 Z M4,27 C2.54056274,27.0027654 1.29191905,25.9525119 1.04461268,24.514178 C0.797306304,23.0758441 1.62345252,21.6688523 3,21.184 L3,13 L5,14 L5,21.184 C6.37654748,21.6688523 7.2026937,23.0758441 6.95538732,24.514178 C6.70808095,25.9525119 5.45943726,27.0027654 4,27 Z" fill="#0C0058"></path>
                                        <polygon fill="#FF6E6E" points="22 0.012 43.986 12.512 22 25.013 0.014 12.513"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

                Add Scholar
            </v-btn>
            <v-btn
            rounded
            depressed
            @click="clear"
            class="mr-4 mt-2 white--text"
            color="purple darken-2"
            style="text-transform: none;"
            >
            <svg width="20px" height="20px" class="mr-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 457.35 457.35" style="enable-background:new 0 0 457.35 457.35;" xml:space="preserve">
<g id="XMLID_38_">
	<g>
		<path style="fill:#A7B6C4;" d="M232.009,364.53l-78.65,78.65c-3.34,3.34-7.79,5.19-12.53,5.19c-4.73,0-9.18-1.85-12.52-5.19
			L14.179,329.05c-6.91-6.91-6.91-18.15,0-25.06l78.64-78.65L232.009,364.53z"/>
		
			<rect x="354.914" y="-12.817" transform="matrix(0.7071 -0.7071 0.7071 0.7071 39.7293 284.3651)" style="fill:#F97946;" width="16.419" height="214.084"/>
		<polygon style="fill:#F97946;" points="256.089,352.64 244.469,364.26 93.089,212.88 104.709,201.27 		"/>
		
			<rect x="152.752" y="81.448" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -54.5357 245.3193)" style="fill:#4489D3;" width="232.214" height="214.084"/>
		<path d="M457.349,164.11l-212.88,212.88l-6.09-6.1l-78.65,78.65c-5.21,5.21-12.05,7.81-18.9,7.81c-6.84,0-13.68-2.6-18.89-7.81
			L7.809,335.41c-10.41-10.42-10.41-27.37,0-37.78l78.65-78.65l-6.1-6.1L293.239,0L457.349,164.11z M433.009,175.72l11.61-11.61
			L293.239,12.73l-11.61,11.61L433.009,175.72z M262.449,346.28l164.2-164.2L275.269,30.7l-164.2,164.2L262.449,346.28z
			 M244.469,364.26l11.62-11.62l-151.38-151.37l-11.62,11.61L244.469,364.26z M153.359,443.18l78.65-78.65L92.819,225.34
			l-78.64,78.65c-6.91,6.91-6.91,18.15,0,25.06l114.13,114.13c3.34,3.34,7.79,5.19,12.52,5.19
			C145.569,448.37,150.019,446.52,153.359,443.18z"/>
	</g>
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

            Clear
            </v-btn>

            <v-btn
            rounded
            depressed
            class="mr-4 mt-2 white--text"
            @click="export_csv('slpscholartracker.csv', scholar)"
            color="red"
            style="text-transform: none;"
            :disabled="scholar.length == 0"
            >
<svg width="20px" height="20px" class="mr-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 498.284 498.284" style="enable-background:new 0 0 498.284 498.284;" xml:space="preserve">
<g>
	<polygon style="fill:#46F8FF;" points="386.568,133.358 386.568,21.642 328.284,21.642 328.284,229.142 328.284,269.142 
		328.284,476.642 498.284,476.642 498.284,133.358 	"/>
	<rect x="158.284" y="21.642" style="fill:#9BFBFF;" width="170" height="207.5"/>
	<rect x="158.284" y="269.142" style="fill:#9BFBFF;" width="170" height="207.5"/>
	<polygon style="fill:#00D7DF;" points="498.284,133.358 386.568,21.642 386.568,133.358 	"/>
	<polygon style="fill:#2488FF;" points="328.284,269.142 328.284,229.142 76.568,229.142 102.426,203.284 74.142,175 0,249.142 
		74.142,323.284 102.426,295 76.568,269.142 	"/>
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

            Export CSV
            </v-btn>


            <v-btn
            color="blue-grey darken-4"
            depressed
            dark
            class="mt-2 mr-4"
            rounded
            @click.stop=" sheet = !sheet "
            style="text-transform: none;"
            :loading="importloader"
            >
                <template v-slot:loader>
                        Importing Data..
                </template>
            <svg width="20px" height="20px" class="mr-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 470 470" style="enable-background:new 0 0 470 470;" xml:space="preserve">
<g>
	<polygon style="fill:#46F8FF;" points="358.284,119.216 358.284,7.5 300,7.5 300,206.716 328.284,235 300,263.284 300,462.5 
		470,462.5 470,119.216 	"/>
	<polygon style="fill:#9BFBFF;" points="254.142,309.142 225.858,280.858 251.716,255 130,255 130,462.5 300,462.5 300,263.284 	"/>
	<polygon style="fill:#9BFBFF;" points="225.858,189.142 254.142,160.858 300,206.716 300,7.5 130,7.5 130,215 251.716,215 	"/>
	<polygon style="fill:#00D7DF;" points="470,119.216 358.284,7.5 358.284,119.216 	"/>
	<polygon style="fill:#2488FF;" points="225.858,280.858 254.142,309.142 328.284,235 254.142,160.858 225.858,189.142 251.716,215 
		0,215 0,255 251.716,255 	"/>
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

            Import CSV
            </v-btn>


        <v-btn
        :loading="reload"
        @click="reload_data()"
        rounded
        class="mt-2 white--text"
        color="teal"
        >
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg width="20px" height="20px" class="mr-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 496.166 496.166" style="enable-background:new 0 0 496.166 496.166;" xml:space="preserve">
<path style="fill:#32BEA6;" d="M0.005,248.087C0.005,111.063,111.073,0,248.079,0c137.014,0,248.082,111.062,248.082,248.087
	c0,137.002-111.068,248.079-248.082,248.079C111.073,496.166,0.005,385.089,0.005,248.087z"/>
<path style="fill:#F7F7F7;" d="M400.813,169.581c-2.502-4.865-14.695-16.012-35.262-5.891
	c-20.564,10.122-10.625,32.351-10.625,32.351c7.666,15.722,11.98,33.371,11.98,52.046c0,65.622-53.201,118.824-118.828,118.824
	c-65.619,0-118.82-53.202-118.82-118.824c0-61.422,46.6-111.946,106.357-118.173v30.793c0,0-0.084,1.836,1.828,2.999
	c1.906,1.163,3.818,0,3.818,0l98.576-58.083c0,0,2.211-1.162,2.211-3.436c0-1.873-2.211-3.205-2.211-3.205l-98.248-57.754
	c0,0-2.24-1.605-4.23-0.826c-1.988,0.773-1.744,3.481-1.744,3.481v32.993c-88.998,6.392-159.23,80.563-159.23,171.21
	c0,94.824,76.873,171.696,171.693,171.696c94.828,0,171.707-76.872,171.707-171.696
	C419.786,219.788,412.933,193.106,400.813,169.581z"/>
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

            Refresh Table
        </v-btn>
            

        </v-container>
        </v-card-actions>
        </form>
        </v-card>

        <Scholars class="mt-5"/>


        <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="deep-purple accent-4"
        right
        rounded
        bottom
        >
            {{failed}}

            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>

        <Csvimport :dialog="dialog" />




    <v-bottom-sheet
      v-model="sheet"
      inset
    >
      <v-sheet
        class="text-center modifiedCard"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="my-3">
          
          
            <v-container class="pa-5">
                <v-file-input
                    show-size
                    label="Import CSV"
                    @change="import_csv"
                    width="20px"
                    accept=".csv"
                    class="limitWidth"
                    rounded
                    filled
                ></v-file-input>
            </v-container>


        </div>
      </v-sheet>
    </v-bottom-sheet>
    </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import { validationMixin } from 'vuelidate'
  import { required,helpers,maxLength } from 'vuelidate/lib/validators'
  import Scholars from '~/components/table_scholar.vue'
  import _ from 'lodash';
  import Papa from 'papaparse'
  const RoninValidatator = (value) => !helpers.req(value) || value.indexOf('ronin:') >= 0 && value.length == 46
  import Csvimport from '~/components/fileupload.vue'
  export default {

    mixins: [validationMixin],
    components:{
        Scholars,
        Csvimport
    },

    validations: {
        Ronin: { 
            required,
            RoninValidatator
        },

        name: { 
            required, 
            maxLength: maxLength(10) 
        },

        share:{
            required
        }
    },

    data: () => ({
      share: 30,
      Ronin: '',
      name: '',
      snackbar: false,
      load:false,
      failed:'',
      dialog:false,
      sheet:false,
      import:false,
      importData:[],
      importloader:false,
      reload:false,
    }),

    computed: {
      ...mapState(['scholar','info']),
      RoninChecker () {
        const errors = []
        if (!this.$v.Ronin.$dirty) return errors
        !this.$v.Ronin.required && errors.push('Ronin Wallet Address is required')
        !this.$v.Ronin.RoninValidatator && errors.push('Invalid Wallet Address')
        return errors
      },

      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },

      percentErrors () {
        const errors = []
        if (!this.$v.share.$dirty) return errors
        !this.$v.share.required && errors.push('Share is required')
        return errors
      },

    },

    methods: {
      export_csv : function (filename,arrayOfJson){
        if(this.scholar.length != 0){
            const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
            const header = Object.keys(arrayOfJson[0])
            let csv = arrayOfJson.map(row => header.map(fieldName => 
            JSON.stringify(row[fieldName], replacer)).join(','))
            csv.unshift(header.join(','))
            csv = csv.join('\r\n')

            // Create link and download
            var link = document.createElement('a');
            link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
      },

      import_csv (file) {
        if(file != null){
            let that = this
            this.import = false
            Papa.parse(file, { 
                header:true,
                complete: function(results) {
                    if(file.type == "application/vnd.ms-excel" || file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
                        let convert_to_object = that.toObject(results.data)
                        let validKey = true;

                        for (let Keys of _.entries(convert_to_object)) {
                            if(
                                !_.some(Keys,'name') ||
                                !_.some(Keys,'wallet') ||
                                !_.some(Keys,'percent')
                            )
                            {
                                validKey = false
                                break;
                            }
                        }

                        if(validKey){
                            that.import = true
                            that.importData = results.data
                        }else{
                            //Invalid Key Format
                            that.failed = "CSV format not met!"
                            that.snackbar = true
                        }
                    }else{
                        //File Type Error
                        that.failed = "Invalid File Type"
                        that.snackbar = true
                    }
                    

                    
                }
            });

        }

      },

      async import_load (){
        this.importloader = true;
        for (const info of this.importData) {
            const checks = this.scholar.findIndex( s => s.wallet == info.wallet)
            if(checks == -1){
                
                const check_wallet_if_exist_then_save = await this.WalletInfo(info.wallet)
                    if(typeof check_wallet_if_exist_then_save == "boolean"){
                        //Cannot Find Wallet
                        this.snackbar = true
                        this.failed = "Ronin wallet does not exist"
                    }else if(check_wallet_if_exist_then_save == 204){
                        //Failed Fetch Error
                        this.failed = "Failed to load please try again"
                        this.snackbar = true
                    }else{
                        //Save Wallet
                        this.addScholar([info.wallet,info.name,info.percent]);
                        this.addInfo([check_wallet_if_exist_then_save,info.percent])
                        this.merge_and_manipulate()
                    }
            }else{
                this.failed = "Ronin wallet already exist"
                this.snackbar = true
            }
        }

        this.importloader = false;

      },


      async reload_data (){
        this.reload = true;
        let Temp = this.scholar
        this.resetState();
        for (const info of Temp) {
                
                const check_wallet_if_exist_then_save = await this.WalletInfo(info.wallet)
                    if(typeof check_wallet_if_exist_then_save == "boolean"){
                        //Cannot Find Wallet
                        this.snackbar = true
                        this.failed = "Ronin wallet does not exist"
                    }else if(check_wallet_if_exist_then_save == 204){
                        //Failed Fetch Error
                        this.failed = "Failed to load please try again"
                        this.snackbar = true
                    }else{
                        this.addScholar([info.wallet,info.name,info.percent]);
                        this.addInfo([check_wallet_if_exist_then_save,info.percent])
                        this.merge_and_manipulate()
                    }
            
        }

        this.reload = false;

      },


      toObject : function (arr){
          var rv = {};
            for (var i = 0; i < arr.length; ++i)
                rv[i] = arr[i];
            return rv;
      },


      async WalletInfo (address){
        this.load = true
        try{
            const walletaddress = address.replace("ronin:", "0x");
            const send = await this.$axios.get('https://game-api.skymavis.com/game-api/clients/'+`${walletaddress}`+'/items/1');

            const recieve = await send.data;

            this.load = false
            console.log(recieve);
            return recieve.blockchain_related.signature == null ? false : recieve;
        }catch{
            return 204;
        }
      },
      ...mapMutations(['addScholar','addInfo','merge_and_manipulate','import_csv_to_json','resetState']),
      async submit () {
        this.$v.$touch()
        if(!this.$v.$invalid){
            const checks = this.scholar.findIndex( s => s.wallet == this.Ronin)
            if(checks == -1){
                
                const check_wallet_if_exist_then_save = await this.WalletInfo(this.Ronin)
                    if(typeof check_wallet_if_exist_then_save == "boolean"){
                        //Cannot Find Wallet
                        this.snackbar = true
                        this.failed = "Ronin wallet does not exist"
                    }else if(check_wallet_if_exist_then_save == 204){
                        //Failed Fetch Error
                        this.failed = "Failed to load please try again"
                        this.snackbar = true
                    }else{
                        //Save Wallet
                        this.addScholar([this.Ronin,this.name,this.share]);
                        this.addInfo([check_wallet_if_exist_then_save,this.share])
                        this.merge_and_manipulate()
                    }
            }else{
                this.failed = "Ronin wallet already exist"
                this.snackbar = true
            }
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.Ronin = ''
      },
    },
    watch:{
        import : function (v){
            if(v){
                this.import_load()
            }
        }
    }
  }
</script>



<style scoped>
    .modifiedCard{
        border-radius: 20px;

        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
</style>