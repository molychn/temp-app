<template>
  <span :style="{ fontSize: size + 'px' }">
    <span class="iconify" :data-icon="icon"></span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IconBox',
  props: {
    size: {
      default: '18',
      type: String
    },
    icon: {
      type: String
    }
  }
})
</script>
