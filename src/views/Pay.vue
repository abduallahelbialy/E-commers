<template>
  <div class="pay">
    <div class="container">
      <div class="row">
        <div class="bactwo mt-3">
          <div class="img-pay d-flex justify-content-center align-items-center">
            <img :src="img" alt="" class="img-fluid" />
          </div>
          <div class="d-flex justify-content-center align-items-center mt-3">
            <div class="d-flex flex-column align-items-center">
              <p class="text-black-50">رصيدك الحالى</p>
              <span class="fw-medium text-black fs-3">50000</span>
              <p>ريال سعودى</p>
            </div>
          </div>
         
        </div>
         <div class="cvar2 button mt-3 d-flex justify-content-center">
            <button type="submit">شحن المحفظة</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgpay from "../assets/pay.png";
export default {
  name: "Pay",
  data() {
    return {
      img: imgpay,
    };
  },
};
</script>

<style scoped>
.pay {
  padding: 0px 0;
}
.bactwo {
  width: 80%;
  height: auto;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 9%);
}
@media (width>=767px) {
  .bactwo[data-v-baeb1e67] {
    width: 100%;
    height: 182px;
  }
}
</style>
