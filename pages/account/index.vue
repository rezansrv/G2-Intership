<template>
  <div>
    <p>Hello</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: "account",
  components: {},
})
export default class extends Vue {
mounted() {
  console.log('hi')
}
}
</script>
