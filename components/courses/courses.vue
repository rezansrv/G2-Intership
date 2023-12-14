<template>
  <div>
    <!-- Parent component -->
    <card :courses="courses" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Card from '~/components/card/card.vue';  // Correct the import and use PascalCase for component names

// Define an interface for the course object
interface Course {
  id: number;
  img: string;
  title: string;
  content: string;
}

@Component({
  components: {
    Card,  // Correct the component name to PascalCase
  },
})
export default class Courses extends Vue {
  private courses: Course[] = [];

  mounted() {
    this.fetchCourses();
  }

  async fetchCourses() {
    try {
      const response = await axios.get<Course[]>("http://localhost:3002/courses");
      this.courses = response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }
}
</script>

<style scoped>
</style>
