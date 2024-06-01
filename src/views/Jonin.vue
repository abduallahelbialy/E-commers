<template>
  <div
    class="jonin"
    :style="{
      display:
        currentPath === '/login' ||
        currentPath === '/chose' ||
        currentPath === '/signup' ||
        currentPath === '/vild' ||
        currentPath === '/phone'
          ? 'none'
          : '',
    }"
  >
    <div class="container">
      <div class="row">
        <div class="ove">
          <div class="d-flex justify-content-center">
            <div class="imgf">
              <img :src="fo" alt="" class="img-fluid" />
            </div>
            <div class="">
              <div class="gon d-flex flex-column align-items-center">
                <div class="tittle text-center p-2">
                  <h1>{{ jon }}</h1>
                  <p>
                    {{des}}
                  </p>
                </div>
                <form action="">
                  <div class="emai">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="البريد الالكترونى"
                    />
                  </div>
                  <div class="emai mt-3 mb-2 text-center">
                    <button>{{sub}}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../assets/16963436029084607.png";
export default {
  name: "jonin",
  data() {
    return {
      fo: img,
      des:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل  هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد  الحروف التى يولدها التطبيق.",
      sub:"اشتراك",
      jon:"انضم الى نشرة اخبارنا",
      currentPath: window.location.pathname,
    };
  },
  created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
  },
};
</script>

<style scoped>
.jonin {
  padding: 30px 0;
}
.gon {
  background-color: #cbc9c9;
  border-radius: 4px;
  padding: 7px;
}
.ove {
  max-height: 235px;
  overflow: hidden;
}
.emai input {
  width: 400px;
  padding: 9px;
  border: none;
  outline: none;
  border-radius: 4px;
}
.emai button {
  width: 400px;
  padding: 9px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--main-color);
  color: #fff;
}
input::placeholder{
  font-size: 13px;
}
@media (max-width: 477px) {
  .emai input,
  .emai button {
    width: 200px;
  }
  .ove {
    max-height: 400px;
  }
  .imgf {
    display: none;
  }
}
@media (max-width: 799px) {
  .emai input,
  .emai button {
    width: 200px;
  }
  .ove {
    max-height: 400px;
  }
  .imgf {
    display: none;
  }
}
@media (max-width: 992px) {
  .emai input,
  .emai button {
    width: 200px;
  }
  .ove {
    max-height: 400px;
  }
  .imgf {
    display: none;
  }
}
@media (max-width: 1024px) {
  .emai input,
  .emai button {
    width: 200px;
  }
  .ove {
    max-height: 400px;
  }
  .imgf {
    display: none;
  }
}
.tittle h1 {
  font-size: 25px;
}
.tittle p {
  font-size: 12px;
  line-height: 2;
  font-weight: 700;
}
</style>
