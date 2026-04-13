<template>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex">
        <h2> My Project</h2>
      </div>
      <div class="d-flex flex-wrap gap-4 w-100">
        <CustomCard
            v-for="(item) in project" :key="item.id"
            :id="`card-${item.id}`"
            :title="item.title"
            img-left
            class-card="w-50 about-us-card-new anime-card"
            custom-class-text="description-text"
            :description-card="item.description"
            :show-btn="true"
            label-btn="read more"
            btn-class="custom-btn-core-soft-skills"
            img-top
            :img-src="item.img"

        />
      </div>
    </div>
</template>

<script setup lang="ts">

import CustomCard from "~/components/bootstrap/customCard.vue";
import crossUi from "~/assets/img/png/crossUi.png"
import formBuilder from "~/assets/img/png/formBuilder.png"
import panel from "~/assets/img/png/panelAdmin.png"
import squidGame from "~/assets/img/png/squid.jpg"
import puzzelGame from "~/assets/img/png/pazel.jpg"
import { ref } from 'vue'

interface projectType {
  id: number,
  title: string,
  description: string,
  location: string,
  position: string
  typeProject: string
  img: string
}

const project  = ref<projectType[]>([
  {
    id: 1,
    title: "multi framework cross ui",
    description: "Frontend & Mobile Components: Ready-to-use UI elements for web and mobile applications.\n" +
        "Backend Modules: Pre-built server-side logic and functionalities.\n" +
        "API & Utilities: Utilities for server requests, alerts, and form validations.\n" +
        "Automated Testing & Store Management: Integrated solutions for automated testing and state management.",
    location: "Tehran",
    position: "Frontend Developer | Vesta Information Technology",
    typeProject: 'personal project',
    img: crossUi
  },
  {
    id: 2,
    title: "form builder",
    description: "While at Vesta Information Technologies, I addressed the absence of a Vue.js form builder for our core Vue.js project. By studying the architecture of a React.js-based form builder, I developed a custom Vue.js form builder, overcoming the integration challenge and enhancing project capabilities",
    location: "Tehran",
    position: "Frontend Developer | Vesta Information Technology",
    typeProject: 'personal project',
    img: formBuilder
  },
  {
    id: 3,
    title: "panel Admin",
    description: "Developed scalable LMS and TMS solutions utilizing Vue.js.\n" +
        "Architected and implemented multi-role dashboards (Admin, Instructor, and Student panels), focusing on modular design and high-performance UI components",
    location: "Tehran",
    position: "Frontend Developer | Vesta Information Technology",
    typeProject: 'company vesta',
    img: panel
  },
  {
    id: 4,
    title: "extention Google",
    description: "Developed scalable LMS and TMS solutions utilizing Vue.js.\n" +
        "Architected and implemented multi-role dashboards (Admin, Instructor, and Student panels), focusing on modular design and high-performance UI components",
    location: "Tehran",
    position: "Frontend Developer | Vesta Information Technology",
    typeProject: 'personal project',
    img: squidGame
  },
  {
    id: 5,
    title: "squid game",
    description: "Developed scalable LMS and TMS solutions utilizing Vue.js.\n" +
        "Architected and implemented multi-role dashboards (Admin, Instructor, and Student panels), focusing on modular design and high-performance UI components",
    location: "Tehran",
    position: "Frontend Developer | Vesta Information Technology",
    typeProject: 'personal project',
    img: squidGame
  },
  {
    id: 6,
    title: "puzzle game",
    description: "Developed scalable LMS and TMS solutions utilizing Vue.js.\n" +
        "Architected and implemented multi-role dashboards (Admin, Instructor, and Student panels), focusing on modular design and high-performance UI components",
    location: "Tehran",
    position: "Frontend Developer | Vesta Information Technology",
    typeProject: 'personal project',
    img: puzzelGame
  },
])




</script>

<style scoped lang="scss">

</style>