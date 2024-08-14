<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
       <div class="text-container">
          <div class="text-content d-flex flex-column align-items-center gap-3">
            <h1 class="text-white">{{all}}</h1>
            <p class="text-white">{{ gahas }}</p>
            <router-link to="/Pay">
            <div class="d-flex align-items-center cvar2">
              <button>{{ now }}</button>
            </div>
            </router-link>
          </div>
        </div>

        <swiper :navigation="true" :autoplay="autoplay" :modules="modules" class="mySwiper">
          <swiper-slide v-for="silder in silders" :key="silder.id">
                      <div class="overlay"></div>
            <img :src="silder.img" alt="" class="img-fluid" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <Card/>
  <Department/>
  <More/>
  <Now/>
  <Viewpage/>
  <Testmeilons/>
  <Screen/>
  <Applaction/>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation,Autoplay } from "swiper/modules";
import swi from "../assets/856cb9149c99b0ff4ca9368e46b8fb89.png";
import swi2 from "../assets/switwo.png";
import swi3 from "../assets/1693382170_8564.png";
import Card from "./Card.vue";
import Department from "./Department.vue";
import More from "./More.vue";
import Now from "./Now.vue";
import Viewpage from "./Viewpage.vue";
import Testmeilons from "./Testmeilons.vue";
import Screen from "./Screen.vue";
import Applaction from "./Applaction.vue";
export default {
  name: "home",
  data() {
    return {
      now:"تسوق الان",
      gahas:"طلبك فى خدمتك دايما",
      all:"جميع طلباتك تجدها هنا",
      modules: [Navigation,Autoplay],
       autoplay: {
        delay: 2500, // تغيير الشريحة كل 3 ثواني
        disableOnInteraction: false,
      },
      silders: [{ id: 1, img: swi }, { id: 2, img:swi2},{ id: 3, img:swi3}],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Card,
    Department,
    More,
    Now,
    Viewpage,
    Testmeilons,
    Screen,
    Applaction,
    
  },
};
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
   position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* اللون الأسود مع شفافية 50% */
  z-index: 1;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2; /* لضمان أن النص يظهر فوق أي عناصر أخرى */
}
.text-container h1{
    font-size: 60px;
}
.text-container p{
    font-size: 30px;
}
.swiper-slide img {
  display: block;
   position: relative;
  z-index:-2;
  width: 100%;
  height: auto;
  object-fit: cover;
}
/* .text{
  margin-top: 80px;
} */
@media (max-width: 477px) {
  .text-container {
    font-size: 16px;
   
  }
  .text-container h1 {
    font-size: 30px;
  }
 
.text-container p{
    font-size: 15px;
}
}
</style>
