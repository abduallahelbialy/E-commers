<template>
  <div class="Sitting">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 ">
          <div class="sild ">
            <h1 class="text-center mb-3 mt-2" @click="hied">
              اعدادات الحساب <i class="pi pi-angle-down"></i>
            </h1>
            <ul v-if="show" v-for="so in sitting" :key="so.id">
              <li class="d-flex gap-1" :class="{ active: isActive(so.path) }">
                <div class="icon-user">
                  <i :class="so.icon"></i>
                </div>
                <router-link class="dropdown-item" :to="so.path">{{ so.li }}</router-link>
                <div class="icon-che">
                  <i class="pi pi-chevron-left"></i>
                </div>
              </li>
            </ul>
            <h1 class="text-center mb-3 mt-2" @click="hiedtwo">
              اعدادات عامة <i class="pi pi-angle-down"></i>
            </h1>
            <p class="border-bottom"></p>
            <ul v-if="showtwo" v-for="sos in sittingtwo" :key="sos.us">
              <li class="d-flex gap-1" :class="{ active: isActive(sos.path) }">
                <div class="icon-user">
                  <i :class="sos.icon"></i>
                </div>
                <router-link class="dropdown-item" :to="sos.path">{{ sos.li }}</router-link>
                <div class="icon-che">
                  <i class="pi pi-chevron-left"></i>
                </div>
              </li>
            </ul>
            <h1 class="text-center mb-3 mt-2" @click="hiedtthre">
              معلومات عامة <i class="pi pi-angle-down"></i>
            </h1>
            <ul v-if="showthree" v-for="sos in sittingthre" :key="sos.us">
              <li class="d-flex gap-1" :class="{ active: isActive(sos.path) }">
                <div class="icon-user">
                  <i :class="sos.icon"></i>
                </div>
                <router-link class="dropdown-item" :to="sos.path">{{ sos.li }}</router-link>
                <div class="icon-che">
                  <i class="pi pi-chevron-left"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "SittingAccount",
  data() {
    return {
      show: true,
      showtwo: false,
      showthree: false,
      sitting: [
        {
          id: 1,
          li: "الملف الشخصى",
          path: "/OneDae",
          icon: "pi pi-user-edit",
        },
        {
          id: 2,
          li: "الشكوى المقدمة",
          path: "/TwoeDae",
          icon: "pi pi-clipboard",
        },
        { id: 3, li: "المفضلة", path: "/Favsetting", icon: "pi pi-heart" },
        { id: 4, li: "المحفظة", path: "/Paya", icon: "pi pi-inbox" },
      ],
      sittingtwo: [
        {
          us: 5,
          li: "اعدادات الاشعارات",
          path: "/Notfastting",
          icon: "pi pi-bell ",
        },
        {
          us: 6,
          li: "اعدادات اللغة",
          path: "/Langw",
          icon: "pi pi-language",
        },
      ],
      sittingthre: [
        {
          us: 5,
          li: "من نحن",
          path: "/About",
          icon: "pi pi-question-circle",
        },
        {
          us: 6,
          li: "سياسة الخصوصية",
          path: "/Pricy",
          icon: "pi pi-shield",
        },
        {
          us: 7,
          li: "الشروط والاحكام",
          path: "/Policy",
          icon: "pi pi-clipboard",
        },
      ],
    };
  },
  methods: {
    isActive(path) {
      const route = useRoute();
      return route.path === path;
    },
    hied() {
      this.show = !this.show;
      if (this.show) {
        this.showtwo = false;
        this.showthree = false;
      }
    },
    hiedtwo() {
      this.showtwo = !this.showtwo;
      if (this.showtwo) {
        this.show = false;
        this.showthree = false;
      }
    },
    hiedtthre() {
      this.showthree = !this.showthree;
      if (this.showthree) {
        this.show = false;
        this.showtwo = false;
      }
    },
  },
};
</script>


<style scoped>
.Sitting {
  padding: 30px 0;
}
li {
  list-style: none;
}
.sild {
  width: 240px;
  height: auto;
  padding: 1px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  cursor: pointer;
}
.sild h1 {
  font-size: 16px;
}
.icon-user {
  background-color: #f3f9f1;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #000;
}
.icon-che i {
  font-size: 12px;
}
.active {
  background-color: var(--main-color);
  color: #fff;
  padding: 7px;
  width: 197px;
  border-radius: 4px;
  margin: auto;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
}
@media (max-width:477px) {
  .sild {
    width: 330px;
    height: auto;
    margin: auto;
    padding: 2px;
}
.active{
    width: 280px;

}
}
</style>
