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
            class-card="about-us-card-new anime-card"
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
import CustomCard from "~/components/bootstrap/customCard.vue";
import { experience } from "~/stores/data"

</script>

<style scoped lang="scss">

</style>