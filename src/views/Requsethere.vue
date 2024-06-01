<template>
  <div class="requset">
    <div class="container">
      <div class="row">
        <div class="btn-text text-center">
          <p>طلبات خالية</p>
        </div>
        <div
          class="col-lg-3 col-md-6 mb-2 mt-3 "
       v-for="req in rquests"
            :key="req.id"   >
          <div
            class="card-requset d-flex flex-column m-auto"
          
          >
            <div class="img-rquest m-auto mb-2">
              <img :src="req.img" alt="" class="img-fluid" />
            </div>
            <div
              class="text-rquset d-flex justify-content-around align-items-center"
            >
              <h1>{{ req.num }}</h1>
              <p class="text-black-50">{{req.hour}}</p>
            </div>
            <div class="depart p-2">
              <p class="text-black-50">
                {{ req.dep }}<span class="fw-medium">{{ req.hot }}</span>
              </p>
            </div>
            <div class="depart p-2">
              <p class="text-black-50">
                {{ req.stat
                }}<span class="fw-medium" style="color: var(--main-color)">{{
                  req.pay
                }}</span>
              </p>
            </div>
            <div class="cvar2 button m-auto mb-2">
              <router-link to="/Destilrequest">
                <button>{{ req.more }}</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import re from "../assets/imgrquest.png";
export default {
  name: "requsethere",
  data() {
    return {
      rquests: [
        {
          id: 1,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        {
          id: 2,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        {
          id: 3,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        {
          id: 4,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        {
          id: 5,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        {
          id: 6,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        {
          id: 7,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        {
          id: 8,
          img: re,
          num: "رقم الطلب:123",
          hour: "منذ 1 ساعة",
          dep: "القسم:",
          hot: "فنادق-مطاعم",
          stat: "الحالة:",
          pay: "طلبات خالية",
          more: "عرض المزيد",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.requset {
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
.depart {
  font-size: 14px;
}
.img-rquest img {
  max-width: 160px;
}
.text-rquset h1 {
  font-size: 15px;
}
.text-rquset p {
  font-size: 12px;
}
.card-requset {
  width: 250px;
  padding: 4px;
  height: auto;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  border-radius: 4px;
}
</style>
