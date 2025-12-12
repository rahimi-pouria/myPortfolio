<template>
    <div class="d-flex gap-3">
      <template v-for="(item, i) in headerLinks" :key="item.id">
        <span class="circle-header">
            <custom-button :label="item.title" btn-class="text-white"/>
        </span>
      </template>
    </div>
</template>

<script setup lang="ts">
  import CustomButton from "~/components/bootstrap/customButton.vue";

  interface headerLinksType {
    id: number;
    link: string;
    title: string;
    icon: string;
  }

  const headerLinks: headerLinksType[] = [
    {
      id: 1,
      title: 'About',
      link: '/',
      icon: ''
    },
    {
      id: 2,
      title: 'Works',
      link: '/',
      icon: ''
    },
    {
      id: 3,
      title: 'Works',
      link: '/',
      icon: ''
    },
    {
      id: 4,
      title: 'Services',
      link: '/',
      icon: ''
    },
    {
      id: 5,
      title: 'Resume',
      link: '/',
      icon: ''
    },
    {
      id: 5,
      title: 'Skills',
      link: '/',
      icon: ''
    },
    {
      id: 6,
      title: 'Blog',
      link: '/',
      icon: ''
    },
    {
      id: 7,
      title: 'Contact',
      link: '/',
      icon: ''
    }
  ]

</script>

<style scoped lang="scss">
  .circle-header{
    border: 1px solid #8b8b8b;
    height: 35px;
    width: 100px;
    border-radius: 20px;
    color: #ffffff !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>