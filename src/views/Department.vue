<template>
  <div class="department">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h1 class="text-center mb-3 active m-auto mainsize">{{depart}}</h1>
        </div>
        <div
          class="box d-flex justify-content-between  align-items-center flex-wrap mt-3"
        >

          <div class="card-one" v-for="card in cards" :key="card.id">
            <router-link to="#">

            <div class="img-car">
              <img :src="card.img" alt="" class="img-fluid" />
            </div>
            </router-link>
            <p class="fw-medium ">{{ card.des }}</p>
                  <!-- <div class="img-arrow">
    <img :src="arro" alt="" class=" img-fluid">
</div> -->
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgone from "../assets/toast-solid_.png";
import img2 from "../assets/box-question-mark_.png";
import img3 from "../assets/cafe_.png";
import img4 from "../assets/restaurant_.png";
import arrow from "../assets/arrow.png";
export default {
  name: "department",
  data() {
    return {
// arro: arrow, 
depart:"الاقسام",    
      cards: [
        { id: 2, img: imgone, des: "فنادق" },
        { id: 1, img: img4, des: "مطاعم" },
        { id: 3, img: img2, des: "سوبر ماركت" },
        { id: 4, img: imgone, des: "مخابز" },
        { id: 5, img: img3, des: " مقاهى" },
      ],
    };
  },
};
</script>

<style scoped>
.department {
  padding: 10px 0;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.card-one {
  width: 150px;
  height: 120px;
  border-radius: 4px;
  text-align: center;
  background-color: transparent;
  box-shadow: 0 0 13px #fff;
  border: 1px solid var(--main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin-bottom: 15px;
  cursor: pointer;
    transition: 0.3s;

}
.img-car{
  width: 90px;
}

.card-one:hover{
  background-color: var(--main-color);
  color: #fff !important;
}
</style>
