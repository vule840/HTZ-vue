<template>
  <div class="waitingHolder">

    <div class="offerHolder">
      <div class="offer">
        <div class="imageHolder">
          <img src="@/assets/icon-c-cat2.png" />
          <img
            src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div class="txtHolder big">
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin imperdiet sem nec tempor. Ut consectetur porttitor arcu, et posuere arcu accumsan vitae.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDorada",
  components: {},
  props: {}
};
</script>


<style scoped>

.offerBtn {
  display: block;
  padding: 10px;
  font-size: 12px;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 2px;
  cursor: pointer;
  transition: 0.3s;
}

.offerBtn.green{
  background-color: #05A701;
  color: white !important;
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
}

.offerBtn.lightBlue{
  color: #00386C !important;
  border: 2px solid #00386C;
  box-sizing: border-box;
}

.offerBtn:hover{
  opacity: 0.8;
}

.txtHolder{
  width: 58%;
  text-align: left;
}

.txtHolder.big{
  width: 78%;
  text-align: left;
}

.txtHolder h4{
  font-size: 16px;
}

.txtHolder p{
  font-size: 12px;
  line-height: 1.2;
}

.imgHolder{
  width: 20%;
}

.buttonHolder{
  width: 20%;
}

.imageHolder img {
  height: 80px;
  width: 80px;
  object-fit: cover;
}

.offer {
  width: 100%;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin-top: 10px; 
}

.offer:first-of-type {
  margin-top: 25px; 
}

.offer:last-of-type {
  margin-bottom: 50px; 
}

.catHolder {
  display: flex;
  flex-wrap: wrap;
}

.catSingle {
  display: inline-block;
  width: 8.333%;
  min-width: 60px;
  cursor: pointer;
}

.catSingle img {
  width: 100%;
}

.catSingle span {
  display: block;
  font-size: 11px !important;
  padding: 10px;
  line-height: 1.2;
}

.catBorder {
  border-bottom: 5px solid;
  box-sizing: border-box;
}

.cat1 {
  border-color: #cb2422;
}

.cat2 {
  border-color: #d26b13;
}

.cat3 {
  border-color: #fac401;
}

.cat4 {
  border-color: #afc624;
}

.cat5 {
  border-color: #829427;
}

.cat6 {
  border-color: #43b17a;
}

.cat7 {
  border-color: #419cd6;
}

.cat8 {
  border-color: #283476;
}

.cat9 {
  border-color: #55d6ff;
}

.cat10 {
  border-color: #a8529a;
}

.cat11 {
  border-color: #e84490;
}

.cat12 {
  border-color: #dcdcdc;
}

.cat1.active {
  background-color: #cb2422;
}

.cat2.active {
  background-color: #d26b13;
}

.cat3.active {
  background-color: #fac401;
}

.cat4.active {
  background-color: #afc624;
}

.cat5.active {
  background-color: #829427;
}

.cat6.active {
  background-color: #43b17a;
}

.cat7.active {
  background-color: #419cd6;
}

.cat8.active {
  background-color: #283476;
}

.cat9.active {
  background-color: #55d6ff;
}

.cat10.active {
  background-color: #a8529a;
}

.cat11.active {
  background-color: #e84490;
}

.cat12.active {
  background-color: #dcdcdc;
}
</style>





