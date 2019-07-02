<template>



  <div id="header">
    <b-container>
    <b-navbar id="navigacija" toggleable="lg" type="dark" variant="transparent">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav >
            <!--  <router-link to="/">Home</router-link> -->
            <router-link to="/kategorije">Kategorije</router-link>  
            <router-link to="/kako-sudjelovati">Kako sudjelovati?</router-link> 

             <router-link to="/cesta-pitanja">Česta pitanja</router-link> 

               <router-link to="/registirajte-se">Registirajte se</router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">       
                
              
              <!-- Modal -->
            <!--     <b-button v-b-modal.modal-1>Prijava</b-button>

              <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Prijava</p>
              </b-modal>
 -->


         <b-button class="prijava" v-b-modal.modal-multi-1>PRIJAVA</b-button>

  <b-modal id="modal-multi-1" size="lg" title="First Modal" ok-only no-stacking>
    <p class="my-2">First Modal</p>
    <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>

  </b-modal>

  <b-modal  id="modal-multi-2" title="Second Modal" ok-only no-stacking>
    <p class="my-2">Second Modal</p>
    <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
     <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
  </b-modal>

  <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
    <p class="my-1">Third Modal <b-button @click="hide()">Hide Modal</b-button></p>
  </b-modal>


            
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
  </b-container>
     



      
   <!--     <div id="nav">
      <router-link to="/">Home sf</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/test">Test</router-link>
    </div> -->
  
  </div>
</template>

<script>
export default {
  name: 'Header',
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
