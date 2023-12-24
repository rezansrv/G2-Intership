<template>
  <div class="animate__animated animate__fadeIn animate__delay 0.3s">
    <course/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import course from '~/components/courses/course.vue'


@Component({
  name: "det",
  components:
    {
      course
    },
  layout:"defaultLay"



})
export default class Account extends Vue {
  mounted() {
    console.log('hi')
  }
}
</script>
