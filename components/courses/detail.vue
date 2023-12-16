<template>
  <main dir="rtl" class="mb-[64px] mt-[44px]">
    <div v-if="Object.keys(product).length" class="max-w-screen-lg mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">دوره {{ product.title }}</h1>
      <div class="flex justify-center mb-2">
        <img :src="product.img" alt="Product Image" class="mb-6  w-[300px]">
      </div>
      <div class="flex items-center justify-between mt-[25px]">

        <div>
          <h1 class="text-3xl font-bold  mb-4">سرفصل های دوره  {{ product.title }}</h1>
          <ul class="list-disc mt-4 ml-6">
            <li v-for="topic in product.topics" :key="topic" class="text-gray-700">{{ topic }}</li>
          </ul>
        </div>
        <div class="mt-[25px]">
          <p class="text-gray-800 leading-relaxed max-w-[460px]">{{ product.content }}</p>
          <button @click="successalert" class="bg-primary text-white px-4 py-2 mt-8 rounded hover:bg-Secondary focus:outline-none focus:ring focus:border-blue-300">
            ثبت نام
          </button>
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
  successalert(){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "ثبت نام موفقیت‌آمیز بود",
      showConfirmButton: false,
      timer: 1500
    });
  }

  private mounted() {
    this.getSingleProduct();
  }
}
</script>

