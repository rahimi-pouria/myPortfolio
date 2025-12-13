<template>
    <div class="d-flex w-100 flex-wrap gap-2">
        <div v-for="(item, i) in skills" :key="i" class="d-flex flex-column show-skills w-23 justify-content-center align-items-center">
          <span class="circle-skill">
            <img :src="item.icon" alt="">
          </span>
          <p>{{ item.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
  import vueIcon from '@/assets/img/png/vue.png'
  import reactIcn from '@/assets/img/svg/react.svg'
  import nuxtIcon from '@/assets/img/png/nuxtlogo.png'
  import nextIcon from '@/assets/img/lg-6623b7522c224-Nextjs.webp'
  import nodeICon from '@/assets/img/png/683-6833893_node-js-logo-png-transparent-png.png'
  import reduxIcon from '@/assets/img/png/redux.png'
  import piniaIcon from '@/assets/img/png/Pinialogo.svg.png'
  import reactNativeIcon from '@/assets/img/png/images.png'
  import tailwindIcon from '@/assets/img/svg/tailwind.svg'
  import bootstrapIcon from '@/assets/img/svg/bootstrap.svg'
  import elementPlusIcon from '@/assets/img/png/68583457.png'
  import vuetifyIcon from '@/assets/img/png/vuetify-logo.png'
  import typescriptIcon from '@/assets/img/svg/typescript.svg'
  import htmlIcon from '@/assets/img/svg/html5.svg'
  import cssIcon from '@/assets/img/svg/css.svg'
  import javascriptIcon from '@/assets/img/svg/javascript.svg'
  interface skillsType {
    id: number,
    name: string,
    icon: string,
  }

  const skills:skillsType[] = [
    {
      id: 1,
      name: 'html',
      icon: htmlIcon,
    },
    {
      id: 2,
      name: 'css',
      icon: cssIcon,
    },
    {
      id: 3,
      name: 'javascript',
      icon: javascriptIcon,
    },
    {
      id: 4,
      name: 'typescript',
      icon: typescriptIcon,
    },
    {
      id: 5,
      name: 'Vue js',
      icon: vueIcon,
    },
    {
      id: 6,
      name: 'React js',
      icon: reactIcn,
    },
    {
      id: 7,
      name: 'Nuxt js',
      icon: nuxtIcon,
    },
    {
      id: 8,
      name: 'Next js',
      icon: nextIcon,
    },
    {
      id: 9,
      name: 'Node js',
      icon: nodeICon,
    },
    {
      id: 10,
      name: 'Redux',
      icon: reduxIcon,
    },
    {
      id: 11,
      name: 'pinia',
      icon: piniaIcon,
    },
    {
      id: 12,
      name: 'react-native',
      icon: reactNativeIcon,
    },
    {
      id: 13,
      name: 'tailwind css',
      icon: tailwindIcon,
    },
    {
      id: 14,
      name: 'bootstrap css',
      icon: bootstrapIcon,
    },
    {
      id: 15,
      name: 'element plus',
      icon: elementPlusIcon,
    },
    {
      id: 16,
      name: 'vuetify',
      icon: vuetifyIcon,
    },
  ]
</script>

<style scoped lang="scss">

</style>