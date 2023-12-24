<template>
  <main dir="rtl" class="mb-[64px] mt-[24px] p-5">
    <div v-if="Object.keys(product).length" class="max-w-screen-lg mx-auto p-4">
      <div class="border-t-[3px] border-solid border-Secondary w-[115px] mb-[10px]"> </div>

      <div class="flex items-center justify-center mt-[15px]">
        <div class="w-full max-w-[800px]">
          <h1 class="text-2xl font-bold mb-4">دوره {{ product.title }}</h1>
          <table class="table-auto w-full border-collapse">
            <thead>
            <tr>
              <th class="p-3 text-center text-gray-700 border">سرفصل</th>
              <th class="p-3 text-center text-gray-700 border">تمرین</th>
              <th class="p-3 text-center text-gray-700 border">منبع</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="topic in product.topics" :key="topic.id">
              <td class="p-3 text-center text-gray-700 border">{{ topic.name }}</td>
              <td class="p-3 text-center text-gray-700 border">
                <nuxt-link class="text-primary pr-[10px]" :to="`/exercise?courseId=${product.id}&topicId=${topic.id}`">
                  تمرین
                </nuxt-link>
              </td>
              <td class="p-3 text-center text-gray-700 border">
                <nuxt-link class="text-primary pr-[10px]" :to="{ name: 'resource', params: { courseId: product.id, topicId: topic.id }}">
                  منبع
                </nuxt-link>
              </td>
            </tr>
            </tbody>
          </table>
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
    this.getSingleProduct();
  }
}
</script>
