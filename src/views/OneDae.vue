<template>
  <div class="oneDae">
    <div class="container">
      <div class="row">
        <div class="m-auto pa">
          <div class="form-group">
            <label for="username">اسم المستخدم</label>
            <input type="text" id="username" v-model="user.username" />
            <div class="position-relative">
              <i class="pi pi-user-edit position-absolute usereidt"></i>
            </div>
            <div class="position-relative">
              <i class="pi pi-user position-absolute usere"></i>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">رقم الجوال</label>
            <input type="text" id="phone" v-model="user.phone" />
            <div class="position-relative">
              <i class="pi pi-mobile position-absolute usere"></i>
            </div>
          </div>
          <div class="form-group">
            <label for="email">البريد الإلكتروني</label>
            <input type="email" id="email" v-model="user.email" />
            <div class="position-relative">
              <i class="pi pi-file-edit position-absolute usereidt"></i>
            </div>
            <div class="position-relative">
              <i class="pi pi-envelope position-absolute usere"></i>
            </div>
          </div>
          <div class="form-group">
            <select class="form-select" aria-label="Default select example">
              <option selected>الدولة</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-select" aria-label="Default select example">
              <option selected>المدينة</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-select" aria-label="Default select example">
              <option selected>المنطقة</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="form-group">
            <label for="address">العنوان</label>
            <input type="text" id="address" v-model="user.address" />
            <div class="position-relative">
              <i class="pi pi-map-marker position-absolute usereidt"></i>
            </div>
          </div>
          <div class="form-group">
            <label for="commercialNumber">رقم السجل التجاري</label>
            <input
              type="text"
              id="commercialNumber"
              v-model="user.commercialNumber"
            />
            <div class="position-relative">
              <i class="pi pi-file-edit position-absolute usereidt"></i>
            </div>
          </div>
          <div class="cvar2 button  d-flex justify-content-center">

          <button @click="saveChanges">حفظ التغييرات</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oneDae",
  data() {
    return {
      user: {
        username: "عبدالله احمد ",
        phone: "050123456",
        email: "abduallahelbialy@gmail.com",
        country: "المملكة العربية السعودية",
        city: "الرياض",
        region: "الرياض",
        address: "شارع الصندوق الأسود الرياض",
        commercialNumber: "01028924906",
      },
    };
  },
  methods: {
    saveChanges() {
      // هنا يمكن إضافة منطق حفظ التغييرات
      alert("تم حفظ التغييرات");
    },
  },
};
</script>

<style scoped>
.oneDae {
  padding: 20px 0;
}

.form-group {
  margin-bottom: 15px;
}
input {
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}
.usereidt {
  left: 5px;
  top: -26px;
  cursor: pointer;
}
.usere {
  top: -26px;
  right: 3px;
  color: var(--main-color);
    cursor: pointer;
}
.pa {
  padding: 0 73px;
}
@media (max-width: 477px) {
  .pa {
    padding: 0 !important;
  }
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px 22px;
  box-sizing: border-box;
}


.form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-position: left;
  padding: 0.375rem 0.75rem;
}
</style>
