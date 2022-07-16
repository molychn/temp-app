<script setup lang="ts">
import { useTheme } from './stores/theme'
import HeaderBar from './components/HeaderBar.vue'
import ContentBoxVue from './components/ContentBox.vue'

const theme = useTheme()
</script>

<template>
  <div class="main" :data-theme="theme.value">
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
