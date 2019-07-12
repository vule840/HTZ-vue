<template>
  <div class="cestaPitanja">
    <div>
    	<CaruselPitanja/>
        <b-container class="content">
        <h2>Česta pitanja</h2>
        <b-row>
          <b-col class="mx-auto" cols="6">
          

       <b-card no-body class="mb-1">
      <b-card-header header-tag="header" role="tab">
        <b-button href="#" block v-b-toggle.accordion-1 ><ArrowSvg/> &nbsp; Što je Premium Rewards?</b-button> 
        <!-- <p v-b-toggle.accordion-1>Što je Premium Rewards?</p> -->
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Premium Rewards je program nagrađivanja potrošnje i urednog plaćanja računa za korisnike kartica izdavatelja PBZ Carda.</b-card-text>
          
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 ><ArrowSvg/> &nbsp;Kako se postaje sudionik Premium Rewards programa?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <!-- <b-card-text>{{ text1 }}</b-card-text> -->
          Korisnici osobnih osnovnih kartica izdavatelja PBZ Carda koje sadrže funkcionalnost Premium Rewards programa mogu postati sudionicima Programa ako pošalju popunjenu i potpisanu pristupnicu za Premium Rewards program.
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 ><ArrowSvg/> &nbsp;Koje sve kartice mogu sudjelovati u Premium Rewards programu?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          Sudjelovanje u Premium Rewards programu dostupno je osnovnim korisnicima sljedećih kartica:

          Premium Visa Gold/American Express kartica
          Visa Revolving/Blue iz American Expressa i American Express kreditna kartica
          Visa kartica sa srcem/American Express kartica sa srcem.
          Korisnici sljedećih kartica u Program su uključeni automatski, u trenutku izdavanja kartice:

          Premium Visa Platinum/American Express Gold Card/ American Express Afinity Card za članove Rotary Distrikta 1913.
          Premium Visa Infinite/The Platinum Card.
          Korisnicima Premium Visa Infinite i The Platinum Card, godišnja naknada uključena je u članarinu za karticu.

          Korisnicima Premium Visa Platinum i American Express Gold Card kartice dodjeljuje se 30.000 bodova svake godine u kalendarskom mjesecu prijave sudjelovanja, počevši od druge godine sudjelovanja, što je ekvivalent godišnje naknade za sudjelovanje u Programu.
        </b-card-body>
      </b-collapse>
    </b-card>

          </b-col>
         
        </b-row>
    

        
      </b-container>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import CaruselPitanja from '@/components/CaruselPitanja.vue'
import ArrowSvg from "@/assets/ArrowSvg.svg";

export default {
  name: 'home',
  components: {
    CaruselPitanja,
    ArrowSvg
  },
    data() {
      return {
        slide: 0,
        sliding: null,
        showCollapse: true,
        showCollapse1: false,
        text: `
         Premium Rewards je program nagrađivanja potrošnje i urednog plaćanja računa za korisnike kartica izdavatelja PBZ Carda.
        `,
  
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
