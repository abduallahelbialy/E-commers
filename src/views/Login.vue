<template>
  <div class="login">
    <div class="container mt-5">
      <div class="row">
        <div
          class="d-flex justify-content-around gap-2 flex-wrap align-items-center"
        >
          <div class="one">
            <h1 class="text-center mb-3 active m-auto">{{ wel }}</h1>
            <form @submit.prevent="login">
              <h2 class="mainsize">{{ log }}</h2>
              <p class="mt-2 text-black-50 mainsize2">
                {{ pleca }}
              </p>
              <div class="mb-3">
                <label for="username" class="form-label fw-medium">{{
                  user
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="username"
                  placeholder="الرجاءادخال اسم المستخدم"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label fw-medium">{{
                  mail
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  v-model="email"
                  placeholder="الرجاء ادخال رقم الجوال / البريد الالكترونى"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label fw-medium">{{
                  pass
                }}</label>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  class="form-control"
                  id="password"
                  v-model="password"
                  placeholder="الرجاء ادخال كلمة المرور"
                />
                <div class="eya" @click="togglePasswordVisibility">
                  <i :class="eyeIcon"></i>
                </div>
              </div>
              <div class="mb-3 text-start">
                <router-link to="#">
                  <p class="mt-2 text-black-50 mainsize2">
                    {{ forgt }}
                  </p>
                </router-link>
              </div>
              <div class="mb-3 text-center">
                <button type="submit" class="btn btn-primary btns">
                  {{ log }}
                </button>
              </div>
              <div class="mb-3 text-center">
                <p class="mt-2 text-black-50 mainsize2">
                  {{ no }}
                  <router-link to="/signup" class="heir">{{ hier }}</router-link>
                </p>
              </div>
              <p v-if="error" class="text-danger error">{{ error }}</p>
              <!-- عرض رسالة الخطأ إذا كانت هناك -->
            </form>
          </div>
          <div class="tow">
            <div class="img-box">
              <img :src="img" alt="" class="img-fluid" />
            </div>
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
import foot from "../assets/mask.png";

export default {
  data() {
    return {
      img: logo,
      footer: foot,
      wel: "مرحبا بك",
      log: "تسجيل دخول",
      pleca: " برجاء ادخال بيانات حسابك حتى تتمكن الدخول",
      user: "اسم المستخدم",
      mail: "رقم الجوال/ البريد الالكترونى",
      pass: "كلمة المرور",
      forgt: " هل نسيت كلمة المرور؟",
      no: "ليس لديك حساب؟",
      hier: "اضغط هنا",
      email: "",
      password: "",
      username: "",
      error: "", // متغير لتخزين رسالة الخطأ
      showPassword: false, // متغير لتحديد ما إذا كانت كلمة المرور مرئية أم لا
      eyeIcon: "pi pi-eye", // الأيقونة الافتراضية للعين المفتوحة
    };
  },

  methods: {
    login() {
      // استرجاع معلومات التسجيل من localStorage
      const storedSignupData = localStorage.getItem("signupData");

      if (storedSignupData) {
        const {
          email: storedEmail,
          password: storedPassword,
          username: storeUsername,
        } = JSON.parse(storedSignupData);
        // التحقق من مطابقة بيانات تسجيل الدخول مع بيانات التسجيل المخزنة في localStorage
        if (
          this.email !== storedEmail ||
          this.password !== storedPassword ||
          this.username !== storeUsername
        ) {
          this.error = "تأكد من صحة بيانات الدخول";
          return;
        }
      } else {
        this.error = "لم يتم تسجيل حساب بعد";
        return;
      }

      // إذا كانت البيانات صحيحة، يمكنك توجيه المستخدم إلى الصفحة الرئيسية أو أي صفحة أخرى
      this.$router.push("/");
    },
    togglePasswordVisibility() {
      // تغيير حالة إظهار كلمة المرور والأيقونة المرتبطة بها
      this.showPassword = !this.showPassword;
      this.eyeIcon = this.showPassword ? "pi pi-eye-slash" : "pi pi-eye";
    },
  },
};
</script>

<style scoped>
.login {
  padding: 30px 0;
}
input {
  width: 400px;
}
input::placeholder {
  font-size: 12px;
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
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.btns {
  width: 400px;
  background-color: var(--main-color);
  outline: none;
  font-size: 15px;
}
.heir {
  color: var(--main-color);
  font-weight: 700;
}
.error {
  font-size: 15px;
}
.img-box {
  max-width: 290px;
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 477px) {
  .img-box {
    display: none;
  }
  input {
    width: 330px;
  }
  .btns {
    width: 330px;
  }
}
</style>
