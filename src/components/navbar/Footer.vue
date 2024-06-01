<template>
  <div class="footer" :style="{
      display:
        currentPath === '/login' ||
        currentPath === '/chose' ||
        currentPath === '/signup' ||
        currentPath === '/vild' ||
        currentPath === '/phone'
          ? 'none'
          : '',
    }">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-around  flex-wrap-reverse ">
          <div class="img-footer">
            <img :src="imgfooter" alt="" />
            <div class="text-p p-3 text-wrap">
              <p class=" ">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، <br />لقد تم
                توليد هذا النص من مولد النص العربى، حيث يمكنك <br />أن تولد مثل
                هذا النص أو العديد<br />
                من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </p>
            </div>
            <div class="icons m-auto d-flex gap-2 mt-2">
                <i class="pi pi-twitter    " style="font-size:1.5rem"></i>
                <i class="pi pi-youtube   " style="font-size:1.5rem"></i>
                <i class="pi pi-twitch  " style="font-size:1.5rem"></i>
                <i class="pi pi-tiktok " style="font-size:1.5rem"></i>
                <i class="pi pi-facebook" style="font-size:1.5rem"></i>
            </div>
          </div>
          <div class="list-footer d-flex align-items-center">
               <ul class="links">
            <h1 class="active mainsize">{{list}}</h1>
                <li>
                    <router-link to="/">{{home}}</router-link>
                </li>
                <li>
                    <router-link to="/Pay">{{ more }}</router-link>
                </li>
                <li>
                    <router-link to="/Newpay">{{neww}}</router-link>
                </li>
                <li>
                    <router-link to="/Allview">{{shi}}</router-link>
                </li>
               </ul>
              <ul class="links">
                <li>
                    <router-link to="/favorites">{{fav}}</router-link>
                </li>
                <li>
                    <router-link to="/requst">{{req}}</router-link>
                </li>
                <li>
                    <router-link to="/Contact">{{ contact }}</router-link>
                </li>
               
               </ul>
              
            </div>
          <div class="contact-footer">
               <ul class="links">
            <h1 class="active mainsize mb-3">{{ contact }}</h1>
                <li class=" mt-4">
                 <i class="pi pi-map-marker   "></i>  {{skc}}
                </li>
                <li>
                 <i class="pi pi-phone   "></i> {{ num }}
                </li>
                <li>
                 <i class="pi pi-google  "></i> {{mail}}
                </li>
                
               </ul>
            </div>
        </div>
        <div class="mm">
        <p class="text-center mt-4  text-white">{{allL}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../assets/logonav.webp";
export default {
  name: "footer",
  data() {
    return {
      imgfooter: img,
      shi:"العروض",
      req:"طلباتى",
      fav:"المفضلة",
      list:"القائمة",
      neww:"جديدنا",
      more:"الاكثر مبيعا",
      skc:" المملكة العربية السعودية- الرياض ",
      mail:"abduallahelbialy@gmail.com",
      num:"201028924906+",
      contact:"تواصل معنا",
      home:"الرئيسية",
      allL:"جميع الحقوق محفوظة لمؤسسة جهز @2024",
            currentPath: window.location.pathname,
    };
  },
  created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
    
}
};
</script>

<style scoped>
.footer {
  background-color: var(--main-color);
  padding: 90px 0;
  margin-top: -100px;
}
.img-footer img {
  width: 100%;
  max-width: 200px;
}
.text-p {
  font-size: 12px;
  color: #fff;
}
.list-footer {
  color: #fff;
}
.active {
  border-bottom: 4px solid #fff;
  width: fit-content;
  padding: 5px;
}
.links li{
    margin-bottom: 15px;
    list-style: none;
}
.links li a{
    color: #fff;
    font-size: 13px;
}
.contact-footer{
    color: #fff;
}
.contact-footer li{
       font-size: 13px;
}
.icons{
    color: #fff;
    cursor: pointer;
}
.mm{
    margin-bottom:-70px;
    font-size: 13px;
}
@media (max-width:477px) {
    .img-footer img {
    width: 100%;
    max-width: 103px;
}
.text-p {
    font-size: 11px;
    color: #fff;
}
}
</style>
