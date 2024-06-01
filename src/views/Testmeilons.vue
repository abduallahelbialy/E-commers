<template>
  <div class="Testmeilon">
    <div class="container">
      <div class="row">
        <!-- //head// -->
        <div class="d-flex justify-content-start">
          <div class="one">
            <h1 class="text-center mb-3 active m-auto mainsize">
              {{ pay }}
            </h1>
          </div>
        </div>
        <!-- //card-testmelon/// -->

        <div class="card-text d-flex justify-content-between flex-wrap">
          <swiper
    :slidesPerView="slidesPerView"
            :spaceBetween="30"
            :freeMode="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            :autoplay="autoplay"
            class="mySwiper"
          >
            <swiper-slide v-for="silder in silders" :key="silder.id">
              <div
                class="box-info d-flex flex-column align-items-center text-center"
              >
                <div class="text">
                  <p class="lin">{{silder.des }}</p>
                  <p class="mt-4 lin">{{ silder.des2 }}</p>
                </div>
                <div class="card flex justify-content-center">
                  <Rating v-model="silder.value" :cancel="false" />
                </div>
                <div class="img-peploe mt-2">
                  <img :src="silder.photo" alt="" class="img-fluid" />
                  <p class=" fw-medium">{{ silder.abdo }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "primevue/rating";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination,Autoplay } from "swiper/modules";
import img from "../assets/Untitled-1.jpg";
export default {
  name: "Testmelon",
  data() {
    return {
              slidesPerView: 3,

      silders: [
        {
          id: 1,
          photo: img,
          value: ref("3"),
          abdo: "عبدالله البيلى",
          des: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          des2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن",
        },
        {
          id: 2,
          photo: img,
          value: ref("3"),
          abdo: "عبدالله البيلى",
          des: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          des2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن",
        },
        {
          id: 3,
          photo: img,
          value: ref("3"),
          abdo: "عبدالله البيلى",
          des: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          des2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن",
        },
        {
          id: 4,
          photo: img,
          value: ref("3"),
          abdo: "عبدالله البيلى",
          des: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          des2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن",
        },
        {
          id: 5,
          photo: img,
          value: ref("3"),
          abdo: "عبدالله البيلى",
          des: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          des2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن",
        },
      ],
      modules: [FreeMode, Pagination ,Autoplay],
        autoplay: {
        delay: 2500, // تغيير الشريحة كل 3 ثواني
        disableOnInteraction: false,
      },
      pay: "اراء عملائنا",
    };
  },
  components: { Rating, Swiper, SwiperSlide },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // استدعاء الدالة عند التحميل الأولي للصفحة
  },
  methods: {
    handleResize() {
      this.slidesPerView = this.getSlidesPerView();
    },
    getSlidesPerView() {
      return window.matchMedia("(max-width: 477px)").matches ? 1 : 3;
    },
  },
};
</script>

<style scoped>
.Testmeilon {
  padding: 30px 0;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.box-info {
  width: 400px;
  height: auto;
  border: 2px dashed var(--main-color);
  border-radius: 4px;
  padding: 9px;
  transition: 0.3s;
}
.box-info:hover{
  background-color: var(--main-color);
  color: #fff;
}
.lin {
  font-size: 13px;
  font-weight: 700;
}
.img-peploe {
  object-fit: contain;
  color: black;
}
.img-peploe img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>
