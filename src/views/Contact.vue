<template>
  <div class="contactus">
    <div class="container">
      <div class="row">
        <div class="btn-text text-center">
          <p>تواصل معنا</p>
        </div>
        <div
          class="d-flex justify-content-center gap-3 align-items-center flex-wrap"
        >
          <div
            class="conta d-flex justify-content-center flex-column align-items-center"
            v-for="ca in Contacts"
            :key="ca.id"
          >
            <i :class="ca.icon"></i>
            <p>{{ ca.des }}</p>
          </div>
        </div>
        <div class="form-contact d-flex justify-content-center mt-3">
          <form action="">
            <div class="text-center">
              <h1 class="mainsize mt-2">تواصل معنا</h1>
            </div>
            <div class="d-flex justify-content-evenly gap-2 flex-wrap mb-3">
              <div class="group-input d-flex flex-column">
                <label for="name" class="mb-2 text-black-50">الاسم</label>
                <input type="text" id="name" placeholder="ادخل الاسم" />
              </div>
              <div class="group-input d-flex flex-column">
                <label for="number" class="mb-2 text-black-50"
                  >رقم الهاتف</label
                >
                <input type="text" id="number" placeholder="+2010289****" />
              </div>
              <div class="text-rae d-flex flex-column">
                <label for="number" class="mb-2 text-black-50">رسالتك</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="cvar2 button mt-3">
                <button type="submit">ارسال</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      Contacts: [
        {
          id: 1,
          des: "الرياض المملكه العربية السعودية",
          icon: "pi pi-map-marker",
        },
        {
          id: 2,
          des: "+21028924906",
          icon: "pi pi-phone",
        },
        {
          id: 3,
          des: "abduallahelbialy@gmail.com",
          icon: "pi pi-envelope",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contactus {
  padding: 30px 0;
}
.btn-text p {
  background-color: #e4eeff;
  color: var(--main-color);
  width: 120px;
  border-radius: 4px;
  padding: 8px;
  margin: auto;
  cursor: pointer;
  margin-bottom: 15px;
}
.form-contact {
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  width: 780px;
  margin: auto;
  border-radius: 4px;
}
.conta {
  width: 250px;
  height: 100px;

  border-radius: 4px;
  padding: 7px 15px;
  background-color: #e4eeff;
}
.conta i {
  font-size: 35px;
  color: var(--main-color);
}
.group-input input {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  outline: none;
}
.text-rae textarea {
  width: 770px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  height: 200px;
  outline: none;
  resize: none;
}
@media (max-width: 477px) {
  .text-rae textarea {
    width: 300px !important;
  }
  .form-contact {
    width: 335px;
  }
}
@media (max-width: 799px) {
  .text-rae textarea {
    width: 687px;
  }
}
@media (max-width:992px) {
  .text-rae textarea {
    width: 687px;
  }
}
</style>
