<template>
  <div class="favorites">
    <div class="container">
      <div class="row">
        <div class="btn-text  text-center">
            <p>المفضلة</p>
        </div>
        <div v-if="favorites.length === 0" class="empty-favorites">
          <i class="pi pi-search fs-3"></i>
          <p>لم يتم اضافة اى منتجات مفضلة بعد</p>
        </div>
        <div v-else>
            <div class="d-flex justify-content-between flex-wrap gap-3">
            
          <div
            class=" m-auto"
            v-for="card in favorites"
            :key="card.id"
          >
          
            <div class="card-main m-auto">
              <div class="love position-relative d-flex justify-content-end">
                <button
                  class="position-absolute p-2 z-2 fs-3 pi pi-times bg-transparent border-0 text-danger"
                  aria-label="Remove Favorite"
                  @click="toggleFavorite(card)"
                >
                  <i class="pi pi-heart-fill"></i>
                </button>
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Rating from 'primevue/rating';

export default {
  name: 'Favorites',
  components: { Rating },
  computed: {
    ...mapGetters(['favorites']),
  },
  methods: {
    ...mapActions(['toggleFavorite']),
  },
};
</script>

<style scoped>
.favorites {
  padding: 30px 0;
}
.btn-text p{
    background-color: #e4eeff;
    color: var(--main-color);
    width: 120px;
    border-radius: 4px;
    padding: 8px;
    margin: auto;
    cursor: pointer;
    margin-bottom: 15px;
}
.empty-favorites {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  font-size: 1.5rem;
  color: #888;
}
.empty-favorites i {
  font-size: 3rem;
  margin-bottom: 1rem;
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
</style>
