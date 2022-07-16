# 关于此模版
首先这个repo主要是为了在日常学习中实践各种Vue相关的功能或开发应用是准备的模版，为的就是不想每次使用vite或vue-cli创建项目时还需要根据自己想要的依赖重新安装。

在这个repo里根据自己需要的预安装了Vite，Vue3，TS（其实用vite创建项目的话基本都会有这些），然后会继续集成ESlint，Prettier以及 Tailwind CSS等。同时对于每一种实现都会在这个md上作下简单介绍（方便在之后的工作中如果有用到repo内的技术时可以直接复习上手）。
# Vue 3 + TypeScript + Vite

因为本身就是使用vite来进行创建的，所以直接使用vite创建该模版时也会自动下载安装Vue和TypeScript

```
pnpm create vite
```

# ESlint + Prettier
ESlint和Prettier的搭配在社区上基本都有成熟的方案，组合的目的就是让ESlint来负责规范，同时让Prettier来实现代码格式化。

.eslintrc.json文件可以自己touch生成，也可以使用eslint初始化根据选项帮你完成依赖安装和配置。

```
./node_modules/.bin/eslint --init
```

> eslint如果已经全局安装了的情况下就不需要再去找node_modules里的了。

然后就根据需要安装相关依赖。

```
pnpm add eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
```

仓库的eslint配置可以看.eslintrc.json文件，有更好更舒服的配置也会在实践中慢慢更新。

然后就是添加eslint和prettier的ignore文件来过滤不需要检测到的文件和目录。

# Tailwind CSS

tailwindcss的安装直接参考[官网](https://tailwindcss.com/docs/installation/using-postcss)。在vite里配置时可以将其配置成全局模式。

首先在vite.config.js中配置css全局

```
// ...
export default defineConfig({
  // ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/base.scss";'
      }
    }
  }
})
```

再加tailwindcss配置放置在base.scss中

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> 这样设置后在全局中确实是可以使用了，但是在App.vue根组件中，一旦将组件内的style标签删除，或者去掉lang属性时会报错。这里应该跟vite的配置有关。

除了使用tailwind，在近期关注的技术博主中尤为欣赏[@antfu](https://github.com/antfu)，想法和动手能力极其强，在直播中有看到使用UnoCSS，后期也可以尝试将此模版的配置替换成这个。

# iconify

iconify据说是有上万的icon可以使用，在个人项目上也就没必要去纠结实现icon了。

- 首先安装相关的依赖。

```
pnpm add @iconify/iconify @iconify/json vite-plugin-purge-icons -D
```

- 在vite配置中引入相关plugin。

```
import PurgeIcons from 'vite-plugin-purge-icons'
// ...
plugins: [PurgeIcons(), vue()]
```

- 在main.ts中引入

```
// ...
import '@purge-icons/generated'
```

- 根据iconify的使用方式可以封装一个全局组件
- iconify[图标检索](https://icones.js.org/)

# [Pinia](https://pinia.vuejs.org/)

使用 Pinia 来负责 Vue 项目中的状态管理，至于它跟 Vuex 的对比，在官方文档中有所提及，主要在于当 Vue 实现 Composition Api 时作为尝试已将 Vuex 的大多数想法实现，所以干脆取而代之。

在使用上也符合 Composition-API的风格，我在尝试的过程中觉得对于每个模块的使用可以分离出来（每个 store 可以使用 defineStore 来进行定义，而 Vuex 在我的使用过程中一直都是将所有模块引入到一个 index 文件中进行配置，在使用上我觉得是相对顺手的）。

- 安装 Pinia

```
pnpm add pinia -S
```

- 在 store 目录内定义一个主题模块

```
// /store/theme.ts
import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
  state: () => {
    return {
      value: 'light'
    }
  },
  actions: {
    toggleTheme() {
      this.value = this.value === 'light' ? 'dark' : 'light'
    }
  }
})
```

- 在需要进行主题切换的位置上引入

```
// ...
import { useTheme } from '@/stores/theme'

const theme = useTheme()

const themeStatus = computed(() => {
  return theme.value === 'light'
})

function toggleTheme() {
  theme.toggleTheme()
}

// ...
```