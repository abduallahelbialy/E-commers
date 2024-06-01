<template>
   <div class="more">
    <div class="container">
      <div class="row">
        <!-- //head// -->
        <div class="d-flex justify-content-between flex-wrap">
          <div class="one">
            <h1 class="text-center mb-3 active m-auto mainsize">
              {{ pay }}
            </h1>
          </div>
          <div class="cvar2 button">
            <router-link to="/Allview">
              <button>{{ more }}</button>
            </router-link>
          </div>
        </div>
        <!-- ///card// -->

    <div
          class="col-lg-3 col-md-6 mt-3"
          v-for="card in cards"
          :key="card.id"
        >
          <div class="card-main m-auto">
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
            <div class="card-head-main">
              <img :src="card.img" class="img-top" alt="" />
            </div>
            <div class="card-body-main">
              <div class="flex-main-between p-2">
                <div class="fw-bold bad">{{ card.title }}</div>
                <div class="color-main no-shrink">{{ card.price }}</div>
              </div>
              <div class="flex-main-between">
                <div class="d-flex flex-column justify-content-start">
                  <div class="d-flex p-1">
                    <p class="text-black-50 text-start">{{ card.hotle }}</p>
                  </div>

                  <div class="star-rate text-start p-1">
                    <div class="card flex justify-content-center">
                      <Rating v-model="card.value" :cancel="false" />
                    </div>
                  </div>
                </div>
                <div class="star-parent px-2">
                  <p class="main-sale">{{ card.offer }}</p>
                </div>
              </div>
              <div class="flex-center mt-3">
                <router-link :to="'/details/' + card.id" class="main-a mb-3">
                  <div class="btn">
                    <button>{{ card.det }}</button>
                  </div>
                </router-link>
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
export default {
  name: "Viewpage",
  data() {
    return {
      more: "المزيد",
      pay: "العروض",
       cards: [
        {
          id: 1,
          img: imgcard,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "تفاصيل المنتج",
          value: ref("3"),
        },
        {
          id: 2,
          img: imgcard,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "تفاصيل المنتج",
          value: ref("3"),
        },
        {
          id: 3,
          img: imgcard,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "تفاصيل المنتج",
          value: ref("3"),
        },
        {
          id: 4,
          img: imgcard,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "تفاصيل المنتج",
          value: ref("3"),
        },
      ],
      currentCardId: null,
    };
  },
  components: { Rating },
  computed: {
    ...mapGetters(["isFavorite"]),
  },
  methods: {
    ...mapActions(["toggleFavorite"]),
  },
};
</script>

<style scoped>
.more {
  padding: 30px 0;
}
.bg{
  background-color: #f65555 !important;
  border-radius: 50%;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.card-main {
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  border-radius: 8px;
  height: 100%;
  max-width: 280px;
}
.img-top {
  width: 100%;
  height: 200px;

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
  width: 180px;
  padding: 10px;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  background-color: transparent;
  color: var(--main-color);
  font-weight: 700;
  transition: 0.3s;
}
.btn button:hover {
  background-color: var(--main-color);
  color: #fff;
}
.love i {
  left: 5px;
}
</style>
