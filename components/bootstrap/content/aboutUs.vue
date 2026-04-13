<template>
  <div class="d-flex flex-column">
    <h1 class="title">
      <span class="slide-wrapper">
        hello i am
        <transition name="fade-slide">
          <strong class="text-warning" :key="show">
            {{ show ? "pouria rahimy" : "software engineer" }}
          </strong>
        </transition>
      </span>
    </h1>


    <p class="text-about-me">
      I’m <strong class="show-key-word">Pouria Rahimy</strong>, a passionate Full-Stack Developer and Software Engineer with a strong focus on modern web technologies. I specialize in building clean, scalable, and high-performance applications using JavaScript frameworks such as Vue, Nuxt, React, and Next.

      I am also the creator of CrossUI, a fully customizable UI component framework designed to work across multiple JavaScript environments. My goal with CrossUI is to help developers speed up their workflow while maintaining flexibility and performance.

      Throughout my career, I have worked on dynamic front-end architectures, custom UI/UX components, reusable design systems, and interactive web applications. I believe in writing clean code, building reusable structures, and continuously improving my skills.

      My long-term mission is to create software that makes life easier, contributes to innovation, and helps businesses grow.
    </p>
    <div class="d-flex flex-column Work-history pt-2 w-100 gap-4">
      <div class="d-flex">
        <h2> What Makes Me Different</h2>
      </div>
      <div class="d-flex flex-wrap gap-4 w-100">
        <CustomCard
            v-for="(item) in coreSoftSkills" :key="item.id"
            :id="`card-${item.id}`"
            :title="item.title"
            img-left
            class-card="w-50 about-us-card-new"
            custom-class-text="description-text"
            :description-card="item.description"
            :show-btn="true"
            label-btn="read more"
            btn-class="custom-btn-core-soft-skills"
        />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import CustomCard from "~/components/bootstrap/customCard.vue";

  const show = ref(false)
  const slideText = () => {
    setInterval(() => {
      show.value = !show.value
    }, 5000)
  }

  interface coreSoftSkillsType {
    id: number,
    title: string,
    icon: string,
    description: string,
  }

  const coreSoftSkills: coreSoftSkillsType[]= [
    {
        id: 1,
        title: 'Effective Communication with Diverse Teams',
        icon: '',
        description: 'Concise Explanation: Fostering collaboration and knowledge transfer between technical and non-technical teams; bridging gaps and ensuring alignment towards common goals within Agile environments.\n' +
            'Key Takeaway: Ability to connect different departments and align everyone',
    },
    {
      id: 2,
      title: 'Teamwork & Adaptability',
      icon: '',
      description: 'Concise Explanation: Quickly adapting to diverse work environments and methodologies; actively contributing in Agile settings for optimal group outcomes.\n' +
          'Key Takeaway: Demonstrates understanding of modern workplaces and rapid team integration.',
    },
    {
      id: 3,
      title: 'Engineered Problem-Solving',
      icon: '',
      description: 'Concise Explanation: Analyzing complex technical challenges and designing practical, scalable, efficient solutions considering performance, security, and maintainability.\n' +
          'Key Takeaway: Highlights a thoughtful, engineering-focused approach to solutions with long-term implications.',
    },
    {
      id: 4,
      title: 'Idea to Product Transformation',
      icon: '',
      description: 'Concise Explanation: Driving the product lifecycle from concept to launch, encompassing requirements definition, implementation, testing, and ensuring successful product delivery.\n' +
          'Key Takeaway: Shows mastery of the entire development and delivery process.',
    }
  ]

  onMounted(() => {
    slideText()
  })


</script>

<style scoped lang="scss">

</style>