<template>
  <div class="Language">
    <div class="container">
      <div class="row">
        <div
          class="img-language d-flex justify-content-center align-items-center"
        >
          <img :src="img" alt="" class="img-fluid" />
        </div>
        <div class="flay">
          <div class="fa justify-content-center d-flex align-items-center">
            <img :src="imgt" alt="" class="img-fluid" />
          </div>
        </div>
        
        <div class="two-bnt d-flex justify-content-center gap-3 flex-wrap mt-3">
          <button>اللغة العربية</button>
          <button>English</button>
        </div>
        <div class="flar">
          <div class="ar justify-content-center d-flex align-items-center">
            <img :src="imga" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/langa.png";
import img2 from "../assets/usa.png";
import img3 from "../assets/ksa.png";
export default {
  name: "Langw",
  data() {
    return {
      img: img1,
      imgt: img2,
      imga: img3,
    };
  },
};
</script>

<style scoped>
.Language {
  padding: 20px 0;
}
.two-bnt button:first-child {
  border: none;
  padding: 11px;
  width: 150px;
  border-radius: 6px;
  outline: none;
  color: #fff;
  background-color: var(--main-color);
}
.two-bnt button:last-child {
  border: none;
  padding: 11px;
  width: 150px;
  border-radius: 6px;
  outline: none;
  color: var(--main-color);
  background-color: #ececec;
}
.flay {
  width: 50px;
  height: 50px;
  margin: auto;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  left: -85px;
  top: 25px;
}

.flar {
  width: 50px;
  cursor: pointer;
  height: 50px;
  margin: auto;
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  top: -80px;
    left: 80px;

}
.flar .ar {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 50%;

  top: 50%;
  transform: translate(-50%, -50%);
}
.flay .fa {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 477px) {
 
}
</style>
