<template>
  <div id="KreiranjePonude">
     <b-col  lg="12" >
     <!--  <p class="text-center">Odabir opcija</p> -->
           
      <p>Unesite detalje o vašoj ponudi. <strong>Podaci koje ćete unijeti na ovoj stranici nakon verifikacije bit će javno dostupni i vidljivi na stranici www.tjedanodmoravrijedan.hr</strong> </p>

<!-- https://adi518.github.io/vue-stepper-component/#/ -->

      <v-stepper class="py-4 stepper" ref="stepper" :steps="steps" v-model="step"></v-stepper>

     

<!-- Podaci o pos subjk / kontakt podaci -->
       <div v-if="step === 3">
                
                <p>Podaci za objavu</p>
             
              </div>
              <div v-else>
                   
                     <p>Detalji o ponudi</p>
              </div>


<template v-if="step === 1"><!-- Step 1 Content -->

  <div class="registracija_okvir">

      <b-row>
              <b-col class="pr-0" sm="12" lg="12" >
                  
                 <b-form @submit="onSubmit" v-if="show">
                    
                    <!-- 1 -->
                    <b-form-group
                      id="input-group-1"
                      label="Naziv poslovnog subjekta:"
                      label-for="input-1"
                      label-cols-lg="3"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.nazivPoslovnogSubjekta"
                        type="text"
                        required
                        
                      ></b-form-input>
                    </b-form-group>
                    <!-- 2 -->
                    
                <b-form-group
                      id="input-group-1"
                      label="Naziv poslovnog subjekta:"
                      label-for="input-1"
                      label-cols-lg="3"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.nazivPoslovnogSubjekta"
                        type="text"
                        required
                        
                      ></b-form-input>
                    </b-form-group>


                   
                  </b-form>  





              </b-col>
              
                  
            </b-row>


      <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>

                <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                  </b-card> 
  </div>  




</template>
<template v-if="step === 2">

    <div class="registracija_okvir">
     <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                 <b-form @submit="onSubmit" v-if="show">
                    
      <!-- Telefon -->
                    <b-form-group
                      id="input-group-1"
                      label="Telefon:"
                      label-for="input-1"
                      required
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.telefon"
                        type="number"
                        required
                        
                      ></b-form-input>
                    </b-form-group>

<!-- E-mail adresa -->
                    <b-form-group id="input-group-2" label="E-mail adresa:" label-for="input-2">
                      <b-form-input
                        id="input-2"
                        type="email"
                        v-model="form.email"
                        required
                        
                      ></b-form-input>
                    </b-form-group>

      <!-- Web adresa -->

                    <b-form-group class="w-20" id="input-group-3" label="Web adresa:" label-for="input-3">
                      <b-form-input 
                        id="input-3"
                        type="web"
                        v-model="form.web"
                        required
                       
                      ></b-form-input>
               
                    </b-form-group>

  

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                  </b-form>
                  <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                  </b-card>

              </b-col>
          
            </b-row>
  </div>



</template>
<template v-if="step === 3">
  <div class="registracija_okvir">
     <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                 <b-form @submit="onSubmit" v-if="show">
                    
      <!-- Ime i prezime kontakt osobe -->
                    <b-form-group
                      id="input-group-1"
                      label="Ime i prezime kontakt osobe:"
                      label-for="input-1"
                      required
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.imeIprezimeKontakt"
                        type="text"
                        required
                        
                      ></b-form-input>
                    </b-form-group>

<!-- Broj telefona kontakt osobe -->
                    <b-form-group id="input-group-2" label="Broj telefona kontakt osobe:" label-for="input-2">
                      <b-form-input
                        id="input-2"
                        type="number"
                        v-model="form.brojTelefonaKontaktOsobe"
                        required
                        
                      ></b-form-input>
                    </b-form-group>

      <!-- E-mail adresa kontakt osobe -->

                    <b-form-group id="input-group-3" label="E-mail adresa kontakt osobe:" label-for="input-3">
                      <b-form-input 
                        id="input-3"
                        type="web"
                        v-model="form.emailAdresaKontaktOsobe"
                        required
                       
                      ></b-form-input>
               
                    </b-form-group>

  

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                  </b-form>
                  <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                  </b-card>

              </b-col>
          
            </b-row>
  </div>




</template>

<!-- etc' -->

<!-- Stepper Controls -->

<!-- <button type="button" @click="$refs.stepper.previous()">Previous</button>
<button type="button" @click="$refs.stepper.next()">Next</button>
<button type="button" @click="$refs.stepper.reset()">Reset</button> -->



<!-- Footer-->
        <b-row>
              <b-col class="pr-0" sm="6" lg="6" >
                  
                  <b-button @click="$refs.stepper.previous()" block class="plavi-gumb-outline" >
                  Prethodni korak
                </b-button>

              </b-col>
               <b-col class="pl-0" sm="6" lg="6" >
                  
                   
  
              <div v-if="step === 3">
                

                <b-button v-b-modal.modal-multi-12 @click="onSubmit()" block class="plavi-gumb-outline" >
                  Registiraj Se
                </b-button>

              </div>
              <div v-else>
                  <b-button  @click="$refs.stepper.next()" block class="plavi-gumb-outline" >
                  Sljedeći korak
                </b-button>
              </div>


              </b-col>
            </b-row>
               
    </b-col>

   

  </div>
</template>

<script>

/*import Prijava from '@/components/Prijava.vue'
import PrijavaLoginUspjeh from '@/components/PrijavaLoginUspjeh.vue'
import PrijavaSvg from '@/assets/prijava_gumb.svg';
import PrijavaKontakt from '@/components/PrijavaKontakt.vue'
import Logo from '@/assets/logo.svg';*/
 // import InfoSvg from '@/assets/info.svg';
    import { VStepper } from 'vue-stepper-component'
  export default {


    name: 'KreiranjePonude',
  props: {
    msg: String
  },
  components: {
      VStepper
   
  },
    data() {
      return {
        steps: 3, 
        step: undefined,
        form: {
          nazivPoslovnogSubjekta: '',
          postanskiBroj: '',
          mjesto: '',
          adresaPoslovnogSubjekta: '',
          telefon: '',
          email: '',
          web: '',
          imeIprezimeKontakt: '',
          brojTelefonaKontaktOsobe: '',
          emailAdresaKontaktOsobe: ''
          
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