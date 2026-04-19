<template>
  <div class="container pt-8 d-flex w-100  responsive-mobile-design">
      <div class="d-flex responsive-column-profile">
        <profile />
      </div>
      <div class="d-flex content flex-column responsive-column-header-content">
        <headerContent />
      </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import Profile from "~/components/sidbar/profile.vue";
import headerContent from "~/components/bootstrap/content/headerContent.vue"
import Snowflakes from "magic-snowflakes";


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

.responsive-column-profile{
  width: 25%;
}

.responsive-column-header-content{
  width: 75%;
}
</style>
