<template>



  <div id="footer">
    
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3035 1C9.15423 1 7.08531 1.67773 5.32773 2.96021C3.61033 4.21141 2.31474 5.94223 1.57154 7.97543C1.46106 8.26738 1.60167 8.60103 1.89293 8.71572C2.17414 8.83042 2.49552 8.68444 2.606 8.38207C3.26886 6.56783 4.43388 5.02469 5.97051 3.89861C7.53726 2.75168 9.38523 2.14693 11.3135 2.14693C16.4457 2.14693 20.6237 6.48442 20.6237 11.8124C20.6237 17.1405 16.4457 21.4779 11.3135 21.4779C9.38523 21.4779 7.53726 20.8732 5.97051 19.7263C4.43388 18.6106 3.26886 17.057 2.606 15.2428C2.49552 14.9509 2.17414 14.7945 1.89293 14.9092C1.61171 15.0238 1.46106 15.3575 1.57154 15.6494C2.31474 17.6722 3.61033 19.4135 5.32773 20.6647C7.08531 21.9471 9.15423 22.6249 11.3035 22.6249C17.0483 22.6249 21.7184 17.7765 21.7184 11.8124C21.7184 5.84839 17.0483 1 11.3035 1Z" fill="#00386C" stroke="#00386C"/>
<path d="M13.5252 12.053L11.2287 14.4347C11.0181 14.6541 11.0181 15.0197 11.2287 15.2495C11.339 15.3644 11.4794 15.4166 11.6198 15.4166C11.7602 15.4166 11.9006 15.3644 12.0109 15.2495L15.6311 11.4785L12.0109 7.70749C11.8003 7.48813 11.4493 7.48813 11.2287 7.70749C11.0181 7.92686 11.0181 8.29247 11.2287 8.52228L13.5252 10.9144H1.55155C1.2507 10.9144 1 11.1756 1 11.4889C1 11.8023 1.2507 12.0635 1.55155 12.0635H13.5252V12.053Z" fill="#00386C" stroke="#00386C"/>
</svg>

    <b-container >
        <b-row>
          <!-- 1 -->
          <b-col class="text-left" sm="6" lg="3">
              <h5>KONTAKTI </h5>
          <img class="pb-2" src="https://via.placeholder.com/62x40">
          <p>Hrvatska turistička zajednica <br>
          Iblerov trg 10/IV <br>
          10000 Zagreb</p>
          <p>Tel +385 (0)1 4699 333 <br> 
          Faks +385 (0)1 4557 827</p>
          <p><a href="mailto:info@htz.hr">info@htz.hr</a></p>
          </b-col>
          <!-- 2 -->
          <b-col class="text-left" sm="6" lg="3">
              <img class="pt-5 pb-2 " src="https://via.placeholder.com/167x40">
          
                    <p>Ministarstvo turizma
          Prisavlje 14
          10 000 Zagreb</p>
          <p><a href="tel:+385 (0)1 6169 111"></a> Tel +385 (0)1 6169 111</p>
          <p><a href="mailto:press@mint.hr">press@mint.hr</a></p>


          </b-col>
          <!-- 3 -->
          <b-col class="text-left footer__mreze" sm="6" lg="3">
             <h5>DRUŠTVENE MREŽE</h5
            >
            <p><a href="#">Facebook</a> </p>
            <p><a href="#">YouTube</a> </p>
            <p><a href="#">Twitter</a> </p>
            <p><a href="#">Instagram</a> </p> 

          </b-col>
          <!-- 4 -->
          <b-col class="text-left footer__mreze" sm="6" lg="3">
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
export default {
  name: 'Footer',
  props: {
    msg: String
  }
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
