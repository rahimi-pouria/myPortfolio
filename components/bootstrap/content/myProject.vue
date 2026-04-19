<template>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex">
        <h2> My Project</h2>
      </div>
      <div class="d-flex flex-wrap my-project gap-4 w-100">
        <CustomCard
            v-for="(item) in project" :key="item.id"
            :id="`card-${item.id}`"
            :title="item.title"
            img-left
            class-card="about-us-card-new anime-card"
            custom-class-text="description-text"
            :description-card="item.description"
            :show-btn="true"
            label-btn="see project in github"
            btn-class="custom-btn-core-soft-skills text-black"
            img-top
            :img-src="item.img"
            :link-btn="item.linkGitHub"
            :external-link="item.linkWebsite"
            custom-Class-External-Link="btn btn-md btn- custom-btn-core-soft-skills text-black"
            custom-class-link="d-flex justify-content-between align-items-center"
            title-custom-link="see webSite"
            anchorLink=""
        />
      </div>
    </div>
</template>

<script setup lang="ts">

import CustomCard from "~/components/bootstrap/customCard.vue";
import { project } from "~/stores/data"



</script>

<style scoped lang="scss">

</style>