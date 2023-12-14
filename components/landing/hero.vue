<template>
  <main dir="rtl" class="flex justify-center mt-[60px] mb-[100px]">
    <div class="w-[1280px] flex flex-col-reverse justify-center text-center items-center   sm:flex-row sm:justify-between sm:text-right ">
      <div class="">
        <h1 class="text-primary text-[28px] font-normal">
          G2Internship همراه تو در مسیر
          یادگیری
        </h1>
        <p class="max-w-[765px] text-[19px] mt-[32px] font-medium">
          در دوره‌های کارآموزی آنلاین
          G2Internship به صورت رایگان،
          مباحث آموزشی را بر اساس بروزترین سرفصل ها و منابع یاد گرفته و
          سوالات و مشکلاتتان را به صورت گروهی و با کمک منتورهای هلدینگ
          G2
           حل خواهید کرد.
        </p>
        <nuxt-link to="account/login">
          <button class="bg-primary hover:bg-Secondary text-white p-3 rounded-3xl font-medium flex gap-2 items-center mt-[90px] "><span > شروع کن </span>          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
        </nuxt-link>


      </div>
      <div class="">
        <img src="https://g2internship.com/_nuxt/img/kian-pirfalak.4ee91ed.png" alt="heroImage" class="w-[400px] height-[354px]" >
      </div>

    </div>

  </main>
</template>
<script setup lang="ts">
</script>
