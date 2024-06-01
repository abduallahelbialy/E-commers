<template>
  <div class="servies">
    <div class="container">
      <div class="row">
        <div
          class="all d-flex justify-content-evenly align-items-center flex-wrap"
        >
          <div class="card-one" v-for="card in cards" :key="card.id">
            <div class="img-car">
              <img :src="card.img" alt="" class="img-fluid" />
            </div>
            <p class="fw-medium text-black">{{ card.des }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgone from "../assets/Save-removebg-preview.webp";
import img2 from "../assets/loc-removebg-preview.webp";
import img3 from "../assets/car-removebg-preview.webp";
export default {
  name: "servies",
  data() {
    return {
      img: imgone,
      cards: [
        { id: 2, img: img3, des: "توصيل الى اى مكان" },
        { id: 1, img: img2, des: "عروض وخصومات حتى 50%" },
        { id: 3, img: imgone, des: "دفع امن لجميع الطلبات" },
      ],
    };
  },
};
</script>

<style scoped>
.servies {
  padding: 20px 0;
}
.card-one {
  width: 300px;
  height: auto;
  border-radius: 4px;
  text-align: center;
  background-color: #e4eeff;
  box-shadow: 0 0 13px #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 7px;
  margin-bottom: 15px;
}
.all {
  margin-top: 40px;
  position: relative;
  z-index: 22;
}
@media (max-width: 477px) {
  .all {
    margin-top: 0px;
  }
  .img-car{
  max-width: 50px;
  max-width: 50px;
}
  .card-one{
    width: 200px;
    padding: 5px;
  }
}
@media (max-width: 799px) {
  .all {
    margin-top: 0px;
  }
}
@media (max-width:992px) {
  .all {
    margin-top: 0px;
  }
}
@media (max-width:1024px) {
  .all {
    margin-top: 0px;
  }
}
.img-car{
  max-width: 100px;
  max-width: 100px;
}
</style>
