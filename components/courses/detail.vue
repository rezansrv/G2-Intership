<template>
  <main dir="rtl" class="mb-[64px] mt-[44px] p-5">
    <div v-if="Object.keys(product).length" class="max-w-screen-lg mx-auto p-4">
      <div class="border-t-[3px] border-solid  border-Secondary  w-[115px] mb-[10px]"> </div>
      <h1 class="text-3xl font-bold mb-4">دوره {{ product.title }}</h1>
      <div class="flex justify-center mb-2">
        <img :src="product.img" alt="Product Image" class="mb-6  w-[300px]">
      </div>
      <div class="flex items-center justify-between mt-[25px]">
        <div>
          <h1 class="text-3xl font-bold  mb-4">سرفصل های دوره  {{ product.title }}</h1>
          <ul class="list-disc mt-4 ml-6">
            <li v-for="topic in product.topics" :key="topic.id" class="text-gray-700">
              <span>{{ topic.name }}</span>
            </li>
          </ul>
        </div>
        <div class="mt-[25px]">
          <p class="text-gray-800 leading-relaxed max-w-[460px]">{{ product.content }}</p>
          <button v-if="!Showbutton && !courserigester" @click="successalert" class="bg-primary text-white px-4 py-2 mt-8 rounded hover:bg-Secondary ">
            ثبت نام
          </button>
          <nuxt-link v-if="Showbutton || courserigester" :to="`/course?id=${product.id}`">
            <button class="bg-primary text-white px-4 py-2 mt-8 rounded hover:bg-Secondary ">
              مطالعه
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-8">
      <!-- Add a loading or error message here -->
      <p class="text-xl font-semibold">Loading...</p>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component
export default class MyComponent extends Vue {
  private product: any = {}; // Adjust the type based on your actual data structure
  isLogin: boolean = false;
  Showbutton: boolean = false;
  courserigester: boolean = false;

  private async getSingleProduct() {
    try {
      const productId = this.$route.query.id as string | (string | null)[];
      if (Array.isArray(productId)) {
        // Handle the case where it's an array (you might want to choose a specific item)
        this.product = {};
        console.error('Invalid product ID:', productId);
        return;
      }

      const parsedProductId = parseInt(productId, 10); // Convert the string to a number
      if (isNaN(parsedProductId)) {
        // Handle the case where the conversion fails
        this.product = {};
        console.error('Invalid product ID:', productId);
        return;
      }

      const response = await axios.get(`http://localhost:3002/courses/${parsedProductId}`);
      this.product = response.data;
      console.log('Product:', this.product);
    } catch (error) {
      console.error('Error fetching product details:', error);
      this.product = {};
    }
  }

  private mounted() {
    this.checkLoginStatus();
    this.checkCourseRigester();
    this.getSingleProduct();
  }

  checkLoginStatus() {
    const storedIsLogin = localStorage.getItem('isLogin');
    if (storedIsLogin && storedIsLogin === 'true') {
      this.isLogin = true;
    }
  }

  checkCourseRigester() {
    const courserigester = localStorage.getItem('courserigester');
    if (courserigester && courserigester === 'true') {
      this.courserigester = true;
    }
  }

  successalert() {
    if (this.isLogin) {
      Swal.fire({
        title: 'آیا از ثبت نام مطمعن هستید؟',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله',
        cancelButtonText: 'لغو'
      }).then((result) => {
        if (result.isConfirmed) {
          this.Showbutton = true;
          localStorage.setItem('courserigester', 'true');
          Swal.fire({
            title: 'ثبت نام موفق بود',
            text: 'حالا می توانید مطالعه دوره را شروع کنید',
            confirmButtonText: 'باشه',
            icon: 'success'
          });
        }
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '!ابتدا در اکانت خود لاگین کنید',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
</script>
