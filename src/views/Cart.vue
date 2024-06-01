<template>
  <div>
    <div class="cart">
      <div class="container">
        <div class="row">
          <h1 class="mt-1">سلة المشتريات</h1>

          <div
            v-if="cartItems.length"
            class="d-flex justify-content-between flex-wrap"
          >
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="d-flex justify-content-between flex-wrap mb-3"
            >
              <div class="cart-cart m-auto mb-4">
                <div class="img-cart">
                  <img :src="item.img" alt="Product Image" class="img-fluid" />
                </div>
                <div class="texts">
                  <h3 class="text-center mt-3">{{ item.title }}</h3>
                  <p class="text-center">{{ item.price }}</p>
                  <p class="text-center fw-medium">
                    الكمية: <span class="text-danger">{{ item.quantity }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-else>
            <p class="text-center fs-3">السلة فارغة</p>
          </div>

          <div class="btn-pay text-center mt-4" v-if="!show">
            <button @click="toggleShow">{{ pay }}</button>
          </div>

          <div class="card-pay mt-2" v-if="show">
            <h2 class="text-center">بيانات الاستلام</h2>
            <p class="text-center">
              الرجاء ملء البيانات التالية لاتمام عملية الشراء
            </p>
            <div
              class="grop-radi d-flex justify-content-center gap-3 flex-wrap"
            >
              <div class="form-chemck d-flex gap-2" @click="activeTap='1'" :class="[activeTap ==='1'?'active':'']">
                <input
                  class="form-check-input fw-medium"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  استلام بواسطة جهز
                </label>
              </div>
              <div class="form-chemck d-flex gap-2" @click="activeTap='2'" :class="[activeTap ==='2'?'active':'']">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  استلام بواسطة شركة شحن
                </label>
              </div>
            </div>
            <div class="all-tap" v-if="activeTap==='1'" >

            <div
              class="grop-forms d-flex justify-content-center flex-column flex-wrap"
            >
              <div class="d-flex justify-content-center gap-4 mt-4 flex-wrap">
                <div class="one mb-3 d-flex flex-column">
                  <label for="">اسم المستلم</label>
                  <input type="text" placeholder="الرجاء ادخال اسم المستخدم" />
                </div>
                <div class="one mb-3 d-flex flex-column">
                  <label for="">رقم الجوال</label>
                  <input type="number" placeholder="الرجاء ادخال رقم الجوال" />
                </div>
              </div>
              <div class="d-flex justify-content-center gap-4 mt-1 flex-wrap">
                <div class="one mb-3 d-flex flex-column">
                  <label for="">المدينة</label>
                  <input type="text" placeholder="الرجاء ادخال اسم المدينة" />
                </div>
                <div class="one mb-3 d-flex flex-column">
                  <label for="">تاريج الاستلام</label>
                  <input
                    type="number"
                    placeholder="الرجاء ادخال رقم الاستلام"
                  />
                </div>
              </div>
            </div>
            <div
              class="grop-radi d-flex justify-content-center gap-3 mb-2 flex-wrap"
            >
              <div class="addres d-flex flex-column">
                <label for="">العنوان</label>
                <input type="text" placeholder="الرجاء ادخال العنوان" />
              </div>
            </div>
            <div
              class="grop-radi d-flex justify-content-center gap-3 flex-wrap"
            >
              <div class="d-flex flex-column">
                <label for="" class="me-2">ملاحظاتك</label>
                <div class="card">
                  <Editor v-model="value" editorStyle="height: 150px" />
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="form-chemcsk d-flex gap-2">
                <input
                  class="form-check-input fw-medium"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked
                />
                <label class="form-checsk-label" for="flexRadioDefault1">
                  <i class="pi pi-paypal"></i>دفع الكترونى
                </label>
              </div>
              <div class="form-chemck d-flex gap-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  <i class="pi pi-car"></i> دفع بواسطة الشركه
                </label>
              </div>
            </div>
            .
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 620px; height: auto">
                <div class="destext border-bottom">
                  <p class="fw-semibold p-1">ملخص الطلب:</p>
                </div>
                <div
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>قيمة الطلب</p>
                  <p>60.00 رس</p>
                </div>
                <div
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>رسوم التوصيل</p>
                  <p>10.00 رس</p>
                </div>
                <div
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>القيمة المضافة</p>
                  <p>00.00 رس</p>
                </div>
                <div
                  class="onetextw p-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p class="text-black-50">الاجمالى</p>
                  <p>60.00 رس</p>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="card flex justify-content-center">
                <div class="btn-send">
                  <button label="ارسال الطلب" @click="visible = true">
                    ارسال الطلب
                  </button>
                </div>
                <Dialog
                  v-model:visible="visible"
                  modal
                  header=""
                  :style="{ width: '30vw' }"
                  :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
                >
                  <div class="m-0 text-center scss">
                    <i class="pi pi-check-circle isch" style="font-size: 4rem"></i>
                    <h1 class="mainsize  fw-medium mt-2">تم ارسال طلبك بنجاح</h1>
                    <div class="btn-home  d-flex gap-3 justify-content-center">
                      <router-link to="/Destilrequest">
                      <button style="background-color:#004889; color:#fff;"><i class="pi pi-arrow-circle-right"></i>متابعة طلبى </button>
                      </router-link>
                      <router-link to="/">
                      <button>الرئيسية</button>
                      </router-link>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
            </div>
            <div class="all-tap" v-if="activeTap==='2'" >
 <div
              class="grop-forms d-flex justify-content-center flex-column flex-wrap"
            >
            <div class=" d-flex justify-content-center mt-3">

            <div class="img-co d-flex justify-content-between  align-items-center mb-3   flex-wrap  ">
            <div class="one-company d-flex m-auto mb-2 ">
              <input type="radio">
              <img :src="imga" alt="" class=" img-fluid imgcc">
              <div class="texs">
              <p class=" fw-medium">شركة البيلى</p>
          <Rating v-model="value" />
              </div>
              </div>
            <div class="one-company d-flex m-auto mb-2 ">
              <input type="radio">
              <img :src="imga" alt="" class=" img-fluid imgcc">
              <div class="texs">
              <p class=" fw-medium">شركة البيلى</p>
          <Rating v-model="value" />
              </div>
              </div>
            <div class="one-company d-flex m-auto">
              <input type="radio">
              <img :src="imga" alt="" class=" img-fluid imgcc">
              <div class="texs">
              <p class=" fw-medium">شركة البيلى</p>
          <Rating v-model="value" />
              </div>
              </div>
           

            </div>
            </div>
            </div>
            <div
              class="grop-forms d-flex justify-content-center flex-column flex-wrap"
            >
              <div class="d-flex justify-content-center gap-4 mt-4 flex-wrap">
                <div class="one mb-3 d-flex flex-column">
                  <label for="">اسم المستلم</label>
                  <input type="text" placeholder="الرجاء ادخال اسم المستخدم" />
                </div>
                <div class="one mb-3 d-flex flex-column">
                  <label for="">رقم الجوال</label>
                  <input type="number" placeholder="الرجاء ادخال رقم الجوال" />
                </div>
              </div>
              <div class="d-flex justify-content-center gap-4 mt-1 flex-wrap">
                <div class="one mb-3 d-flex flex-column">
                  <label for="">المدينة</label>
                  <input type="text" placeholder="الرجاء ادخال اسم المدينة" />
                </div>
                <div class="one mb-3 d-flex flex-column">
                  <label for="">تاريج الاستلام</label>
                  <input
                    type="number"
                    placeholder="الرجاء ادخال رقم الاستلام"
                  />
                </div>
              </div>
            </div>
            <div
              class="grop-radi d-flex justify-content-center gap-3 mb-2 flex-wrap"
            >
              <div class="addres d-flex flex-column">
                <label for="">العنوان</label>
                <input type="text" placeholder="الرجاء ادخال العنوان" />
              </div>
            </div>
            <div
              class="grop-radi d-flex justify-content-center gap-3 flex-wrap"
            >
              <div class="d-flex flex-column">
                <label for="" class="me-2">ملاحظاتك</label>
                <div class="card">
                  <Editor v-model="value" editorStyle="height: 150px" />
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="form-chemcsk d-flex gap-2">
                <input
                  class="form-check-input fw-medium"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked
                />
                <label class="form-checsk-label" for="flexRadioDefault1">
                  <i class="pi pi-paypal"></i>دفع الكترونى
                </label>
              </div>
              <div class="form-chemck d-flex gap-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  <i class="pi pi-car"></i> دفع بواسطة الشركه
                </label>
              </div>
            </div>
            .
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 620px; height: auto">
                <div class="destext border-bottom">
                  <p class="fw-semibold p-1">ملخص الطلب:</p>
                </div>
                <div
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>قيمة الطلب</p>
                  <p>60.00 رس</p>
                </div>
                <div
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>رسوم التوصيل</p>
                  <p>10.00 رس</p>
                </div>
                <div
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>القيمة المضافة</p>
                  <p>00.00 رس</p>
                </div>
                <div
                  class="onetextw p-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p class="text-black-50">الاجمالى</p>
                  <p>60.00 رس</p>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="card flex justify-content-center">
                <div class="btn-send">
                  <button label="ارسال الطلب" @click="visible = true">
                    ارسال الطلب
                  </button>
                </div>
                <Dialog
                  v-model:visible="visible"
                  modal
                  header=""
                  :style="{ width: '30vw' }"
                  :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
                >
                  <div class="m-0 text-center scss">
                    <i class="pi pi-check-circle isch" style="font-size: 4rem"></i>
                    <h1 class="mainsize  fw-medium mt-2">تم ارسال طلبك بنجاح</h1>
                    <div class="btn-home  d-flex gap-3 justify-content-center">
                      <router-link to="/Destilrequest" >
                      <button style="background-color:#004889; color:#fff;"><i class="pi pi-arrow-circle-right"></i>متابعة طلبى </button>
                      </router-link>
                      <router-link to="/">
                      <button>الرئيسية</button>
                      </router-link>
                    </div>
                  </div>
                </Dialog>
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
import { mapGetters, mapActions } from "vuex";
import Editor from "primevue/editor";
import { ref } from "vue";
import Dialog from "primevue/dialog";
import img from "../assets/compay.png";
import Rating from 'primevue/rating';

export default {
  name: "Cart",
  data() {
    return {
      imga:img,
      pay: "شراء",
      show: false,
      value:ref(""),
              activeTap:"1",

      visible: ref(false),
      value: ref("اكتب ملاحظات ان وجدت"),
    };
  },
  components: { Editor, Dialog,Rating },
  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    toggleShow() {
      this.show = !this.show;
      this.pay = this.show ? "" : "شراء"; // تغيير النص لزر الشراء
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 30px 0;
}
.cart-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}
.cart-item img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
input::placeholder{
  font-size: 12px;
}
.scss .isch{
  color: var(--main-color);
}
.scss h1{
  font-size: 30px !important;
}
.cart-cart {
  padding: 5px;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  border-radius: 8px;
  height: 100%;
  max-width: 100%;
}

.btn-send Button {
  width: 220px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  font-size: 13px;
  background-color: var(--main-color);
}
.texts h3 {
  color: var(--main-color);
}
.btn-pay button {
  width: 85px;
  padding: 5px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  transition: 0.3s;
}
.onetext {
  font-size: 14px;
  font-weight: 700;
  transition: 0.3s;
}
.btn-home button:first-child{
  background-color: var(--main-color);
  display: flex;
  gap:10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 4px;
  font-size: 18px;
  width: 120px;
}
.btn-home button:last-child{
   display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: #cacaca;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 4px;
  font-size: 18px;
  width: 120px;
}
.onetext:hover {
  background-color: #e4eeff;
}
.onetextw {
  font-size: 14px;
  font-weight: 700;
  background-color: #e4eeff;
}
.onetextw:last-child {
  color: var(--main-color);
}
.btn-pay button:hover {
  background-color: var(--main-color);
  color: #fff;
}
.one {
  width: 300px;
}
.addres {
  width: 620px;
}

.ql-snow .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 17px !important;
  position: relative;
  width: 100%;
}

.addres input {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
}
.desc {
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 0 3px;
}
.one input {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;

  outline: none;
}
.card-pay {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

</style>
