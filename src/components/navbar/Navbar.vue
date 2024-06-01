<template>
  <nav
    class="navbar navbar-expand-lg sticky-top"
    :style="{
      display:
        currentPath === '/login' ||
        currentPath === '/chose' ||
        currentPath === '/signup' ||
        currentPath === '/vild' ||
        currentPath === '/phone'
          ? 'none'
          : '',
    }"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <div class="logo">
          <img :src="img" alt="" />
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbarContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in Links" :key="link.id">
            <template v-if="link.id === 6">
              <div class="nav-link dropdown">
                <a
                  class="dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ link.link }}
                </a>
                <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li><router-link class="dropdown-item text-black d-flex align-items-center justify-content-between border-bottom" to="/requsettwo">قيد الموافقة<i class="pi pi-chevron-left"></i></router-link></li>
                  <li><router-link class="dropdown-item text-black d-flex align-items-center justify-content-between border-bottom" to="/requset">قيد الدفع<i class="pi pi-chevron-left"></i></router-link></li>
                  <li><router-link class="dropdown-item text-black d-flex align-items-center justify-content-between border-bottom" to="/Requsethere">طلبات خالية<i class="pi pi-chevron-left"></i></router-link></li>
                  <li><router-link class="dropdown-item text-black d-flex align-items-center justify-content-between border-bottom" to="/Requestfinsh">طلبات منتهية<i class="pi pi-chevron-left"></i></router-link></li>
                </ul>
              </div>
            </template>
            <template v-else>
              <router-link
                :class="{
                  'nav-link': true,
                  'active fw-medium': $route.path === link.path,
                }"
                :to="link.path"
                @click="closeMenu"
              >
                {{ link.link }}
              </router-link>
            </template>
          </li>
        </ul>
        <div class="icons d-flex gap-2 flex-wrap-reverse">
          <div class="d-flex gap-2 align-items-center aa">
            <router-link v-if="!isLoggedIn" to="/chose">
              <button>{{ cree }}</button>
            </router-link>
            <div v-else>
              <div class="d-flex align-items-center gap-2">
                <div class="name">
                  <div class="dropdown-center">
                    <div
                      class="d-flex align-items-center dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div class="img-name">
                        <img :src="pho" alt="" />
                      </div>
                      <span class="text-white cl"> {{ username }}</span>
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <router-link
                          class="dropdown-item d-flex gap-2 justify-content-center align-items-center border-bottom"
                          to="/profile"
                          ><i class="pi pi-user"></i>{{ account }}
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          class="dropdown-item d-flex gap-2 justify-content-center align-items-center"
                          to="/login"
                          ><i class="pi pi-sign-in"></i>{{ logout }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <router-link to="/Notfications">
                <div class="d-flex align-items-center cvar sear">
                   <div class="num-cart position-relative">
                      <span class="position-absolute fw-medium">15</span>
                    </div>
                  <i class="pi pi-bell" style="font-size: 1.5rem"></i>
                </div>
                </router-link>
                <router-link to="/Cart">
                  <div class="d-flex align-items-center cvar sear">
                    <div class="num-cart position-relative">
                      <span class="position-absolute fw-medium">{{ cartCount }}</span>
                    </div>
                    <i class="pi pi-cart-plus" style="font-size: 1.5rem"></i>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center sear">
            <i class="pi pi-search" style="font-size: 1.5rem"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "../../assets/logonav.webp";
import ph from "../../assets/Untitled-1.jpg";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      cartCount: "cartCount", // هنا نحصل على العدد من getters
    }),
  },
  data() {
    return {
      currentPath: window.location.pathname,
      isLoggedIn: false,
      cree: "تسجيل",
      account: "حسابى",
      logout: "تسجيل خروج",
      username: "",
      img: logo,
      pho: ph,
      Links: [
        { id: 1, link: "الرئيسية", path: "/" },
        { id: 2, link: "الاكثر مبيعا ", path: "/Pay" },
        { id: 3, link: "جديدنا  ", path: "/Newpay" },
        { id: 4, link: "العروض", path: "/Allview" },
        { id: 5, link: "المفضله", path: "/favorites" },
        { id: 6, link: "طلباتى", path: "/requst" },
        { id: 7, link: "تواصل معنا", path: "/Contact" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains('show')) {
        navbarContent.classList.remove('show');
      } else {
        navbarContent.classList.add('show');
      }
    },
    closeMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains('show')) {
        navbarContent.classList.remove('show');
      }
    },
    handleClickOutside(event) {
      const navbarContent = this.$refs.navbarContent;
      if (!navbarContent.contains(event.target)) {
        this.closeMenu();
      }
    }
  },
  mounted() {
    this.currentPath = this.$route.path;
    window.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  },
  created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );

    // استعراض localStorage لمعرفة ما إذا كان المستخدم قد سجل الدخول مسبقًا
    const userData = localStorage.getItem("signupData");
    if (userData) {
      this.isLoggedIn = true;
      // استخراج اسم المستخدم من بيانات التسجيل
      this.username = JSON.parse(userData).username;
    }
  },
};
</script>


<style scoped>
.navbar {
  background: var(--main-color) !important;
  backdrop-filter: blur(15px);
}
.num-cart span {
  bottom: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f65555;
  color: #fff;
  left: -6px;
  font-size: 12px;
}
.navbar-nav li {
  padding: 0px 10px !important;
}
.navbar-nav li a {
  color: #fff;
  font-weight: 400;
}
.aa button {
  border: none !important;
  border-radius: 4px;
  transition: 0.3s;
  padding: 7px;
  width: 130px;
  border-radius: 4px 4px;
  color: #fff;
  background-color: #e6bd0f;
  outline: none;
}
.cl{
  cursor: pointer;
}
.aa button:hover {
  color: var(--main-color);
  background-color: #fff;
}
.logo {
  width: 100px;
  /* height: 100px; */
  object-fit: cover;
}
.logo img {
  width: 100%;
  /* filter: brightness(0.5) invert(1); */
}
.active {
  border-bottom: 2px solid #000;
  width: fit-content;
}
.img-name img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 50px;
  border-radius: 50%;
}
/*  */
.sear {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--main-color);
  border: 1px solid #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
@media (max-width: 477px) {
  .dropdown-menu {
    top: 100%;
    left: -78px;
    margin-top: var(--bs-dropdown-spacer);
  }
}
</style>
