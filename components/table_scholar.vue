<template>
  <v-data-table
    :headers="headers"
    :items="info"
    :search="search"
    sort-by="calories"
    color="red"
    class="elevation-3 pa-5"
    style="
    
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 30px;
    border: 1px solid rgba(209, 213, 219, 0.3);

    "
  >
    <template v-slot:top>
      <v-toolbar
        flat
        color="transparent"
      >
        <v-toolbar-title>


          <svg width="20px" height="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
          <path style="fill:#F7B239;" d="M322.22,271.422l-20.72,35.897l-45.495,78.799l-45.495-78.799l-20.72-35.897
            c2.545-1.047,5.138-1.998,7.779-2.843c17.104,10.181,37.086,16.021,58.436,16.021c21.35,0,41.32-5.84,58.424-16.021h0.012
            C317.082,269.424,319.675,270.375,322.22,271.422z"/>
          <path style="fill:#666666;" d="M256.005,503.073v0.012H126.323V366.124c0-42.76,26.215-79.394,63.467-94.702l66.215,114.696V503.073
            z"/>
          <path style="fill:#4D4D4D;" d="M207.582,302.24l-17.791-30.818c-37.253,15.308-63.467,51.942-63.467,94.702v136.962h58.874V366.124
            C185.196,341.957,193.574,319.749,207.582,302.24z"/>
          <g>
            <path style="fill:#666666;" d="M385.688,366.124v136.962H256.005v-0.012V386.118l66.215-114.696
              C359.473,286.73,385.688,323.364,385.688,366.124z"/>
            <polygon style="fill:#666666;" points="173.031,91.225 173.031,8.917 340.121,8.917 340.121,92.462 227.923,92.462 173.031,92.462 
                "/>
          </g>
          <polygon style="fill:#4D4D4D;" points="173.031,91.225 173.031,8.917 216.8,8.917 216.8,92.462 187.41,92.462 173.031,92.462 "/>
          <path style="fill:#F7EDCD;" d="M197.569,268.579c-33.565-19.947-56.057-56.581-56.057-98.472c0,0,87.22-20.268,105.169-55.486
            c21.659,21.469,62.385,51.395,123.807,55.486c0,41.891-22.492,78.514-56.045,98.472h-0.012
            c-17.104,10.181-37.074,16.021-58.424,16.021S214.673,278.761,197.569,268.579z"/>
          <path style="fill:#E09B2D;" d="M322.22,271.422l-20.72,35.897c-13.94,6.042-29.319,9.396-45.495,9.396
            c-16.164,0-31.555-3.354-45.495-9.396l-20.72-35.897c2.545-1.047,5.138-1.998,7.779-2.843
            c17.104,10.181,37.086,16.021,58.436,16.021c21.35,0,41.32-5.84,58.424-16.021h0.012
            C317.082,269.424,319.675,270.375,322.22,271.422z"/>
          <g>
            <path style="fill:#B27214;" d="M340.121,92.474c18.84,20.399,30.366,47.66,30.366,77.633
              c-61.422-4.092-102.147-34.017-123.807-55.486c-12.608-12.513-18.757-22.159-18.757-22.159h112.198V92.474z"/>
            <path style="fill:#B27214;" d="M246.68,114.621c-7.089,13.916-25.002,25.501-44.068,34.422c-29.188,13.655-61.1,21.065-61.1,21.065
              c0-30.568,12.001-58.341,31.52-78.882v1.237h54.892c0,0,0.25,0.404,0.761,1.13c0.083,0.119,0.167,0.25,0.274,0.393
              c0.095,0.131,0.202,0.285,0.309,0.44C231.694,97.85,237.462,105.474,246.68,114.621z"/>
          </g>
          <path style="fill:#995C0D;" d="M229.267,94.424c-13.369,15.177-22.801,33.922-26.655,54.618c-29.188,13.655-61.1,21.065-61.1,21.065
            c0-30.568,12.001-58.341,31.52-78.882v1.237h54.892c0,0,0.25,0.404,0.761,1.13c0.083,0.119,0.167,0.25,0.274,0.393
            C229.053,94.115,229.16,94.27,229.267,94.424z"/>
          <path style="fill:#E0D5B8;" d="M285.586,280.723c-9.432,2.522-19.352,3.878-29.581,3.878c-21.35,0-41.332-5.84-58.436-16.021
            c-33.565-19.947-56.057-56.581-56.057-98.472c0,0,31.912-7.41,61.1-21.065c-1.273,6.827-1.939,13.869-1.939,21.065
            c0,41.891,22.492,78.525,56.057,98.472C265.64,273.884,275.333,277.988,285.586,280.723z"/>
          <g>
            <path style="fill:#FFFFFF;" d="M334.461,146.946c-3.515,0-6.845-2.09-8.258-5.544c-3.428-8.372-8.3-16.01-14.479-22.701
              c-3.343-3.619-3.119-9.263,0.502-12.605c3.618-3.343,9.262-3.117,12.605,0.501c7.629,8.261,13.646,17.697,17.882,28.048
              c1.866,4.559-0.316,9.769-4.875,11.635C336.73,146.732,335.586,146.946,334.461,146.946z"/>
            <path style="fill:#FFFFFF;" d="M355.952,482.27c-4.928,0-8.921-3.994-8.921-8.921V366.124c0-9.547-2.047-18.725-6.083-27.279
              c-2.104-4.456-0.195-9.772,4.259-11.874c4.456-2.103,9.772-0.196,11.875,4.261c5.169,10.953,7.79,22.693,7.79,34.893V473.35
              C364.873,478.276,360.879,482.27,355.952,482.27z"/>
            <path style="fill:#FFFFFF;" d="M309.571,75.284c-4.928,0-8.921-3.994-8.921-8.921V36.036c0-4.927,3.993-8.921,8.921-8.921
              s8.921,3.994,8.921,8.921v30.329C318.492,71.291,314.497,75.284,309.571,75.284z"/>
            <circle style="fill:#FFFFFF;" cx="329.85" cy="310.308" r="8.921"/>
          </g>
          <g>
            <path style="fill:#333333;" d="M429.889,0H82.112c-4.928,0-8.921,3.994-8.921,8.921s3.993,8.921,8.921,8.921h82v69.902
              c-20.351,22.681-31.52,51.784-31.52,82.365c0,38.962,18.153,73.757,46.44,96.392c-37.451,18.566-61.635,56.74-61.635,99.626
              v136.955c0,4.927,3.993,8.921,8.921,8.921h259.368c4.928,0,8.921-3.994,8.921-8.921V366.125c0-42.889-24.186-81.064-61.639-99.628
              c28.282-22.633,46.431-57.429,46.431-96.389c0-29.922-10.758-58.559-30.36-81.045V17.841h51.407v60.436l-10.704,42.343
              c-1.207,4.777,1.687,9.627,6.463,10.834c0.734,0.186,1.468,0.274,2.193,0.274c3.988,0,7.619-2.694,8.642-6.737l2.326-9.206
              l2.328,9.207c1.208,4.777,6.066,7.672,10.834,6.462c4.778-1.207,7.669-6.058,6.463-10.834l-10.705-42.343V17.841h11.6
              c4.928,0,8.921-3.994,8.921-8.921S434.817,0,429.889,0z M336.091,101.385c14.297,16.648,22.99,37.15,25.011,58.876
              c-34.243-4.012-65.244-16.736-92.255-37.957c-9.537-7.492-17.01-14.892-22.453-20.92H336.091z M223.287,101.385
              c2.447,3.31,6.454,8.376,12.076,14.382c-15.518,19.799-58.529,35.353-84.258,42.629c2.326-21.059,10.883-40.84,24.773-57.011
              C175.878,101.385,223.287,101.385,223.287,101.385z M256.005,368.28l-49.03-84.929c15.037,6.536,31.616,10.168,49.03,10.168
              c17.414,0,33.995-3.635,49.031-10.172L256.005,368.28z M135.24,366.125c0-35.68,19.926-67.479,50.874-83.225l60.97,105.611v105.647
              H135.24C135.24,494.157,135.24,366.125,135.24,366.125z M376.768,366.125v128.034H264.926V388.512l60.97-105.611
              C356.842,298.645,376.768,330.446,376.768,366.125z M256.005,275.678c-55.902,0-101.785-43.676-105.34-98.694
              c8.525-2.283,23.666-6.692,39.969-13.112c27.352-10.771,46.628-22.72,57.53-35.627c2.8,2.494,5.809,5.04,9.044,7.603
              c21.173,16.767,56.019,37.221,104.041,42.399C357.081,232.671,311.47,275.678,256.005,275.678z M331.199,83.544H181.954V17.841
              h149.246v65.702H331.199z"/>
            <path style="fill:#333333;" d="M209.055,184.008c-4.928,0-8.921,3.994-8.921,8.921v17.011c0,4.927,3.993,8.921,8.921,8.921
              c4.928,0,8.921-3.994,8.921-8.921v-17.011C217.976,188.002,213.983,184.008,209.055,184.008z"/>
            <path style="fill:#333333;" d="M304.1,184.008c-4.928,0-8.921,3.994-8.921,8.921v17.011c0,4.927,3.993,8.921,8.921,8.921
              c4.928,0,8.921-3.994,8.921-8.921v-17.011C313.02,188.002,309.027,184.008,304.1,184.008z"/>
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

          Scholar List
        </v-toolbar-title>


        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>


        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            rounded
            prepend-inner-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="my-5"
        ></v-text-field>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card shaped>
            <v-card-title class="overline d-flex justify-center">
                Are you sure you want to delete this scholar?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">

     

      <svg @click="deleteItem(item)" width="20px" height="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 496 496" style="enable-background:new 0 0 496 496; cursor:pointer;" xml:space="preserve">
      <path style="fill:#08446D;" d="M437.6,120c0-48-12-80-56-80H106.4c-44,0-48,32-48,80H437.6z"/>
      <path style="fill:#00233F;" d="M437.6,120c0-47.2-12-80-56-80H104"/>
      <path style="fill:#19AACC;" d="M65.6,152l56.8,295.2c0,44,36,48.8,80,48.8h90.4c44,0,80-4,80-48.8L430.4,152H65.6z"/>
      <path style="fill:#077E9E;" d="M292.8,496c44,0,80-4,80-48.8L430.4,152H64"/>
      <path style="fill:#E8961F;" d="M336.8,24c-0.8-16-12-24-22.4-24H181.6C170.4,0,160,8,160,24H336.8z"/>
      <path style="fill:#E57510;" d="M336.8,24c0-15.2-12-24-22.4-24H184"/>
      <rect x="64" y="152" style="fill:#E8961F;" width="368" height="56"/>
      <polyline style="fill:#E57510;" points="64,152 432,152 432,208 "/>
      <g>
        <path style="fill:#35C1D8;" d="M192,438.4c0,4.8-7.2,9.6-12,9.6l0,0c-4.8,0-12-4-12-9.6V260c0-4.8,7.2-9.6,12-9.6l0,0
          c4.8,0,12,4,12,9.6V438.4z"/>
        <path style="fill:#35C1D8;" d="M328,438.4c0,4.8-7.2,9.6-12,9.6l0,0c-4.8,0-12-4-12-9.6V260c0-4.8,7.2-9.6,12-9.6l0,0
          c4.8,0,12,4,12,9.6V438.4z"/>
      </g>
      <g>
        <path style="fill:#0B8AAD;" d="M181.6,250.4L181.6,250.4c4.8,0,10.4,4,10.4,9.6v178.4c0,4.8-4.8,9.6-9.6,9.6l0,0"/>
        <path style="fill:#0B8AAD;" d="M317.6,250.4L317.6,250.4c4.8,0,10.4,4,10.4,9.6v178.4c0,4.8-4.8,9.6-9.6,9.6l0,0"/>
      </g>
      <path style="fill:#35C1D8;" d="M259.2,438.4c0,4.8-7.2,9.6-12,9.6l0,0c-4.8,0-12-4-12-9.6V260c0-4.8,7.2-9.6,12-9.6l0,0
        c4.8,0,12,4,12,9.6V438.4z"/>
      <path style="fill:#0B8AAD;" d="M248.8,250.4L248.8,250.4c4.8,0,10.4,4,10.4,9.6v178.4c0,4.8-4.8,9.6-9.6,9.6l0,0"/>
      <path style="fill:#177199;" d="M102.4,92.8c-0.8,6.4-6.4,12-13.6,11.2l0,0c-6.4-0.8-12-6.4-11.2-13.6L80,67.2
        c0.8-6.4,6.4-12,13.6-11.2l0,0c6.4,0.8,12,6.4,11.2,13.6L102.4,92.8z"/>
      <path style="fill:#66CDDD;" d="M149.6,417.6c0.8,4.8-2.4,10.4-7.2,11.2l0,0c-4.8,0.8-10.4-2.4-11.2-7.2L97.6,255.2
        c-0.8-4.8,2.4-10.4,7.2-11.2l0,0c4.8-0.8,10.4,2.4,11.2,7.2L149.6,417.6z"/>
      <path style="fill:#FFBD66;" d="M96,184c0,4.8-3.2,8-8,8l0,0c-4.8,0-8-3.2-8-8v-16c0-4.8,3.2-8,8-8l0,0c4.8,0,8,3.2,8,8V184z"/>
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
    </template>
    <template v-slot:no-data>
    <div class="text-center">
        You dont have scholars try adding one
    </div>
    </template>
  </v-data-table>
</template>



<script>
  import { mapState,mapMutations } from 'vuex'
  export default {
    data: () => ({
      search: '',
      dialogDelete:false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Last Claimed', value: 'last_claimed_item_at' },
        { text: 'Average SLP (Per Day)', value: 'average' },
        { text: 'Next Claim', value: 'claimbleon' },
        { text: 'Unclaimed', value: 'total' },
        { text: 'Scholar Share', value: 'share' },
        { text: 'Scholar Percent', value: 'sharepercent' },
        { text: 'Manager Share', value: 'managershare' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1
    }),

    computed: {
      
      ...mapState(['info','scholar'])
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },


    methods: {
      ...mapMutations(['delete_scholar']),
    
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.info.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.info.splice(this.editedIndex, 1)
        this.scholar.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>


<style>


.modifiedCard{
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(13, 17, 23, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.theme--dark.v-data-table {
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: rgba(36, 39, 53, 1);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}




</style>