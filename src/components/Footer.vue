<template>



  <div id="footer">
    


    <b-container >
        <b-row>
          <!-- 1 -->
          <b-col class="text-left pb-4" sm="6" lg="3">
              <h5>KONTAKTI </h5>
          <img width="62" class="pb-2" src="@/assets/htz_logo.png">
          <p>Hrvatska turistička zajednica <br>
          Iblerov trg 10/IV <br>
          10000 Zagreb</p>
          <p>Tel +385 (0)1 4699 333 <br> 
          Faks +385 (0)1 4557 827</p>
          <p><a href="mailto:info@htz.hr">info@htz.hr</a></p>
          </b-col>
          <!-- 2 -->
          <b-col class="text-left pb-4" sm="6" lg="3">
              <img width="167" class="pt-5 pb-2 " src="@/assets/hrv_logo.png">
          
                    <p>Ministarstvo turizma
          Prisavlje 14
          10 000 Zagreb</p>
          <p><a href="tel:+385 (0)1 6169 111"></a> Tel +385 (0)1 6169 111</p>
          <p><a href="mailto:press@mint.hr">press@mint.hr</a></p>


          </b-col>
          <!-- 3 -->
          <b-col class="text-left footer__mreze pb-4" sm="6" lg="3">
             <h5>DRUŠTVENE MREŽE</h5
            >
            <p><a href="#"><FbLogoSvg/> Facebook</a> </p>
            <p><a href="#"><YtLogoSvg/> YouTube</a> </p>
            <p><a href="#"><TwLogoSvg/> Twitter</a> </p>
            <p><a href="#"><InstLogoSvg/> Instagram</a> </p> 

          </b-col>
          <!-- 4 -->
          <b-col class="text-left footer__mreze pb-4" sm="6" lg="3">
              <h5>PRAVNE INFORMACIJE</h5>
          <p><a href="#">Politika privatnosti</a></p>
          <p><a href="#">Politika kolačića</a> </p>
          <p><a href="#">Pravila i uvjeti sudjelovanja</a></p>

          </b-col>
        </b-row>
      </b-container>
  
  </div>
</template>

<script>
import FbLogoSvg from '@/assets/fb_logo.svg';
import InstLogoSvg from '@/assets/ins_logo.svg';
import TwLogoSvg from '@/assets/tw_logo.svg';
import YtLogoSvg from '@/assets/yt_logo.svg';

export default {
  name: 'Footer',
  components: {
    FbLogoSvg,
    InstLogoSvg,
    TwLogoSvg,
    YtLogoSvg
  },
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
