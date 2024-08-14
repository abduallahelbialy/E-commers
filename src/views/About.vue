<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div
          class="who d-flex justify-content-center flex-column align-items-center"
        >
          <div class="img-who">
            <img :src="img" alt="" class="img-fluid" />
          </div>
            <div class="one mt-3">
              <p class=" text-center  fw-medium ">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق، إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                أخطاء لغوية، مولد...هذا النص هو مثال لنص <br/>يمكن أن يستبدل في نفس
                المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة <br/>إلى زيادة عدد
                الحروف التى يولدها التطبيق، إذا كنت تحتاج إلى عدد أكبر من
                الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
                النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد...
              </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/imgrquest.png";
export default {
  name: "About",
  data() {
    return {
      img: img1,
    };
  },
};
</script>

<style scoped>
.about {
  padding: 20px 0;
}
.img-who {
  width: 150px;
  height: 150px;
}

.one p{
font-size: 22px;
}
@media (max-width:477px) {
    .one p{
font-size: 12px;
}
}
</style>
