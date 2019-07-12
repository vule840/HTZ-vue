<template>
  <div id="KreiranjePonude">
    <b-col lg="12">
      <!--  <p class="text-center">Odabir opcija</p> -->

      <p>
        Unesite detalje o vašoj ponudi.
        <strong
          >Podaci koje ćete unijeti na ovoj stranici nakon verifikacije bit će
          javno dostupni i vidljivi na stranici
          www.tjedanodmoravrijedan.hr</strong
        >
      </p>

      <!-- https://adi518.github.io/vue-stepper-component/#/ -->

      <v-stepper
        class="py-4 stepper"
        ref="stepper"
        :steps="steps"
        v-model="step"
      ></v-stepper>

      <!-- Podaci o pos subjk / kontakt podaci -->
      <div v-if="step === 3">
        <p>Podaci za objavu</p>
      </div>
      <div v-else>
        <p>Detalji o ponudi</p>
      </div>

      <template v-if="step === 1"
        ><!-- Step 1 Content -->

        <div class="registracija_okvir">
          <b-form @submit="onSubmit" v-if="show">
            <b-row>
              <!--  Prva kolumna -->
              <b-col>
                <label>Poslovni subjekt</label><br />
                <b-form-input
                  id="input-1"
                  v-model="form.poslovniSubjekt"
                  type="text"
                  required
                  placeholder="Adria"
                ></b-form-input>

                <!-- Druga -->
              </b-col>
              <b-col>
                <label>Poslovna jedinica</label><br />
                <b-form-input
                  id="input-2"
                  v-model="form.poslovnaJedinica"
                  type="text"
                  required
                  placeholder="Dodajte poslovnu jedinicu"
                ></b-form-input>
              </b-col>
            </b-row>

            <b-row>
              <!--  Treća kolumna -->
              <b-col lg="6">
                  <label>Glavna kategorija</label><br />
                <b-form-select v-model="form.selected" :options="form.options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ form.selected }}</strong></div>

              <!--   <label>Odaberite glavnu kategoriju</label><br />
                <b-form-datalist id="input-list" :options="form.glavnaKategorija"></b-form-datalist>
                <b-form-input list="input-list" id="input-with-list"></b-form-input> -->
 

              </b-col>
            </b-row>

            <!-- Gumbi -->
            <b-row>
              <b-col lg="12">
                <label>Odaberite podkategoriju</label>
                <div class="d-flex justify-content-between mb-3 plavi-border">
                  <b-button-group class="justify-content-between" size="sm">
                    <b-button
                      :pressed.sync="myToggle"
                      class="plavi-gumb-outline"
                      >Hoteli</b-button
                    >

                    <b-button
                      :pressed.sync="myToggle1"
                      class="plavi-gumb-outline"
                      >Privatni smještaj/opg</b-button
                    >

                    <b-button
                      :pressed.sync="myToggle2"
                      class="plavi-gumb-outline"
                      >Kampovi</b-button
                    >

                    <b-button
                      :pressed.sync="myToggle3"
                      class="plavi-gumb-outline"
                      >Hosteli</b-button
                    >

                    <b-button
                      :pressed.sync="myToggle4"
                      class="plavi-gumb-outline"
                      >Ostalo</b-button
                    >
                  </b-button-group>
                </div>
              </b-col>

              <p>
                Pressed State:
                <strong
                  >{{ myToggle }} {{ myToggle1 }} {{ myToggle2 }}
                  {{ myToggle3 }} {{ myToggle4 }}</strong
                >
              </p>
            </b-row>

            <!-- Gumbi -->
            <b-row>
              <b-col lg="12">
                <label>Opis ponude</label><br />
                <b-form-textarea
                  id="textarea"
                  type="text"
                  v-model="form.opisPonude"
                  placeholder="Unesite tekst opisa ponude (do 350 znakova)"
                  rows="6"
                  max-rows="6"
                ></b-form-textarea>

                <pre class="mt-3 mb-0">{{ form.text }}</pre>
              </b-col>
            </b-row>
          </b-form>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>

          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
      </template>
      <!-- KORAK 2 -->
      <template v-if="step === 2">
        <div class="registracija_okvir">
          <b-row>
            <b-col class="pr-0" sm="12" lg="12">
              <label>Napomena</label>
              <b-form @submit="onSubmit" v-if="show">
                <!-- Telefon -->
                <!-- <b-form-group
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
                    </b-form-group> -->
               
                <b-form-textarea
                  id="textarea"
                  v-model="form.napomena"
                  placeholder="Unesite tekst napomene (do 100 znakova)"
                  rows="6"
                  max-rows="6"
                ></b-form-textarea>
              </b-form>
            </b-col>

            <b-col class="pr-0" sm="5" lg="5">
              <label>Glavna fotografija</label>

              <b-button class="plavi-gumb-outline "
                ><Download class="mx-4" /> Prenesite glavnu
                fotografiju</b-button
              >

              <label class="pt-4">Dodatna fotografija</label>

              <b-button
                v-model="form.file"
                :state="Boolean(form.file)"
                class="plavi-gumb-outline  "
                ><Download class="mx-4" /> Prenesite dodatne
                fotografije</b-button
              >

              <!-- Styled -->
              <b-form-file v-model="form.file" :state="Boolean(form.file)"> </b-form-file>

              <div class="mt-3">Selected form.file: {{ form.file ? form.file.name : "" }}</div>
            </b-col>

            <!-- Dokaz o formiranoj ponudi -->
            <b-col class="pr-0" sm="12" lg="12">
              <label>Web poveznica do objavljene ponude</label>
              <b-form-input
                id="input-1"
                v-model="form.poslovniSubjekt"
                type="text"
                required
                placeholder="www.adriacamping.hr/ponuda_tjedan"
              ></b-form-input>
              <label>Ili izvadak iz cjenika</label><br />
              <b-button class="plavi-gumb-outline "
                ><Download class="mx-4" /> Prenesite izvadak iz
                cjenika</b-button
              >
            </b-col>
          </b-row>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
      </template>

      <!-- KORAK 3 -->
      <template v-if="step === 3">
        <div class="registracija_okvir registracija_okvir_zadnji">
          <b-row>
            <b-col class="pr-0" sm="12" lg="12">
              <b-form @submit="onSubmit" v-if="show">
                <!-- Ime i prezime kontakt osobe -->

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Poslovni subjekt:"
                  label-for="input-sm"
                >
                  <p >{{ form.poslovniSubjekt }}</p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Adresa :"
                  label-for="input-sm"
                >
                  <p v-model="form.poslovniSubjekt">Lošinjska 2</p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Mjesto :"
                  label-for="input-sm"
                >
                  <p v-model="form.poslovniSubjekt">Cres</p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Telefon :"
                  label-for="input-sm"
                >
                  <p v-model="form.poslovniSubjekt">052 200 351</p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="E-mail :"
                  label-for="input-sm"
                >
                  <p v-model="form.poslovniSubjekt">info@adriacamping.hr</p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Web adresa: :"
                  label-for="input-sm"
                >
                  <p v-model="form.poslovniSubjekt">www.adriacamping.hr</p>
                </b-form-group>

                <hr class="w-50 ml-0" />

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Glavna kategorija:"
                  label-for="input-sm"
                >
                  <p>{{ form.selected }} </p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Podkategorija:"
                  label-for="input-sm"
                >
                  <p v-model="form.poslovniSubjekt">Kampovi</p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Opis ponude:"
                  label-for="input-sm"
                >
                  <p >
                    {{ form.opisPonude }}
                    
                  </p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Napomena:"
                  label-for="input-sm"
                >
                  <p>  {{ form.napomena }}
                  </p>
                </b-form-group>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Glavna fotografija:"
                  label-for="input-sm"
                >
                </b-form-group>

                <b-img
                  src="https://picsum.photos/1024/400/?image=41"
                  fluid
                  alt="Responsive image"
                ></b-img>

                <b-form-group
                  label-cols="2"
                  label-cols-lg="2"
                  label-size="sm"
                  label="Dodatne fotografije:"
                  label-for="input-sm"
                >
                </b-form-group>

                <div class="dodatne-fotke">
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/140/50/?image=54"
                    alt="Image 1"
                  ></b-img>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/140/50/?image=54"
                    alt="Image 1"
                  ></b-img>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/140/50/?image=54"
                    alt="Image 1"
                  ></b-img>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/140/50/?image=54"
                    alt="Image 1"
                  ></b-img>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/140/50/?image=54"
                    alt="Image 1"
                  ></b-img>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/140/50/?image=54"
                    alt="Image 1"
                  ></b-img>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/140/50/?image=54"
                    alt="Image 1"
                  ></b-img>
                </div>

               
              </b-form>


            <b-form-checkbox class="py-5"
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Pod materijalnom i kaznenom odgovornošću potvrđujem da sam ovlašten/a za zastupanje poslovnog subjekta te da su svi uneseni podaci točni. Suglasan sam sa Uvjetima i pravilima akcije #TjedanOdmoraVrijedan te prihvaćam pravila privatnosti.
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>



            </b-col>

          </b-row>
           <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
        </div>
      </template>

      <!-- etc' -->

      <!-- Stepper Controls -->

      <!-- <button type="button" @click="$refs.stepper.previous()">Previous</button>
