<template>
  <main dir="rtl" class="mb-[64px] mt-[24px] p-5">
    <div v-if="Object.keys(product).length" class="max-w-screen-lg mx-auto p-4">

      <div class="flex items-center justify-center mt-[12px]">
        <div class="w-full max-w-[800px]">
          <div class="border-t-[3px] border-solid border-Secondary w-[115px] mb-[10px]"> </div>
          <h1 class="text-2xl font-bold mb-4 ">تمرین {{ singleTopic.name }}</h1>

          <div>
            <p class="text-[18px] font-normal mb-[64px]">  {{ singleTopic.exercise }}</p>
            <!-- Add additional details as needed -->
          </div>
          <div class="mt-[64px]">
            <div class="border-t-[3px] border-solid border-Secondary w-[65px] mb-[12px]"> </div>
            <p class="text-2xl font-bold mb-4 ">ارسال تمرین</p>
            <div>
              <p class="text-[18px] font-normal mb-[64px]">فایل های مربوط به تمرین را در این قسمت بارگذاری کنید</p>
              <div class="flex items-center gap-5 mt-[40px]">
                <input  type="file" ref="fileInput" @change="handleFileUpload" accept=".docx, .doc, .pdf, .zip" class="py-2 px-4 border border-gray-300 rounded-md mr-2" />
                <button @click="uploadFile" class="py-2 px-4 bg-primary text-white rounded-md">آپلود</button>
              </div>
            </div>
          </div>
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
import Swal from "sweetalert2";

interface Topic {
  id: string;
  name: string;
  exercise: string;
  resource: string;
}


@Component
export default class MyComponent extends Vue {
  private product: any = {};
    public singleTopic: Topic = {} as Topic;
  private selectedFile: File | null = null;

  private async getSingleProduct() {
    try {
      const productId = this.$route.query.courseId as string;
      const topicId = this.$route.query.topicId as string;

      if (!productId || !topicId) {
        this.product = {};
        console.error('Invalid product or topic ID:', productId, topicId);
        return;
      }

      const parsedProductId = parseInt(productId, 10);
      const parsedTopicId = parseInt(topicId, 10);

      if (isNaN(parsedProductId) || isNaN(parsedTopicId)) {
        this.product = {};
        console.error('Invalid parsed product or topic ID:', parsedProductId, parsedTopicId);
        return;
      }

      const response = await axios.get(`http://localhost:3002/courses/${parsedProductId}`);
      this.product = response.data;

      console.log('Parsed Topic ID:', parsedTopicId);
      console.log('Topics:', this.product.topics);

      // Find the topic with the matching ID
      const foundTopic = this.product.topics.find((t: Topic) => t.id.trim() === parsedTopicId.toString());

      if (foundTopic) {
        this.singleTopic = foundTopic;
        console.log('Single Topic:', this.singleTopic);
      } else {
        console.error('Topic not found for ID:', parsedTopicId);
        // Handle the error or display a message to the user
        // You might want to redirect the user to an error page or show a user-friendly error message.
      }

    } catch (error) {
      console.error('Error fetching product details:', error);
      this.product = {};
    }
  }

  handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  async uploadFile() {
    if (!this.selectedFile) {
        await
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'فایل خود را انتخاب کنید',
        showConfirmButton: false,
        timer: 1500
      });      return;
    }

    const fileSizeInMB = this.selectedFile.size / (1024 * 1024);
    if (fileSizeInMB > 10) {
        await
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'فایل آپلودی بیش از 10 مگابایت می باشد',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      const response = await axios.post(``, formData);

      console.log('File uploaded successfully:', response.data);
      await
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'با موفقیت آپلود شد',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }


  mounted() {
    this.getSingleProduct();
  }
}
</script>

