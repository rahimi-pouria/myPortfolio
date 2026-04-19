<template>
    <div class="d-flex gap-3">
      <custom-tabs :tab-list="headerLinks" title-item-class="title-tab"  v-model="activeTab">
        <template #tab-0>
          <div class="d-flex content-tab">
            <home :func="showTab"/>
          </div>
        </template>
        <template #tab-1>
          <div class="d-flex flex-column gap-5 content-tab">
            <skills />
            <my-work-experience />
            <my-project />
          </div>
        </template>
        <template #tab-2>
          <div class="d-flex flex-wrap content-tab gap-2 w-100">
            <demos
                v-for="(item) in videoMyProjects"
                :key="item.id"
                custom-Class-Wrapper="video-wrapper anime-card"
                custom-class-video-tittle="video-title"
                custom-class-video="main-video"
                :videoTitle="item.title"
                :videoSrc="item.videoSrc"
                :sub-Title-Video="item.subtitle"
                :video-Description="item.description"
                custom-class-video-description="description-video"
            />
          </div>
        </template>
        <template #tab-3>
          <div class="d-flex content-tab">
            <aboutMe
                title="achievements"
                description="I’m Pouria Rahimy, a passionate Full-Stack Developer and Software Engineer with a strong focus on modern web technologies. I specialize in building clean, scalable, and high-performance applications using JavaScript frameworks such as Vue, Nuxt, React, and Next. I am also the creator of CrossUI, a fully customizable UI component framework designed to work across multiple JavaScript environments. My goal with CrossUI is to help developers speed up their workflow while maintaining flexibility and performance. Throughout my career, I have worked on dynamic front-end architectures, custom UI/UX components, reusable design systems, and interactive web applications. I believe in writing clean code, building reusable structures, and continuously improving my skills. My long-term mission is to create software that makes life easier, contributes to innovation, and helps businesses grow."
                :img-src="planing"
                custom-class-img="d-flex w-50"
                custom-Class-Wrapper-Text="d-flex flex-column"
                :professional-Profile="achievements"
                custom-Class-Description-Heading="card-text description-text"
                custom-class-image-wrapper="d-flex"/>
          </div>
        </template>
        <template #tab-4>
          <div  class="d-flex content-tab">
            <aboutMe
                title="The Story of My Career Path"
                :description="pouriaBio"
                :img-src="pouria"
                custom-class-img="d-flex w-50"
                custom-Class-Wrapper-Text="d-flex flex-column"
                :professional-Profile="personalDescription"
                custom-Class-Description-Heading="card-text description-text"
                custom-class-image-wrapper="d-flex "/>
          </div>
        </template>
      </custom-tabs>
    </div>
</template>

<script setup lang="ts">
//@ts-ignore
  import CustomTabs from "~/components/bootstrap/customTabs.vue";
  import { ref } from "vue";
  import Skills from "~/components/bootstrap/content/skills.vue";
  import MyWorkExperience from "~/components/bootstrap/content/myWorkExperience.vue";
  import MyProject from "~/components/bootstrap/content/myProject.vue";
  import Demos from "~/components/bootstrap/content/demos.vue";
  import pouria from "~/public/img/pouria.png"
  import planing from "~/assets/img/jpg/planning-achievements-text-composition-vector.jpg"
  import AboutMe from "~/components/bootstrap/content/aboutMe.vue";
  import Home from "~/components/bootstrap/content/home.vue";
  import { personalDescription, headerLinks, videoMyProjects, achievements } from "~/stores/data"
  const activeTab = ref(1)
  const pouriaBio = `
Pouria Rahimy, a passionate Full-Stack Developer and Software Engineer, specializes in building clean, scalable, and high-performance applications using modern JavaScript frameworks like Vue, Nuxt, React, and Next. As the creator of CrossUI, a fully customizable UI component framework designed for multi-environment compatibility, Pouria aims to accelerate developer workflows while preserving flexibility and performance.

Pouria’s career highlights include work on dynamic front-end architectures, custom UI/UX components, and reusable design systems. This experience is a testament to an Engineered Problem-Solving approach, where complex technical challenges are met with practical, scalable, and efficient solutions that consider performance, security, and maintainability. Furthermore, Pouria excels in Idea to Product Transformation, driving the entire product lifecycle from initial concept through implementation, testing, and successful delivery.

Beyond technical expertise, Pouria is adept at Effective Communication with Diverse Teams, fostering collaboration and knowledge transfer between technical and non-technical groups, ensuring alignment towards common goals within Agile environments. This is complemented by strong Teamwork & Adaptability, allowing for quick integration into various work settings and methodologies, and active contribution to achieve optimal group outcomes in modern workplaces. Pouria believes in writing clean code, building reusable structures, and continuously improving skills, with a long-term mission to create software that simplifies life, drives innovation, and supports business growth.

<div id="explanation" class="explanation-changes">
  <h4 class="pt-2 pb-2 text-white">Explanation of Changes:</h4>
  <ul>
    <li>"Engineered Problem-Solving" and "Idea to Product Transformation" are integrated into the description of your technical work.</li>
    <li>"Effective Communication with Diverse Teams" and "Teamwork & Adaptability" are woven into the broader aspects of your professional philosophy and approach to work.</li>
    <li>I’ve used phrases like “testament to,” “excels in,” and “complemented by” to connect your experience to these skills smoothly.</li>
  </ul>
  This version aims to present a more holistic view of your capabilities, balancing your technical prowess with essential soft skills.
</div>
`;
  const showTab = () => {
      activeTab.value = 5
  }

</script>

<style scoped lang="scss">
  .title-tab{
    color: white;
  }
  .circle-header{
    border: 1px solid #8b8b8b;
    height: 45px;
    width: 115px;
    border-radius: 20px;
    color: #ffffff !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>