<template>
 <div>

<Navbar/>
 <router-view/>
 <Jonin/>
<Footer/>
 </div>
</template>
<script >
import Footer from './components/navbar/Footer.vue';
import Navbar from './components/navbar/Navbar.vue';
import Jonin from './views/Jonin.vue';

export default {
  components:{
    Navbar,
    Footer,
    Jonin
  }
}
</script>
<style scoped>

</style>