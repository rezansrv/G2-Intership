<template>
  <main>
    <h1 class="mt-[64px] mb-[20px] flex justify-center text-[22px] font-medium">مجموعه های آموزشی</h1>
    <div class="mt-[40px] flex flex-wrap gap-5 content-center justify-center   " dir="rtl">
      <div v-for="course in courses" :key="course.id" class="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow" dir="rtl">
        <a :href="course.link">
          <img class="rounded-t-lg p-6 w-[300px] h-[250px] " :src="course.img" :alt="course.title" />
        </a>
        <div class="p-5">
          <a :href="course.link">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">{{ course.title }}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 text-center">{{ course.content }}</p>
          <a :href="course.link" class="flex justify-center w-full mt-[25px] items-center content-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-Secondary focus:ring-4 focus:outline-none focus:ring-blue-300">
            بیشتر
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <img class="w-full " src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDE0NDAgODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNDQwIDgwSDBDNzg0IDgwIDEyODYuNjcgMjYuNjY2NyAxNDQwIDBWODBaIiBmaWxsPSIjRkZGQkZGIi8+CjxwYXRoIGQ9Ik0xNDQwIDgwSDBDNzg0IDgwIDEyODYuNjcgNTAuNjY2NyAxNDQwIDM2VjgwWiIgZmlsbD0iI0ZGREFEMiIvPgo8L3N2Zz4K" alt="">
  </main>


</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const { courses } = defineProps(['courses']);
</script>
