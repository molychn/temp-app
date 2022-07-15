<template>
  <header class="shadow h-16">
    <div class="mx-20 h-full flex">
      <span class="font-rd text-4xl flex-initial leading-4rem grow">
        BYOP
      </span>
      <span class="flex-initial flex items-center">
        <icon-box
          icon="uiw:github-o"
          class="basis-1/4 mx-5 cursor-pointer"
        ></icon-box>
        <icon-box
          icon="simple-icons:bloglovin"
          class="basis-1/4 mx-5 cursor-pointer"
        ></icon-box>
        <icon-box
          icon="cib:about-me"
          class="basis-1/4 mx-5 cursor-pointer"
        ></icon-box>
        <icon-box
          v-show="themeStatus"
          icon="material-symbols:wb-sunny-outline"
          class="basis-1/4 mx-5 cursor-pointer"
          @click="toggleTheme"
        ></icon-box>
        <icon-box
          v-show="!themeStatus"
          icon="material-symbols:clear-night"
          class="basis-1/4 mx-5 cursor-pointer"
          @click="toggleTheme"
        ></icon-box>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const themeStatus = ref(true)
function toggleTheme() {
  themeStatus.value = !themeStatus.value
}
</script>
