<template>
  <div class="sereen">
    <div class="container">
        <div class="row">
            <div class="scre d-flex justify-content-center ">
                <img :src="img" alt="" class=" img-fluid">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import screenImage from "../assets/Screenot.png"
export default {
name:"Screen",
data (){
    return{
        img:screenImage,

    }
}
}
</script>

<style scoped>
.sereen{
    padding: 30px 0;
}
</style>