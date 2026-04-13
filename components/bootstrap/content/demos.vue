<template>
  <div :class="props.customClassWrapper">
    <h2 :class="props.customClassVideoTittle">{{ props.videoTitle }}</h2>
    <video :class="props.customClassVideo" :controls="props.controlsVideo" :width="props.widthVideo">
      <source :src="props.videoSrc" type="video/mp4">
        {{ props.subTitleVideo }}
    </video>
    <p :class="props.customClassVideoDescription">{{ props.videoDescription }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { creativeProjectsGalleryType } from "~/props/bootstrap/creativeProjectsGallery";

const props = defineProps(creativeProjectsGalleryType)
</script>

<style scoped lang="scss">
video {
  display: block;
  margin: 20px 0;
  border: 1px solid #ccc;
}
</style>