<button type="button" @click="$refs.stepper.next()">Next</button>
<button type="button" @click="$refs.stepper.reset()">Reset</button> -->

      <!-- Footer-->
      <b-row>
        <b-col class="pr-0" sm="6" lg="6">
          <b-button
            @click="$refs.stepper.previous()"
            block
            class="plavi-gumb-outline"
          >
            Prethodni korak
          </b-button>
        </b-col>
        <b-col class="pl-0" sm="6" lg="6">
          <div v-if="step === 3">
            <b-button
              v-b-modal.modal-multi-12
              @click="onSubmit()"
              block
              class="plavi-gumb-outline"
            >
              Registiraj Se
            </b-button>
          </div>
          <div v-else>
            <b-button
              @click="$refs.stepper.next()"
              block
              class="plavi-gumb-outline"
            >
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
import Download from "@/assets/download.svg";
import { VStepper } from "vue-stepper-component";
export default {
  name: "KreiranjePonude",
  props: {
    msg: String
  },
  components: {
    VStepper,
    Download
  },
  data() {
    return {
      
      myToggle: false,
      myToggle1: false,
      myToggle2: false,
      myToggle3: false,
      myToggle4: false,
      steps: 3,
      step: undefined,
      
      form: {
        poslovniSubjekt: "",
        poslovnaJedinica: "",
        opisPonude: "",
        napomena: "",
        selected: null,
        status: 'not_accepted',
        file: null,
        file2: null,
        selected: null,
        clickedButton: null,
        options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          
        ],

        /*glavnaKategorija: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']*/
        /*postanskiBroj: "",
        mjesto: "",
        adresaPoslovnogSubjekta: "",
        telefon: "",
        email: "",
        web: "",
        imeIprezimeKontakt: "",
        brojTelefonaKontaktOsobe: "",
        emailAdresaKontaktOsobe: ""*/
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    getButtonName(event) {
      this.clickedButton = event.target.name
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
