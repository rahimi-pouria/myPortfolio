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
    <div class="d-flex Work-history w-100 gap-4">
      <div class="d-flex w-30 gap-2">
        <p class="Records">4+</p>
        <span>Years of Experience</span>
      </div>
      <div class="d-flex w-30 gap-2">
        <p class="Records">10</p>
        <span>CompletedProjects</span>
      </div>
      <div class="d-flex flex-column w-30 contact">
        <div class="d-flex gap-2">
          <p class="Records">Email:</p>
          <span>
            <strong class="show-key-word">
                   pouria.rahimy@gmail.com
            </strong>
          </span>
        </div>
        <div class="d-flex gap-2">
          <p class="Records">Phone</p>
          <span>
              <strong class="show-key-word">
                    +989112672614
              </strong>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  const show = ref(false)
  const slideText = () => {
    setInterval(() => {
      show.value = !show.value
    }, 5000)
  }

  onMounted(() => {
    slideText()
  })


</script>

<style scoped lang="scss">

</style>