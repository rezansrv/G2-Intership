<template>
  <header class="flex justify-center">
    <nav dir="rtl" class="flex justify-between flex-row items-center h-[100px] w-[1280px]">
      <div class="flex gap-10">
        <nuxt-link to="/">
          <img src="https://g2internship.com/_nuxt/img/Logo.2b62930.svg" alt="logo">
        </nuxt-link>
        <ul class="flex items-center gap-7 text-[17px] font-medium">
          <nuxt-link to="/">خانه</nuxt-link>
          <li><a href="#">درباره ما</a></li>
          <nuxt-link to="courses">دوره ها</nuxt-link>
        </ul>
      </div>
      <nuxt-link to="account/login">
        <button class="bg-primary font-medium text-white rounded-full items-center h-[40px] w-[110px]">ورود | ثبت نام</button>
      </nuxt-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: "navbar",
  components: {},
})
export default class navbar extends Vue {
  mounted() {
    console.log('hi')
  }
}
</script>
