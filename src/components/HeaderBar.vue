<template>
  <header class="h-16">
    <div class="mx-20 h-full flex">
      <span class="font-rd text-4xl flex-initial leading-4rem grow select-none">
        BYOP
      </span>
      <span class="flex-initial flex items-center">
        <a
          :href="'https://github.com/molychn/' + name"
          target="_blank"
          rel="noopener noreferrer"
          class="basis-1/4 mx-5 cursor-pointer"
        >
          <icon-box icon="uiw:github-o" class="mx-5"></icon-box>
        </a>
        <a
          href="https://juejin.cn/user/1802854799785736/posts"
          target="_blank"
          rel="noopener noreferrer"
          class="basis-1/4 mx-5 cursor-pointer"
        >
          <icon-box icon="simple-icons:bloglovin" class="mx-5"></icon-box>
        </a>
        <a
          href="https://github.com/molychn"
          target="_blank"
          rel="noopener noreferrer"
          class="basis-1/4 mx-5 cursor-pointer"
        >
          <icon-box icon="cib:about-me" class="mx-5"></icon-box>
        </a>
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
import { name } from '../../package.json'
import { computed } from 'vue'
import { useTheme } from '@/stores/theme'

const theme = useTheme()

const themeStatus = computed(() => {
  return theme.value === 'light'
})
function toggleTheme() {
  theme.toggleTheme()
}
</script>
