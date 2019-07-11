<template>
  <div class>
    <b-container id="adminLogin" class="content" v-if="login == false">
      <h2>Prijava</h2>
      <b-form>
        <b-form-group label="Email address:" label-for="input-1">
          <b-form-input type="email" required placeholder="Enter email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input type="password" id="input-2" required placeholder="Enter your password"></b-form-input>
        </b-form-group>

        <b-button class="crveni-gumb w-100" type="submit" variant="primary">Prijava</b-button>
      </b-form>
    </b-container>

    <div class="adminMain" v-if="login == true">
      <adminHeader></adminHeader>
      <b-card no-body>
        <b-tabs card>
          <b-tab no-body title="Ceka na odobrenje">
            <adminWaiting></adminWaiting>
          </b-tab>

          <b-tab no-body title="Odobrene prijave">
            <adminOffers></adminOffers>
          </b-tab>

          <b-tab no-body title="Prijave na doradi">
            <adminDorada></adminDorada>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <div class="preview" v-if="offerPreview == true">
      <div class="closeBtn" @click="offerPreview = false">
        <img src="@/assets/icon-close.png" />
      </div>
      <div class="contentHolder">
        <div class="grid-container orderInfo">
          <div class="grid-item table1">
            <span>POSLOVNI SUBJEKT</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table2">
            <span>MJESTO</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table3">
            <span>TELEFON</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table4">
            <span>E-MAIL</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table5">
            <span>WEB ADRESA</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table6">
            <span>DATOTEKA</span>
            <p>Adria Camping</p>
          </div>
        </div>
        <div class="grid-container1 orderInfo">
          <div class="grid-item table1">
            <span>GLAVNA KATEGORIJA</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table2">
            <span>PODKATEGORIJA</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table3">
            <span>OPIS PONUDE</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table4">
            <span>NAPOMENA</span>
            <p>Adria Camping</p>
          </div>
        </div>
        <div class="mainImage">
          <span>GLAVNA FOTOGRAFIJA</span>
          <img src="@/assets/slider1-image.jpg">
        </div>
        <div class="moreImage">
          <span>GLAVNA FOTOGRAFIJA</span>
          <img src="@/assets/slider1-image.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'*/
import adminHeader from "@/components/AdminHeader.vue";
import adminWaiting from "@/components/AdminWaiting.vue";
import adminOffers from "@/components/AdminOffers.vue";
import adminDorada from "@/components/AdminDorada.vue";
export default {
  name: "admin",
  components: {
    adminHeader,
    adminWaiting,
    adminOffers,
    adminDorada
  },
  data() {
    return {
      login: false,
      offerPreview: true
    };
  },
  methods: {}
};
</script>

<style scoped>
/* --- START PREVIEW --- */

.mainImage{
  width: 100%;
  text-align: left;
}

.mainImage span {
  font-size: 12px;
  font-weight: bold;
  color: #00386C;
  padding: 0 0 0 30px;
  margin-bottom: 10px;
  display: block;
}

.mainImage img{
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
	border: 1px solid rgba(0,0,0,0.2);
  background-color: rgba(0,0,0,0.2);
	grid-gap: 1px;
	justify-self: center;
	height: auto;
	margin: 30px 0;
}

.grid-container1 {
  display: grid;
  grid-template-columns: auto auto;
	border: 1px solid rgba(0,0,0,0.2);
  background-color: rgba(0,0,0,0.2);
	grid-gap: 1px;
	justify-self: center;
	height: auto;
	margin: 30px 0;
}

.grid-item {
  background-color: rgba(255, 255, 255, 1);
  padding: 15px 30px;
  text-align: left;
}

.grid-item span {
  font-size: 12px;
  font-weight: bold;
  color: #00386C;
}

.grid-item p {
  color: #494949;
}

.contentHolder {
  width: 80%;
  margin: auto;
  height: 300px;
}

.closeBtn {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
}

.closeBtn img {
  width: 100%;
}

.preview {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  background-color: white;
  position: fixed;
  top: 0px;
  z-index: 99999;
}

/* --- END PREVIEW --- */

#adminLogin {
  width: 40%;
  min-width: 500px;
}

.adminMain {
  background-color: #f8f8f8;
}

.card-header {
  margin: -54px 0 0 0;
}

.nav-tabs .nav-link {
  background-color: white;
  margin-left: 2px;
  color: grey;
  background-color: #e6e6e6;
  padding: 8px 20px;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #007bff;
  background-color: #fff;
}

.card {
  width: 70%;
  margin: auto;
  background-color: transparent;
  border: none;
}

.card-header {
  background-color: transparent;
}
</style>

