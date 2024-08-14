<template>
  <div class="applcation">
    <div class="container">
      <div class="row">
        <div class="text text-center">
          <h1 mainsize>{{ textapp }}</h1>
          <p class="mainsize2 text-black-50 fw-medium">{{ des }}</p>
        </div>
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="sild in silders" :key="sild.id">
            <img :src="sild.swi" alt="" />
          </swiper-slide>
        </swiper>
        <div class="grop-img d-flex justify-content-center gap-3 flex-wrap mt-5 mb-3">
            <img :src="imgs2" alt="" >
            <img :src="imgs" alt="" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import img from "../assets/WhatsApp Image 2024-06-12 at 11.18.29 PM.jpeg";
import img2 from "../assets/WhatsApp Image 2024-06-12 at 11.18.29 PM (1).jpeg";
import img3 from "../assets/WhatsApp Image 2024-06-12 at 11.18.29 PM (2).jpeg";
import img4 from "../assets/WhatsApp Image 2024-06-12 at 11.18.30 PM.jpeg";
import phone from "../assets/ooa.png"
import phone2 from "../assets/oo .png"
export default {
  name: "applcation",
  data() {
    return {
        imgs:phone,
        imgs2:phone2,
      modules: [EffectCoverflow, Pagination],
      silders: [
        { id: 1, swi: img },
        { id: 2, swi: img2 },
        { id: 3, swi: img3 },
        { id: 4, swi: img4 },
      ],
      textapp: "صفحات التطبيق",
      des: "يمتلك تطبيق 'طلبك' الكثير من المميزات وتقوم بعرض مميزات التطبيق",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.applcation {
  padding: 30px 0;
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 200px;
  height: auto;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
@media (max-width:477px) {
    .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 170px;
    height: auto;
}
}
.grop-img img{
max-width: 150px;
cursor: pointer;
}
.grop-img img {
    max-width: 130px;
    cursor: pointer;
    margin-top: -50px !important;
}
</style>
