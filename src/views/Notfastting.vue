<template>
  <div class="Notfastting">
    <div class="container">
        <div class="row">
<div class="bactwo">
    <div class="d-flex justify-content-between p-2">
        <div class="post d-flex flex-column align-items-start">
            <h1>الاعلانات</h1>
            <p class=" text-black-50">اعلانات,عروض,اشياء اخرى</p>
        </div>
 <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
    </div>
    </div>
</div>
        </div>
    </div>
  </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch';
import { ref } from 'vue';

export default {
name:"Notfastting",
data (){
    return{
        checked :ref(false)
    }
},
components:{InputSwitch}
}
</script>

<style scoped>
.Notfastting{
    padding: 20px 0;
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
.post h1{
    font-size: 18px;
}
</style>