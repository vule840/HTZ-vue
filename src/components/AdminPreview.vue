<template>
    <div class="preview">
      <div class="closeBtn" @click="closeComponent()">
        <img src="@/assets/icon-b-close.png" />
      </div>

      <div class="contentHolder">
      <div class="buttonHolder">
        <div>
          <a class="offerBtn blue" @click="closeComponent()">POVRATAK</a>
        </div>
      <div>
          <a class="offerBtn orange">ZATRAŽI PROMJENE</a>
          <a class="offerBtn green">OBJAVI PONUDU</a>
      </div>
      </div>
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
          <span class="sectionLabel">GLAVNA FOTOGRAFIJA</span>
          <img src="@/assets/slider1-image.jpg">
        </div>
        <div class="moreImage">
          <span class="sectionLabel">DODATNE FOTOGRAFIJE</span>
          <div class="moreImageHolder">
          <img src="@/assets/slider1-image.jpg">
          <img src="@/assets/slider1-image.jpg">
          <img src="@/assets/slider1-image.jpg">
          <img src="@/assets/slider1-image.jpg">
          <img src="@/assets/slider1-image.jpg">
          <img src="@/assets/slider1-image.jpg">
          </div>
        </div>

        <div class="grid-container1 orderInfo">
          <div class="grid-item table1">
            <span>ADMIN</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item table2">
            <span>DATUM</span>
            <p>Adria Camping</p>
          </div>
          <div class="grid-item comment3">
            <span>OPIS PONUDE</span>
            <p>Adria Camping</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AdminPreview",
  components: {},
  props: {},
  methods: {
    closeComponent() {
        this.$emit('closePreview')
    }
  }
};
</script>

<style scoped>
/* --- START PREVIEW --- */
.buttonHolder{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.offerBtn {
  display: inline-block;
  padding: 10px;
  font-size: 12px;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 2px;
  cursor: pointer;
  transition: 0.3s;
  width: 200px;
}

.offerBtn.green{
  background-color: #05A701;
  color: white !important;
  border: 2px solid #05A701;
  margin-left: 5px;
}

.offerBtn.orange{
  background-color:rgba(255,122,0,0.3);
  color: #FF7A00 !important;
  border: 2px solid #FF7A00;
  box-sizing: border-box;
}

.offerBtn.blue{
  background-color: #00386C;
  color: white !important;
  border: 2px solid #00386C;
}

.offerBtn.lightBlue{
  color: #00386C !important;
  border: 2px solid #00386C;
  box-sizing: border-box;
}

.offerBtn:hover{
  opacity: 0.8;
}

.moreImageHolder{
  display: flex;

  overflow-x: scroll;
}

.comment3{
  grid-column: 1 / 3;
}

.mainImage{
  width: 100%;
  text-align: left;
}

.moreImage{
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
}

.moreImage img{
  height: 200px;
  margin-right: 2px;
}

.sectionLabel {
  font-size: 12px;
  font-weight: bold;
  color: #00386C;
  padding: 0 0 0 30px;
  margin-bottom: 10px;
  margin-top: 20px;
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
  position: fixed;
  right: 35px;
  top: 20px;
  cursor: pointer;
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
  overflow-y: scroll;
}

/* --- END PREVIEW --- */
</style>


