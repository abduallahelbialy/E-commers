<template>
  <div class="TwoeDae">
    <div class="container">
      <div class="row">
        <div class="bactwo mb-2" v-for="card in cards" :key="card.id">
          <div class="d-flex justify-content-between flex-wrap align-items-center">
            <div class="one d-flex gap-2 align-items-center">
              <div class="img-not">
                <img :src="img" alt="" class="img-fluid" />
              </div>
              <div class="text d-flex flex-column">
                <h1>رقم الشكوى :12345</h1>
                <p class="text-black-50 fw-medium">
                  هذا النص هو مثال لاى نص اخر
                </p>
                <div class="text-ok">
                  <p>
                    <i class="pi pi-book"></i> الحالة: <span>تم المعالجة</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="twof d-flex flex-column align-items-center">
              <div class="text2">
                <p class="text-black-50">منذ 1 ساعة</p>
              </div>
              <div class="text-ok ">
                <router-link to="/destproblems"
                  >عرض المزيد <i class="pi pi-chevron-left"></i
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/png-clipart-problem-solving-problem-based-learning-educational-technology-ecommerce-platform-collaboration-experience-thumbnail-removebg-preview.png";
export default {
  name: "TwoeDae",
  data() {
    return {
      img: img1,
      cards:[{id:1,},{id:2,},{id:3,},{id:4,}]
    };
  },
};
</script>

<style scoped>
.TwoeDae {
  padding: 30px 0;
}

.bactwo {
  width: 80%;
  height: 150px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  margin: auto;
}
@media (max-width:477px) {
  .bactwo {
    width: 100%;
    height:auto;
   
}
.img-not{
  display: none;
}
}
.img-not {
  width: 150px;
  object-fit: cover;
  transition: 0.3s;
}
.img-not:hover{
  background-color: var(--main-color);
  border-radius: 25%;
}
.text h1 {
  font-size: 18px;
}
.text p {
  font-size: 13px;
}
.text-ok a {
  text-decoration: none;
  color: #000;
}
.text-ok i {
  font-size: 12px;
  color: var(--main-color);
}
.text-ok span {
  color: var(--main-color);
  font-weight: 500;
}
</style>
