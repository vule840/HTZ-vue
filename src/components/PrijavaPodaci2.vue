
<template>
  <div id="PrijavaPodaci">
    <b-col class="mx-auto" lg="8" >
     <!--  <p class="text-center">Odabir opcija</p> -->
    
         

       Prijava Podaci
   


              
    </b-col>
  </div>
</template>

<script>

/*import Prijava from '@/components/Prijava.vue'
import PrijavaLoginUspjeh from '@/components/PrijavaLoginUspjeh.vue'
import PrijavaSvg from '@/assets/prijava_gumb.svg';
import PrijavaKontakt from '@/components/PrijavaKontakt.vue'
import Logo from '@/assets/logo.svg';*/

  
  export default {
    name: 'PrijavaPodaci',
  props: {
    msg: String
  },
  components: {
   
   
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