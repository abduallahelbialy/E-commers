<template>
  <div class="chose">
    <div class="container mt-5">
      <div class="row">
        <div class="d-flex justify-content-around flex-wrap align-items-center  ">
          <div class="welcome d-flex flex-column align-items-center">
            <h2 class="active">{{ wel }}</h2>
            <p class="text-black-50">{{ typ }}</p>
            <router-link to="/login" class="heir">
            <div class="box">
              <div class="user d-flex flex-column align-items-center mt-2">
                <i class="pi pi-user-edit" style="font-size: 2rem"></i>
                <p class="fw-medium fs-6">{{ company }}</p>
              </div>
            </div>
            </router-link>
            <div class="box">
              <div class="user d-flex flex-column align-items-center mt-2">
                <i class="pi pi-compass  " style="font-size: 2rem"></i>
                <p class="fw-medium fs-6">{{ acc }}</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img :src="img" alt="" class=" img-fluid">
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import logo from '../assets/Screenshot 2024-05-10 174649.jpg'
export default {
  name: "chose",
  data (){
    return{
        img:logo,
        wel:"مرحبا بك",
        typ:"يرجى اختيار نوع الحساب",
        company:"حساب شركات",
        acc:"حساب مصنع",
    }
  }
};
</script>

<style scoped>
.chose {
  padding: 50px 0;
}
.bb{
    box-shadow:  30px#ddd;
}
.heir {
  color: black;
}
.box {
  width: 200px;
  height: 80px;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  margin-bottom: 15px;
  transition: 0.3s;
  cursor: pointer;
}
.box i {
  color: #0d4194;
}
.box:hover i {
  color: #fff !important ;
}
.box:hover{
  background-color: var(--main-color);
  color: #fff !important ;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.img-box{
  max-width: 290px;
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width:477px) {
  .img-box{
    display: none;
  }
}
</style>
