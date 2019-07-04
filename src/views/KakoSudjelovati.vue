<template>
  <div class="about">
    <div>
    	<CaruselSudjelovati/>
      <b-container class="content">
        <h2>Kako sudjelovati?</h2>
        <b-row>
          <b-col cols="12">
            <p>Za sudjelovanje u akciji “Tjedan odmora vrijedan” prvo je potrebno registrirati se. Pri registraciji unijet ćete svoje kontakt podatke kao i osnovne podatke o poslovnom subjektu kojeg prijavljujete za sudjelovanje.</p>
             <p>Nakon potvrde vaše e-mail adrese dobit ćete svoje korisničko ime i šifru za pristup sustavu za kreiranje ponuda. Unutar sustava možete odabrati kategoriju u kojoj želite napraviti ponudu kao i unijeti sadržaj ponude, napomene te glavnu i do pet dodatnih fotografija. </p>
              <p>Naši administratori će provjeriti vaše podatke i, ako su svi uvjeti ispunjeni, u roku od 3 radna dana od predaje ponude objaviti je na stranici tjedanodmoravrijedan.hr. Sadržaj vaših ponuda možete po potrebi mijenjati do 25.8.2019. nakon kojeg roka će sve objavljene ponude biti zaključane, ali ćete imati mogućnost označiti ponudu prodanom.</p>

          </b-col>
          <b-col cols="12">
            <b-button variant="outline-plava">Primary</b-button>
          </b-col>

          <b-col cols="12">
            <strong>Kategorije u kojima se možete prijaviti pogledajte ovdje</strong>
          </b-col>

          <b-col cols="12">
        
            <b-button class="crveni-gumb">KATEGORIJE</b-button>
          </b-col>
        </b-row>
    

        
      </b-container>

</div>

  </div>
</template>

<script>
// @ is an alias to /src
import CaruselSudjelovati from '@/components/CaruselSudjelovati.vue'

export default {
  name: 'home',
  components: {
    CaruselSudjelovati
  },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>
