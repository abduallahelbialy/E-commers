<template>
  <div class="detils-problem">
    <div class="container">
      <div class="row">
        <div class="bactwo">
          <div class="d-flex gap-2">
            <div class="img-not">
              <img :src="img" alt="" class="img-fluid" />
            </div>
            <div class="d-flex justify-content-between flex-grow-1">
              <div class="d-flex flex-column gap-2">
                <h1 class="mainsize">رقم الشكوى :1234</h1>
                <h1 class="mainsize">تاريخ الشكوى :30/5/2024</h1>
              </div>
              <p>منذ 1 ساعة</p>
            </div>
          </div>
          <div class="d-flex gap-2">
            <div class="img-nota">
              <!-- <img :src="img" alt="" class="img-fluid" /> -->
            </div>
            <div class="d-flex justify-content-between flex-grow-1">
              <div class="d-flex flex-column gap-2">
                <h1 class="mainsize pe-5 mt-3 deti">تفاصيل الشكوى :</h1>
                <div class="text-center mb-3">
                  <p class="tss ">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من
                    الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
                    النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد...هذا النص هو
                    مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                    النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                    العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
                    يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح
                    لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو
                    مقسما ولا يحوي أخطاء لغوية، مولد...
                  </p>
                </div>
                <div class="d-flex gap-2 flex-wrap">
                  <div class="img-nots">
                    <img :src="img" alt="" class="img-fluid" />
                  </div>
                  <div class="img-nots">
                    <img :src="img" alt="" class="img-fluid" />
                  </div>
                  <div class="img-nots">
                    <img :src="img" alt="" class="img-fluid" />
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
import img1 from "../assets/png-clipart-problem-solving-problem-based-learning-educational-technology-ecommerce-platform-collaboration-experience-thumbnail-removebg-preview.png";

export default {
  name: "detils",
  data() {
    return {
      img: img1,
    };
  },
};
</script>

<style scoped>
.detils-problem {
  padding: 30px 0;
}
.bactwo {
  width: 80%;
  height: auto;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  margin: auto;
}
.img-not {
  width: 100px;
  object-fit: cover;
  border: 5px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  transition: 0.3s;
}
.img-not:hover {
  background-color: var(--main-color);
}
.tss{
    font-size: 20px;
    font-weight: 500;
}
.img-nots {
  width: 100px;
  object-fit: cover;
  border: 5px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  transition: 0.3s;
}
.img-nots:hover {
  background-color: var(--main-color);
}
.img-nota {
  width: 100px;
}
@media (max-width: 477px) {
  .bactwo {
    width: 100%;
  }
  .img-not {
    display: none;
  }
  .tss {
    font-size: 13px;
    font-weight: 500;
}
.deti{
  text-align: center;
  padding-right: 0 !important;
}
}
</style>
