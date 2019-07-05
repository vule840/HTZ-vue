
<template>
  <div id="PrijavaKontaktIzmjena">
   <p class="text-center py-4"><InfoSvg/> Vaši kontakt podaci uspješno su izmijenjeni! </p>

  </div>
</template>

<script>

/*import Prijava from '@/components/Prijava.vue'
import PrijavaLoginUspjeh from '@/components/PrijavaLoginUspjeh.vue'
import PrijavaSvg from '@/assets/prijava_gumb.svg';
import PrijavaKontakt from '@/components/PrijavaKontakt.vue'
import Logo from '@/assets/logo.svg';*/

  import InfoSvg from '@/assets/info.svg';
  export default {


    name: 'PrijavaKontaktIzmjena',
  props: {
    msg: String
  },
  components: {
    InfoSvg
  }


  }
</script>