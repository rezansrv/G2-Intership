<template>
  <div>
    <courses/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import courses from '~/components/courses/courses.vue'

@Component({
  name: "signUp",
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
