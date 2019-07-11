<template>
  <b-jumbotron class="adminJumbo">
    <div class="infoHolder">
      <div>
        <img src="@/assets/icon-doc1.png" />
        <p>
          7.378
          <span>UKUPAN BROJ PRIJAVA</span>
        </p>
      </div>
      <div>
        <img src="@/assets/icon-doc2.png" />
        <p>
          7.378
          <span>NOVE PRIJAVE</span>
        </p>
      </div>
      <div>
        <img src="@/assets/icon-doc3.png" />
        <p>
          7.378
          <span>ZATRAŽENE PRIJAVE</span>
        </p>
      </div>
      <div>
        <img src="@/assets/icon-doc4.png" />
        <p>
          7.378
          <span>ODOBRENE PRIJAVE</span>
        </p>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: "AdminHeader",
  components: {},
  props: {}
};
</script>

<style>
.adminJumbo {
  height: 33vh;
  margin: 0px;
  background-image: url("~@/assets/slider1-image.jpg");
  background-position: center;
  position: relative;
  padding: 12vh 0px;
}

.adminJumbo:before {
  content: " ";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: -webkit-radial-gradient(
    top center,
    rgba(0, 56, 108, 0.6) 0%,
    rgba(0, 56, 108, 0.6) 100%
  );
}

.adminJumbo .infoHolder {
  position: relative;
  z-index: 100;
  color: white;
  display: flex;
  padding: 20px;
  width: 70%;
  background-color: #00386c;
  margin: auto;
      justify-content: space-around;
}

.adminJumbo img {
  max-width: 50px;
  object-fit: contain;
  vertical-align: text-bottom;
}

.adminJumbo p {
  display: inline-block;
  text-align: left;
  margin-left: 15px;
  font-size: 35px;
  font-weight: bold;
  line-height: 1.2;
}

.adminJumbo p span {
  text-align: left;
  font-size: 10px;
  font-weight: normal;
  margin: 0px;
  padding: 0px;
  display: block;
}
</style>


