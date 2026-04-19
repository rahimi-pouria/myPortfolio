<template>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex">
        <h2>my skills</h2>
      </div>
      <div class="d-flex justify-center align-items-center  w-100 flex-wrap gap-2">
        <div v-for="(item, i) in skills" :key="i"
             class="d-flex flex-column show-skills justify-content-center align-items-center">
          <span class="circle-skill">
            <img :src="item.icon" alt="">
          </span>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">
  import { skills } from "~/stores/data";

</script>

<style scoped lang="scss">

</style>