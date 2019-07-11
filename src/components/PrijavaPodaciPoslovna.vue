<template>
  <div id="PrijavaPodaciPoslovna">
    <h5 class="text-center">Dodavanje poslovne jedinice</h5>
    <b-col lg="6">
      <!--  <p class="text-center">Odabir opcija</p> -->

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <!-- <div role="group" class="input-group mb-2 mr-sm-2 mb-sm-0">
        
          <div class="input-group-prepend">
        
          <input id="inline-form-input-username" type="text" placeholder="Username" class="form-control">
        
          <div class="input-group-text">@</div></div>
        
        </div>   -->

        <b-form-group 
          id="input-group-1"
          label="Naziv poslovne jedinice"
          label-for="input-1"
          description=""
          placeholder="Hotel Minotaur"
        >
          <div class="input-group-prepend">
            <b-form-input
              id="input-1"
              type="text"
              required
              placeholder="Adria camping"
            ></b-form-input>

            <!-- <div class=""><PlavaOlovkaSvg /></div> -->
          </div>
        </b-form-group>

        <!-- OIB -->
        <b-form-group
          id="input-group-2"
          label="Adresa poslovne jedinice"
          label-for="input-2"
        >
          <div class="input-group-prepend">
            <b-form-input
              id="input-2"
              type="text"
              required
              placeholder="Južna obala 3"
            ></b-form-input>

            <!-- <div class=""><PlavaOlovkaSvg /></div> -->
          </div>
        </b-form-group>
        <!-- Adresa -->

        <b-form-group id="input-group-3" label="Mjesto" label-for="input-3">
          <div class="input-group-prepend">
            <b-form-input
              id="input-3"
              type="text"
              required
              placeholder="Lošinj"
            ></b-form-input>

            <!-- <div class=""><PlavaOlovkaSvg /></div> -->
          </div>
        </b-form-group>

        <!-- Mjesto -->

        <b-form-group id="input-group-4" label="Telefon" label-for="input-4">
          <div class="input-group-prepend">
            <b-form-input
              id="input-4"
              type="number"
              required
              placeholder="052 200 351"
            ></b-form-input>

            <!-- <div class=""><PlavaOlovkaSvg /></div> -->
          </div>
        </b-form-group>

        <!-- Email -->

        <b-form-group id="input-group-5" label="E-mail" label-for="input-5">
        

          <div class="input-group-prepend">
              <b-form-input
            id="input-5"
            type="email"
            required
            placeholder="info@minotaur.hr"
          ></b-form-input>

            <!-- <div class=""><PlavaOlovkaSvg /></div> -->
          </div>

        </b-form-group>

        <!-- Web adresa -->

        <b-form-group id="input-group-7" label="Web adresa" label-for="input-7">
          <div class="input-group-prepend">
               <b-form-input
            id="input-7"
            type="email"
            required
            placeholder="www.hotel-minotaur.hr"
          ></b-form-input>

            <!-- <div class=""><PlavaOlovkaSvg /></div> -->
          </div>
         
        </b-form-group>

        <!-- Telefon -->

        <!--  <b-form-group id="input-group-5" label="Telefon" label-for="input-5">
         <b-form-input
           id="input-5"
           type="number"
           required
           placeholder="052 200 351"
         ></b-form-input>
                </b-form-group>
        
               E-mail
        
        <b-form-group id="input-group-6" label="E-mail" label-for="input-6">
         <b-form-input
           id="input-6"
           type="email"
           required
           placeholder="info@adriacamping.hr"
         ></b-form-input>
                </b-form-group>
            
            Web adresa
        
        <b-form-group id="input-group-7" label="Web adresa" label-for="input-7">
         <b-form-input
           id="input-7"
           type="email"
           required
           placeholder="www.adriacamping.hr"
         ></b-form-input>
                </b-form-group> -->

        <!--  <b-button  v-b-modal.modal-multi-2 class="crveni-gumb w-100" type="submit" variant="primary">Prijava</b-button> -->
      </b-form>
    </b-col>

    <!-- <hr class="my-4"> 
    
    <b-col  lg="6" >
      <h5>Poslovne jedinice</h5>
      <p>Nema unešenih poslovnih jedinica.</p>
      <button class="btn plavi-gumb-outline w-100 mb-5">Dodaj poslovnu jedinicu</button>
    </b-col> -->
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
  name: "PrijavaPodaciPoslovna",
  props: {
    msg: String
  },
  components: {
    PlavaOlovkaSvg
  },

  data() {
    return {
      form: {
        email: "",
        name: "",
        oib: ""
        // food: null,
        // checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>