<template>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: "account",
  components: {},
})
export default class Account extends Vue {
mounted() {
  console.log('hi')
}
}
</script>
