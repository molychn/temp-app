<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import ContentBoxVue from './components/ContentBox.vue'
</script>

<template>
  <div class="main">
    <HeaderBar></HeaderBar>
    <ContentBoxVue class="content-min-h"></ContentBoxVue>
  </div>
</template>

<style lang="scss">
.main {
  background-color: var(--theme-bg);
  color: var(--theme-color);
}
.content-min-h {
  min-height: calc(100vh - 4rem);
}
</style>
