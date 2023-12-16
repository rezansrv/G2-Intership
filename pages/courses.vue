<template>
  <div class="animate__animated animate__zoomIn animate__delay 0.3s">
    <courses/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import courses from '~/components/courses/courses.vue'

@Component({
  name: "course",
  components:
    {
      courses
    },
  layout:"defaultLay"



})
export default class Account extends Vue {
  mounted() {
    console.log('hi')
  }
}
</script>
