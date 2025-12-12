<template>
  <div class="container pt-8 d-flex w-100">
      <div class="d-flex w-30">
        <profile />
      </div>
      <div class="d-flex content flex-column w-60">
        <headerContent />
        <about-us />
      </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import Profile from "~/components/sidbar/profile.vue";
import headerContent from "~/components/bootstrap/content/headerContent.vue"
import Snowflakes from "magic-snowflakes";
import AboutUs from "~/components/bootstrap/content/aboutUs.vue";

onMounted(() => {
  new Snowflakes({
    color: "#9f9f9f",
    count: 80,
    minOpacity: 1,
    maxOpacity: 1.4,
    minSize: 8,
    maxSize: 10,
    speed: 2,
    wind: false,
    autoResize: true
  });
});

</script>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

</style>
