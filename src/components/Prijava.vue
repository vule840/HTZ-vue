
<template>
  <div id="prijava">
    <b-col class="mx-auto" lg="7" >
    <h2>Korisnički podaci</h2>
           <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="E-mail:"
          label-for="input-1"
         
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Unesite svoj e-mail ili korisničko ime"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Šifra:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Unesite svoju šifru"
          ></b-form-input>   
        </b-form-group>
        <p class="text-right"><a class="zaboravili-sifru" href="#">Zaboravili ste šifru?</a></p>
        

        <b-button @click="onSubmit" v-b-modal.modal-multi-2 class="crveni-gumb w-100 " type="submit"  variant="primary">Prijava</b-button>
            
      </b-form>
      <p class="pt-4">Niste registrirani? Da biste kreirali ponudu u akciji “Tjedan odmora vrijedan” prvo se morate  <a v-b-modal.modal-multi-11 href="#"><strong>registrirati ovdje.</strong></a> </p>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
              
    </b-col>
  </div>
</template>

<script>
  export default {
    name: 'Prijava',
  props: {
    msg: String
  },

    data() {
      return {
        form: {
          email: '',
          password: '',
          // food: null,
          // checked: []
        },
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