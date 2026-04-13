<template>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex">
        <h2> My Work Experience</h2>
      </div>
      <div class="d-flex flex-wrap gap-4 w-100">
        <CustomCard
            v-for="(item) in experience" :key="item.id"
            :id="`card-${item.id}`"
            :title="item.title"
            :sub-title="item.subTitle"
            img-left
            class-card="w-50 about-us-card-new anime-card"
            custom-class-text="description-text"
            :description-card="item.description"
            :show-btn="false"
            label-btn="read more"
            btn-class="custom-btn-core-soft-skills"
            :enable-hover-animation="true"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomCard from "~/components/bootstrap/customCard.vue";

interface experienceType {
  id: number,
  title: string,
  subTitle: string,
  description: string,
  location: string,
  position: string
}

  const experience  = ref<experienceType[]>([
    {
      id: 1,
      title: "Vesta Information Technology Company",
      subTitle: "2024 - 2026",
      description: "Hired in January 2024 (Dey 1402) at Vesta Information Technology Company. Implemented LMS, TMS projects for governmental organizations such as Tehran Municipality, Imam Hussein University, Bank Maskan.",
      location: "Tehran",
      position: "Frontend Developer (Vue.js)"
    },
    {
      id: 2,
      title: "Trader 4 Company",
      subTitle: "20223 - 2023",
      description: "Hired remotely on January 18, 2023 (Dey 28, 1401) at Trader Four Company. Customized the Metronic template.",
      location: "England",
      position: "Frontend Developer (Vue.js)"
    },
    {
      id: 3,
      title: "Bamdad Digital Marketing Company",
      subTitle: "2022 - 2023",
      description: "Hired in June 2022 (Khordad 1401) at Bamdad Company. Worked on the Larniya project using Vue.js and Nuxt.js.",
      location: "Tehran",
      position: "Frontend Developer (Vue.js)"
    },
  ])
</script>

<style scoped lang="scss">

</style>