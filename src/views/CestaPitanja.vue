<template>
  <div class="about">
    <div>
    	<CaruselPitanja/>
        <b-container class="content">
        <h2>Česta pitanja</h2>
        <b-row>
          <b-col cols="12">
           <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
             

          </b-col>
         
        </b-row>
    

        
      </b-container>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import CaruselPitanja from '@/components/CaruselPitanja.vue'

export default {
  name: 'home',
  components: {
    CaruselPitanja
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
