<template>
  <div class="detilsa">
    <div class="container">
      <div class="row">
        <div class="text">
          <h1 class="mainsize active">{{ detils }}</h1>
        </div>
        <div class="m-auto" v-for="card in cards" :key="card.id">
          <div class="card-main m-auto">
            <div class="offer position-relative">
              <p class="position-absolute z-2">50% off</p>
            </div>
            <div class="love position-relative d-flex justify-content-end">
              <Button
                icon="pi pi-heart"
                severity="help"
                text
                raised
                rounded
                aria-label="Favorite"
                class="position-absolute p-2 z-2 fs-3 pi pi-heart bg-transparent border-0"
                :class="{ bg: isFavorite(card.id) }"
                @click="toggleFavorite(card)"
              />
            </div>
            <swiper
              :navigation="true"
              :autoplay="autoplay"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="sild in silders" :key="sild.id">
                <div class="card-head-main">
                  <img :src="card.img" class="img-top" alt="" />
                </div>
              </swiper-slide>
            </swiper>

            <div class="card-body-main">
              <div class="flex-main-between p-2">
                <div class="fw-bold bad">{{ card.title }}</div>
                <div class="color-main no-shrink">
                  <div class="d-flex gap-4 grop-num">
                    <div class="one" @click="decrease">
                      <i class="pi pi-minus"></i>
                    </div>
                    <div class="nu text-dark">{{ counter }}</div>
                    <div class="one" @click="increase">
                      <i class="pi pi-plus"></i>
                    </div>
                  </div>
                  <div class="star-rate text-center mt-2">
                    <div class="card flex justify-content-center m-auto">
                      <Rating v-model="card.value" :cancel="false" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-main-between">
                <div class="d-flex flex-column justify-content-start">
                  <div class="d-flex flex-column justify-content-start p-2">
                    <div>
                      <p class="text-black-50">{{ card.hotle }}</p>
                    </div>
                    <div>
                      <p class="color-main no-shrink">{{ card.price }}</p>
                    </div>
                  </div>
                  <div class="star-parent px-2">
                    <p class="text-black-50">
                      تاريخ الاضافة: <span class="ma">16/5/2024</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-des text-center d-flex flex-column text-black-50">
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.
                </p>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.
                </p>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق.
                </p>
              </div>
              <div class="flex-center mt-3">
                <div class="btn">
                  <button @click="addToCart(card)">{{ card.det }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import imgcard from "../assets/vojtech-bruzek-Yrxr3bsPdS0-unsplash.png";
import Rating from "primevue/rating";
import { mapActions, mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

export default {
  name: "ProductDetails",
  data() {
    return {
      detils: "تفاصيل المنتج",
      pay: "الاكثر مبيعا",
      counter: 2,
      modules: [Navigation, Autoplay],
      autoplay: {
        delay: 2500, // تغيير الشريحة كل 3 ثواني
        disableOnInteraction: false,
      },
      silders: [{ id: 1 }, { id: 2 }],
      cards: [
        {
          id: 1,
          img: imgcard,
          plus: 2,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "اضافة الى السلة",
          value: ref("3"),
        },
      ],
      currentCardId: null,
    };
  },
  components: { Rating, Swiper, SwiperSlide },
  computed: {
    ...mapGetters(["isFavorite"]),
  },
  methods: {
    ...mapActions(["toggleFavorite", "addToCart"]),
    increase() {
      this.counter++;
    },
    decrease() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    addToCart(card) {
      const product = { ...card, quantity: this.counter };
      this.$store.dispatch('addToCart', product);
      console.log("تم إضافة المنتج إلى السلة:", this.$store.getters.cartItems);
    },
  },
};
</script>

<style scoped>
.detilsa {
  padding: 30px 0;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  border-radius: 4px;
  padding: 5px;
}
.bg {
  background-color: #f65555 !important;
  border-radius: 50%;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.ma {
  color: var(--main-color);
  font-weight: 700;
}
.swiper {
  width: 100%;
  height: 100%;
}

.card-main {
  /* box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%); */
  border-radius: 8px;
  height: 100%;
  max-width: 100%;
}
.grop-num {
  width: 130px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #efefed;
}
.img-top {
  width: 100%;
  height: 400px;
  transition: all 0.3s ease-in-out;
}
.img-top:hover {
  transform: scale(1.1);
}
.card-head-main {
  overflow: hidden;
  border-radius: 8px;
}
.color-main {
  color: var(--main-color);
  font-weight: bold;
}
.flex-main-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.left-text {
  text-align: left;
  padding: 5px;
  font-weight: 700;
}
.bad {
  font-size: 20px;
}
.main-sale {
  padding: 8px;
  width: 120px;
  text-align: center;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  color: var(--main-color);
}
.flex-center {
  display: flex;
  justify-content: center;
}
a.main-a {
  padding: 8px 25px;
  border: 1px solid var(--main);
  border-radius: 5px;
  text-decoration: none;
}
.one-line {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-shrink {
  flex-shrink: 0;
}
.card-body-main {
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn button {
  width: 250px;
  padding: 10px;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  background-color: var(--main-color);
  color: #fff;
  font-weight: 700;
  transition: 0.3s;
}
.btn button:hover {
  background-color: var(--main-color);
  color: #fff;
}
.love i {
  left: 5px;
  top: 10px;
}

.one {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}
.one i {
  font-size: 12px;
  font-weight: 700;
}
.offer p{
  right: 0px;
  top: 10px;
  text-align: center;
  width: 90px;
  background-color: var(--main-color);
  color: #fff;
  padding: 5px;
  border-radius: 4px;
}
.text-des p {
  font-size: 14px;
  font-weight: 700;
}
@media (max-width:477px) {
  .text-des p {
    font-size: 12px;
    font-weight: 700;
}
.btn button{
    width: 169px;
    padding: 8px;
    border: 1px solid var(--main-color);
    border-radius: 4px;
    background-color: var(--main-color);
    color: #fff;
    font-weight: 700;
    transition: 0.3s;
}
}
</style>
