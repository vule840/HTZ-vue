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
    <adminPreview v-if="offerPreview == true" @closePreview="offerPreview = false"></adminPreview>
  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'*/
import adminHeader from "@/components/AdminHeader.vue";
import adminWaiting from "@/components/AdminWaiting.vue";
import adminOffers from "@/components/AdminOffers.vue";
import adminDorada from "@/components/AdminDorada.vue";
import adminPreview from "@/components/AdminPreview.vue";
export default {
  name: "admin",
  components: {
    adminHeader,
    adminWaiting,
    adminOffers,
    adminDorada,
    adminPreview
  },
  data() {
    return {
      login: true,
      offerPreview: true
    };
  },
  methods: {}
};
</script>

<style>

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

