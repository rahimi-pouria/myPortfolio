<template>
  <CustomCard id="product-card" title="" sub-title="full stack developer" img-src="/img/pouria.png" img-width="50"
      img-height="280" img-top class-card="shadow rounded custom-card" description-card="software engineer"
      :show-btn="true" btn-class="btn btn-warning w-100" label-btn="" label=""  img-alt="" link-btn=""
              type-btn="button">
    <template #customBody>
      <div class="d-flex flex-column gap-2">
        <div class="title d-flex  justify-content-center align-items-center">
          <h2>
            <span>Pouria Rahimy</span>
          </h2>
        </div>
        <div class="subtitle d-flex justify-content-center align-items-center text-warning">
          <h5>
            <span>software Engineer</span>
          </h5>
        </div>
        <div class="d-flex social-media justify-content-center align-items-center gap-4">
          <span v-for="(item, i) in socialMedia" :key="item.id" class="circle rounded-full">
            <a :href="item.link">
               <i :class="item.icon"></i>
            </a>

          </span>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-2">
          <custom-button label="Download Cv" class="btn btn-warning w-100" link-btn=""/>
        </div>
      </div>
    </template>
  </CustomCard>
</template>

<script setup lang="ts">

import CustomCard from "~/components/bootstrap/customCard.vue";
import CustomButton from "~/components/bootstrap/customButton.vue";

interface  socialMediaType {
  id: number;
  icon: string;
  link: string;
}


const socialMedia: socialMediaType[] = [
  {
    id: 1,
    icon: "fab fa-whatsapp",
    link: 'https://wa.me/989184095907'
  },
  {
    id: 2,
    icon: "fab fa-linkedin",
    link: 'https://www.linkedin.com/in/pouria-rahimy-a7755b212/'
  },
  {
    id: 3,
    icon: "fab fa-telegram",
    link: 'https://t.me/CrossUiFramework'
  },
  {
    id: 4,
    icon: "fab fa-github",
    link: 'https://github.com/rahimi-pouria'
  }
]



</script>

<style scoped lang="scss">
</style>