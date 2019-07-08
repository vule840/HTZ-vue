
<template>
  <div id="PrijavaLoginUspjeh">
     <b-col class="mx-auto" lg="8" >
      <p class="text-center">Odabir opcija</p>
    
         <b-row>
                <b-col class="text-center" lg="4" v-b-modal.modal-multi-3>
          <PonudeOdabir/> <br>
          <hr>
          <h5>PONUDE</h5>
        </b-col>

        <b-col class="text-center" lg="4" v-b-modal.modal-multi-4>
           <PodaciOdabir/><br>
          <hr>
          <h5>PODACI O SUBJEKTU</h5>
          
        </b-col>

        <b-col class="text-center" lg="4" v-b-modal.modal-multi-5>

           <KontaktOdabir/><br>
          <hr>
           <h5>KONTAKT PODACI</h5>
          
        </b-col>

         </b-row>
    

        <!-- <b-button v-b-modal.modal-multi-3 class="plavi-gumb w-100 mb-3">PONUDE</b-button><br>
        <b-button v-b-modal.modal-multi-4 class="plavi-gumb w-100 mb-3">PODACI O SUBJEKTU</b-button><br>
        <b-button v-b-modal.modal-multi-5 size="sm" class="plavi-gumb w-100 mb-3">KONTAKT PODACI</b-button> -->
       <!--  <b-button type="reset" variant="danger">Reset</b-button> -->
     
      <!-- <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button> -->


              
    </b-col>
  </div>
</template>

<script>
import Prijava from '@/components/Prijava.vue'
import PrijavaLoginUspjeh from '@/components/PrijavaLoginUspjeh.vue'
import PrijavaSvg from '@/assets/prijava_gumb.svg';
import PrijavaKontakt from '@/components/PrijavaKontakt.vue'
import Logo from '@/assets/logo.svg';

import PonudeOdabir from '@/assets/Ponude_odabir.svg';
import PodaciOdabir from '@/assets/Podaci_odabir.svg';
import KontaktOdabir from '@/assets/Kontakt_odabir.svg';
  
  export default {
    name: 'PrijavaLoginUspjeh',
  props: {
    msg: String
  },
  components: {
    Prijava,
    PrijavaSvg,
    Logo,
    PrijavaLoginUspjeh,
    PrijavaKontakt,
    PonudeOdabir,
    PodaciOdabir,
    KontaktOdabir
  },

    data() {
      return {
        form: {
          email: '',
          name: '',
          // food: null,
          // checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>