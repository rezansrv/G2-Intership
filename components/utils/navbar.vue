<template>
  <header class="flex justify-center">
    <nav dir="rtl" class="flex justify-between flex-row items-center h-[100px] w-[1280px]">
      <div class="flex gap-10">
        <img src="https://g2internship.com/_nuxt/img/Logo.2b62930.svg" alt="logo">
        <ul class="flex items-center gap-7 text-[17px] font-medium">
          <li><a href="#">خانه</a></li>
          <li><a href="#">درباره ما</a></li>
          <li><a href="#">دوره ها</a></li>
        </ul>
      </div>
      <button class="bg-primary text-white rounded-full items-center h-[40px] w-[110px]">ورود | ثبت نام</button>
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
