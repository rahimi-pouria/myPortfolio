<template>
  <article class="article-detail d-flex flex-column w-100 shadow-sm rounded-3 overflow-hidden">
    <div :class="['article-img-container position-relative', props.customClassImageWrapper]">
      <img
          :class="['img-fluid w-100  object-fit-cover', props.customClassImg]"
          :src="props.imgSrc"
          :alt="props.altImg"
      >
    </div>

    <div :class="['p-4 p-md-5 gap-3', props.customClassWrapperText]">
      <h2 :class="['fw-bold text-white mb-4', props.customClassTitle]">
        {{ props.title }}
      </h2>
      <div :class="['text-muted lh-lg', props.customClassDescription]">
        <p v-html="props.description" class="text"></p>
      </div>
      <div v-for="(item) in props.professionalProfile" :key="item.id" class="d-flex flex-column ">
        <h4 :class="['fw-bold text-white mb-4', props.customClassTitleHeading]">
          {{ item.title }}
        </h4>
        <div :class="['text-muted lh-lg', props.customClassDescriptionHeading]">
          <p v-html="item.description" class="text"></p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { dynamicPagePropTypes } from "~/props/bootstrap/generic"
const props = defineProps(dynamicPagePropTypes)


</script>

<style scoped lang="scss">
.article-detail {
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .article-img-container {
    max-height: 400px;
    overflow: hidden;
  }
}

.lh-lg {
  line-height: 1.8;
  font-size: 1.1rem;
}

</style>
