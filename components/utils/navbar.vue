<template>
  <header dir="rtl" class="flex justify-center p-3  sm:p-0  bg-[#fffbff]">
    <nav class="flex justify-between flex-row items-center h-[100px] w-[1280px]">
      <div class="flex gap-8 justify-center">
        <nuxt-link to="/">
          <img src="https://g2internship.com/_nuxt/img/Logo.2b62930.svg" alt="logo">
        </nuxt-link>
        <ul class="hidden md:flex gap-7 items-center md:gap-10 text-[17px] font-medium">
          <nuxt-link to="/">خانه</nuxt-link>
          <nuxt-link to="aboutus">درباره ما</nuxt-link>
          <nuxt-link to="courses">دوره ها</nuxt-link>
        </ul>
      </div>

      <!-- Hamburger menu for mobile screens -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-primary">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" style="transform: scaleX(-1);">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- User-related content -->
      <div v-if="!isLogin" class="hidden md:block">
        <nuxt-link to="account/login">
          <button class="bg-primary font-medium text-white rounded-full items-center h-[40px] w-[110px]">ورود | ثبت نام</button>
        </nuxt-link>
      </div>
      <div v-else class="hidden md:block">
        <div class="dropdown">
          <button class="bg-primary  flex justify-center gap-2 font-medium text-white rounded-full items-center  h-[45px] w-[150px]">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgOCA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMC4yNSAwLjVMNCA0LjI1TDcuNzUgMC41SDAuMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="">  {{ userName }}
          </button>
          <div class="dropdown-content" v-show="isLogin">
            <a  @click="logout">خروج از حساب</a>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="showMobileMenu" class="md:hidden absolute bg-[#fcb9a9] left-2 top-[85px] z-10 ">
        <div class="flex flex-col items-end gap-4 black p-5 text-[17px] mt-[10px] font-medium">
          <nuxt-link to="/" @click="toggleMobileMenu">خانه</nuxt-link>
          <nuxt-link to="/aboutus" @click="toggleMobileMenu">درباره ما</nuxt-link>
          <nuxt-link to="/courses" @click="toggleMobileMenu">دوره ها</nuxt-link>
          <nuxt-link to="/account/login" v-if="!isLogin" @click="toggleMobileMenu">ورود | ثبت نام</nuxt-link>
          <button v-if="isLogin" @click="logout">خروج از حساب</button>
          <button class="text-red-600" @click="toggleMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Navbar',
})
export default class Navbar extends Vue {
  isLogin: boolean = false;
  userName: string | null = null;
  showMobileMenu: boolean = false;

  mounted() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const storedIsLogin = localStorage.getItem('isLogin');
    if (storedIsLogin && storedIsLogin === 'true') {
      this.isLogin = true;
      this.userName = localStorage.getItem('userName');
    }
  }

  logout() {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userName');
    this.$router.replace('/account/login');
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

}
</script>


<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(249, 249, 249, 0.66);
  min-width: 160px;

  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown:hover .dropdown-content {
  display: block;
}


</style>
