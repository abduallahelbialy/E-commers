import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import chose from "../views/Choseacount.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Numacss from "../views/Numacss.vue";
import phone from "../views/Phone.vue";
import Servies from "../views/Card.vue";
import department from "../views/Department.vue";
import more from "../views/More.vue";
import Now from "../views/Now.vue";
import Viewpage from "../views/Viewpage.vue";
import Testmelon from "../views/Testmeilons.vue";
import Screen from "../views/Screen.vue";
import applcation from "../views/Applaction.vue";
import Favorites from "../views/Favorites.vue";
import jonin from "../views/Jonin.vue";
import Cart from "../views/Cart.vue";
import Morepay from "../views/Morepay.vue";
import Newpay from "../views/Newpay.vue";
import Allview from "../views/Allview.vue";
import Destilrequest from "../views/Destilrequest.vue";
import Requset from "../views/Request.vue";
import requsettwo from "../views/Requesttwo.vue";
import Requsethere from "../views/Requsethere.vue";
import Requestfinsh from "../views/Requestfinsh.vue";
import Contact from "../views/Contact.vue";
import UserProfile from "../views/UserProfile.vue";
import Notfications from "../views/Notfication.vue";
import oneDae from "../views/OneDae.vue";
import TwoeDae from "../views/TwoeDae.vue";
import destproblems from "../views/Destproblems.vue";
import Errorpage from "../views/ErrorPage.vue";
import Favsetting from "../views/Favsetting.vue";
import Notfastting from "../views/Notfastting.vue";
import Langw from "../views/Langw.vue";
import About from "../views/About.vue";
import Pricy from "../views/Praicy.vue";
import Policy from "../views/Policy.vue";
import Pay from "../views/Pay.vue";
import ProductDetails from "../views/ProductDetails.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/chose",
      name: "chose",
      component: chose,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/vild",
      name: "vild",
      component: Numacss,
    },
    {
      path: "/phone",
      name: "phone",
      component: phone,
    },
    {
      path: "/servies",
      name: "servies",
      component: Servies,
    },
    {
      path: "/department",
      name: "department",
      component: department,
    },
    {
      path: "/more",
      name: "more",
      component: more,
    },
    {
      path: "/Now",
      name: "Now",
      component: Now,
    },
    {
      path: "/Viewpage",
      name: "Viewpage",
      component: Viewpage,
    },
    {
      path: "/Testmelon",
      name: "Testmelon",
      component: Testmelon,
    },
    {
      path: "/Screen",
      name: "Screen",
      component: Screen,
    },
    {
      path: "/applcation",
      name: "applcation",
      component: applcation,
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: Favorites,
    },
    {
      path: "/jonin",
      name: "jonin",
      component: jonin,
    },
    {
      path: "/Cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/Pay",
      name: "Pay",
      component: Morepay,
    },
    {
      path: "/Newpay",
      name: "Newpay",
      component: Newpay,
    },
    {
      path: "/Allview",
      name: "Allview",
      component: Allview,
    },
    {
      path: "/destilrequest",
      name: "destilrequest",
      component: Destilrequest,
    },
    {
      path: "/requset",
      name: "requset",
      component: Requset,
    },
    {
      path: "/requsettwo",
      name: "requsettwo",
      component: requsettwo,
    },
    {
      path: "/Requsethere",
      name: "Requsethere",
      component: Requsethere,
    },
    {
      path: "/Requestfinsh",
      name: "Requestfinsh",
      component: Requestfinsh,
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/Notfications",
      name: "Notfications",
      component: Notfications,
    },
    {
      path: "/profile",
      name: "UserProfile",
      component: UserProfile,
      redirect: "/OneDae",
      children: [
        { path: "/OneDae", component: oneDae },
        { path: "/TwoeDae", component: TwoeDae },
        { path: "/destproblems", component: destproblems },
        { path: "/Favsetting", component: Favsetting },
        { path: "/Paya", component: Pay },
        { path: "/Notfastting", component: Notfastting },
        { path: "/Langw", component: Langw },
        { path: "/About", component: About },
        { path: "/Pricy", component: Pricy },
        { path: "/Policy", component: Policy },
      ],
    },

    {
      path: "/:cathAll(.*)",
      name: "ErrorPage",
      component: Errorpage,
    },
    {
      path: "/details/:id",
      name: "ProductDetails",
      component: ProductDetails,
    },
    
    // {
    //   path: '/about',
    //   name: 'about',

    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
