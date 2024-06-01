<template>
  <div class="num">
    <div class="container mt-5">
      <div class="row">
        <div
          class="d-flex justify-content-around gap-2 flex-wrap align-items-center"
        >
          <div class="welcome d-flex flex-column align-items-center">
            <h2 class="active">{{ wel }}</h2>
            <div class="img-box2">
              <img :src="nn" alt="" class="img-fluid" />
            </div>
            <h1 class="mainsize mt-3">{{ num }}</h1>
            <p class="text-black-50 mainsize2 fw-medium">
              {{ plese }}
            </p>
            <router-link to="#" class="heir">
              <div class="box">
                <div
                  class="user d-flex gap-2 justify-content-center align-items-center"
                >
                  <p class="fw-medium fs-6 mt-2">{{ phone }}</p>
                  <i class="pi pi-phone" style="font-size: 1.2rem"></i>
                </div>
              </div>
            </router-link>
            <router-link to="#" class="heir">
              <div class="box">
                <div
                  class="user d-flex gap-2 justify-content-center align-items-center"
                >
                  <p class="fw-medium fs-6 mt-2">{{ mail }}</p>
                  <i class="pi pi-envelope" style="font-size: 1.2rem"></i>
                </div>
              </div>
            </router-link>
            <router-link to="/phone" class="heir">
              <div class="box-but">
                <button>{{ok}}</button>
              </div>
            </router-link>
          </div>
          <div class="img-box">
            <img :src="img" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <div class="img-footer">
      <img :src="footer" alt="" class="img-fluid" />
    </div>
  </div>
</template>

<script>
import logo from "../assets/Screenshot 2024-05-10 174649.jpg";
import num from "../assets/num.png";
import foot from "../assets/mask.png";

export default {
  name: "vild",
  data() {
    return {
      img: logo,
      wel: "مرحبا بك",
      plese: " الرجاء اختيار وسيلةاستلام الرمز",
      num:"رمز التفعيل",
      phone:"رقم الجوال",
      ok:"تأكيد",
      mail:"البريد الالكترونى",
      nn: num,
      footer: foot,
    };
  },
};
</script>

<style scoped>
.num {
  padding: 50px 0;
}
.bb {
  box-shadow: 30px#ddd;
}
.heir {
  color: #608ace;
}
.box {
  width: 400px;
  height: 45px;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  margin-bottom: 15px;
  transition: 0.3s;
  cursor: pointer;
}
.box-but button {
  width: 400px;
  height: 45px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: var(--main-color);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
.box i {
  color: #0d4194;
}
.box:hover i {
  color: #fff !important ;
}
.box:hover {
  background-color: var(--main-color);
  color: #fff !important ;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.img-box {
  max-width: 390px;
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 477px) {
  .img-box {
    display: none;
  }
  .box {
    width: 200px;
  }
  .box-but button {
    width: 200px;
  }
}
</style>
