
<template>
  <div id="PrijavaPodaci">
  
    <b-col class="mx-auto" lg="12" >
     <!--  <p class="text-center">Odabir opcija</p> -->
      <p class="text-center">Uredi kontakt podatke</p>  
              
    </b-col>
     <b-col lg="6" >
     <!--  <p class="text-center">Odabir opcija</p> -->
       <b-form @submit="onSubmit" @reset="onReset" v-if="show">



       <b-form-group class="w-80" id="input-group-1" label="Ime i prezime osobe za kontakt" label-for="input-1">
        
       
       <div class="input-group-prepend">
            <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Nataša Sikirić"
          ></b-form-input>

            <div class=""><PlavaOlovkaSvg /></div>
          </div>
      </b-form-group>



      <b-form-group id="input-group-2" label="Funkcija" label-for="input-2">

        
        <div class="input-group-prepend">
            <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="tajnica"
        ></b-form-input>

            <div class=""><PlavaOlovkaSvg /></div>
          </div>
        

      </b-form-group>

  

      <b-form-group id="input-group-3" label="Telefon" label-for="input-3">
        <div class="input-group-prepend">
            <b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="098/543 546"
        ></b-form-input>

            <div class=""><PlavaOlovkaSvg /></div>
          </div>
        

      </b-form-group>



       <b-form-group
        id="input-group-4"
        label="E-mail"
        label-for="input-4">

        

         <div class="input-group-prepend">
            <b-form-input
          id="input-4"
          v-model="form.email"
          type="email"
          required
          placeholder="natasa.sikiric@adriacamping.hr"
        ></b-form-input>

            <div class=""><PlavaOlovkaSvg /></div>
          </div>
        
      </b-form-group>
      

     

      <b-button type="submit" variant="primary">Submit</b-button>
      
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
              
    </b-col>

              
   
  </div>
</template>

<script>

import PlavaOlovkaSvg from "@/assets/plava_olovka.svg";

/*import Prijava from '@/components/Prijava.vue'
import PrijavaLoginUspjeh from '@/components/PrijavaLoginUspjeh.vue'
import PrijavaSvg from '@/assets/prijava_gumb.svg';
import PrijavaKontakt from '@/components/PrijavaKontakt.vue'
import Logo from '@/assets/logo.svg';*/

  
  export default {
    name: 'PrijavaKontaktPodaci',
  props: {
    msg: String
  },
  components: {
   PlavaOlovkaSvg
   
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