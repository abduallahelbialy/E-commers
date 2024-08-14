<template>
  <div class="signup">
    <div class="container mt-5">
      <div class="row">
        <!-- //tittle// -->
        <div class="text-center">
          <div class="img-box m-auto">
            <img :src="img" alt="" class="img-fluid" />
          </div>
          <div class="text">
            <h1 class="welcome active mt-2 fw-medium m-auto mb-3">{{ wel }}</h1>
            <h2 class="mainsize">{{ neww }}</h2>
            <p class="mt-2 text-black-50 mainsize2 fw-medium">
              {{ plese }}
            </p>
          </div>
        </div>
        <!-- ///form// -->
        <div
          class="d-flex justify-content-evenly gap-1 flex-wrap align-items-center"
        >
          <div class="one">
            <form @submit.prevent="signup">
              <div
                v-for="(field, index) in formFields"
                :key="index"
                class="mb-3"
              >
                <label :for="field.id" class="form-label">{{
                  field.label
                }}</label>
                <template
                  v-if="field.type === 'text' || field.type === 'email'"
                >
                  <input
                    :type="field.type"
                    class="form-control"
                    :id="field.id"
                    v-model="field.value"
                    :placeholder="field.placeholder"
                  />
                </template>
                <template v-else-if="field.type === 'password'">
                  <div class="input-group">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      :id="field.id"
                      v-model="field.value"
                      :placeholder="field.placeholder"
                    />
                    <div class="eya" @click="togglePasswordVisibility">
                      <i :class="eyeIcon"></i>
                    </div>
                  </div>
                </template>
                <template v-else-if="field.type === 'select'">
                  <select
                    :id="field.id"
                    class="form-select"
                    aria-label="Default select example"
                    v-model="field.value"
                  >
                    <option
                      v-for="(option, optionIndex) in field.options"
                      :key="optionIndex"
                      :value="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </template>
              </div>
            </form>
          </div>
          <Sigtwo />
        </div>
        <form @submit.prevent="signup">
          <div class="mb-3 text-center">
            <button type="submit" class="btn btn-primary btns mt-2">
              {{ log }}
            </button>
          </div>
          <div class="mb-3 text-center">
            <p class="mt-2 text-black-50 mainsize2">
              {{ no }}
              <router-link to="/login" class="heir">{{ hier }}</router-link>
            </p>
          </div>
          <p v-if="error" class="text-danger text-center">{{ error }}</p>
          <!-- عرض رسالة الخطأ إذا كانت هناك -->
        </form>
      </div>
    </div>
    <div class="img-footer">
      <img :src="footer" alt="" class="img-fluid" />
    </div>
  </div>
</template>

<script>
import logo from "../assets/Screenshot 2024-05-10 174649.jpg";
import Sigtwo from "../views/Sigtwo.vue";
import foot from "../assets/mask.png";
import { useUserStore } from '../stores/store';

export default {
  data() {
    return {
      img: logo,
      wel: "مرحبا بك",
      neww: "حساب جديد",
      log: "تسجيل حساب",
      plese: "برجاء ادخال بيانات التالية حتى تتمكن من انشاء حساب جديد",
      no:" لديك حساب بالفعل؟",
      hier:"اضغط هنا",
      footer: foot,

      formFields: [
        {
          id: "username",
          label: "اسم الشركة / اسم المستخدم",
          type: "text",
          value: "",
          placeholder: "الرجاء ادخال اسم الشركه /المستخدم",
        },
        {
          id: "email",
          label: "البريد الإلكتروني",
          type: "email",
          value: "",
          placeholder: "الرجاء ادخال البريد الالكترونى",
        },
        {
          id: "city",
          label: "المدينة",
          type: "select",
          options: [
            { text: "الرجاء اختيار المدينة", value: "" },
            { text: "المنصوره", value: "1" },
            { text: "القاهره", value: "2" },
            { text: "الاسكندرية", value: "3" },
          ],
          value: "",
        },
        {
          id: "address",
          label: "العنوان",
          type: "select",
          options: [
            { text: "الرجاء تحديد العنوان على الخريطة", value: "" },
            { text: "المنصوره", value: "1" },
            { text: "القاهره", value: "2" },
            { text: "الاسكندرية", value: "3" },
          ],
          value: "",
        },
        {
          id: "password",
          label: "كلمة المرور",
          type: "password",
          value: "",
          placeholder: "الرجاء ادخال كلمة المرور",
        },
      ],
      error: "", // متغير لتخزين رسالة الخطأ
      showPassword: false, // متغير لتحديد ما إذا كانت كلمة المرور مرئية أم لا
      eyeIcon: "pi pi-eye", // الأيقونة الافتراضية للعين المفتوحة
    };
  },
  components: { Sigtwo },
  methods: {
    signup() {
      // التحقق من صحة المعلومات
      const requiredFields = this.formFields.filter(
        (field) => field.type !== "select"
      );
      const incompleteFields = requiredFields.filter(
        (field) => !field.value.trim()
      );
      if (incompleteFields.length > 0) {
        this.error = "يرجى إدخال جميع الحقول";
        return; // توقف إذا لم يتم إدخال كافة الحقول
      }
      // التحقق من الحقول الاختيارية
      if (
        this.formFields.some((field) => field.type === "select" && !field.value)
      ) {
        this.error = "الرجاء اختيار المدينة والعنوان";
        return;
      }
      // تخزين معلومات التسجيل في localStorage
      localStorage.setItem(
        "signupData",
        JSON.stringify({
          email: this.formFields.find((field) => field.id === "email").value,
          password: this.formFields.find((field) => field.id === "password")
            .value,
          username: this.formFields.find((field) => field.id === "username")
            .value, // تخزين اسم المستخدم أيضًا
        })
      );
      // إذا تم التحقق بنجاح، قم بالانتقال إلى الصفحة الرئيسية
      this.$router.push({ path: "/vild" });
    },
    togglePasswordVisibility() {
      // تغيير حالة إظهار كلمة المرور والأيقونة المرتبطة بها
      this.showPassword = !this.showPassword;
      this.eyeIcon = this.showPassword ? "pi pi-eye-slash" : "pi pi-eye";
    },
  },
     setup() {
    const userStore = useUserStore();
    return { userStore };
  },
};
</script>

<style scoped>
.signup {
  padding: 30px 0;
}
.img-box {
  max-width: 90px;
  width: 100%;
  display: block;
}
input {
  width: 500px;
}
.heir {
  color: var(--main-color);
  font-weight: 700;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-position: left;
  padding: 0.375rem 0.75rem;
}
.eya {
  position: relative;
  cursor: pointer;
}
.eya i {
  position: absolute;
  left: 7px;
  bottom: 7px;
}
.btns {
  width: 400px;
  background-color: var(--main-color);
  outline: none;
  font-size: 15px;
}
input::placeholder {
  font-size: 12px;
  font-weight: 700;
}
@media (max-width: 477px) {
  input {
    width: 330px;
  }
  .btns{
    width: 200px;
  }
}
</style>
