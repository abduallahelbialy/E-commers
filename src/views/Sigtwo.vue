<template>
  <div class="one">
    <form @submit.prevent="signup">
      <div v-for="(field, index) in formFields" :key="index" class="mb-3">
        <label :for="field.id" class="form-label">{{ field.label }}</label>
        <template
          v-if="
            field.type === 'text' ||
            field.type === 'email' ||
            field.type === 'number'
          "
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
</template>

<script>
export default {
  data() {
    return {
      formFields: [
        {
          id: "name",
          label: "رقم الجوال",
          type: "number",
          value: "",
          placeholder: "الرجاء ادخال رقم الجوال",
        },
        {
          id: "cuntry",
          label: "الدولة",
          type: "select",
          value: "",
          options: [
            { text: "الرجاء اختيار الدولة", value: "" },
            { text: "المانيا", value: "1" },
            { text: "مصر", value: "2" },
            { text: "ايطاليا", value: "3" },
          ],
        },
        {
          id: "city",
          label: "المنطقة",
          type: "select",
          options: [
            { text: "الرجاء اختيار المنطقة", value: "" },
            { text: "المنصوره", value: "1" },
            { text: "القاهره", value: "2" },
            { text: "الاسكندرية", value: "3" },
          ],
          value: "",
        },
        {
          id: "address",
          label: "رقم السجل التجارى",
          type: "number",
         placeholder:"الرجاء كتابة رقم السجل التجارى",
          value: "",
        },
        {
          id: "password",
          label: "تأكيد كلمة المرور",
          type: "password",
          value: "",
          placeholder: "الرجاء تأكيد كلمة المرور",
        },
      ],
      error: "", // متغير لتخزين رسالة الخطأ
      showPassword: false, // متغير لتحديد ما إذا كانت كلمة المرور مرئية أم لا
      eyeIcon: "pi pi-eye", // الأيقونة الافتراضية للعين المفتوحة
    };
  },
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
      // إذا تم التحقق بنجاح، قم بالانتقال إلى الصفحة الرئيسية
      this.$router.push({ path: "/" });
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
input {
  width: 500px;
}

.form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-position: left;
  padding: 0.375rem 0.75rem;
}
input::placeholder {
  font-size: 12px;
  font-weight: 700;
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
@media (max-width: 477px) {
  input {
    width: 330px;
  }
}
</style>
