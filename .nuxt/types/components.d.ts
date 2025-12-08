
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)

interface _GlobalComponents {
      'BootstrapCustomAccordion': typeof import("../../components/bootstrap/customAccordion.vue")['default']
    'BootstrapCustomAlert': typeof import("../../components/bootstrap/customAlert.vue")['default']
    'BootstrapCustomAvatar': typeof import("../../components/bootstrap/customAvatar.vue")['default']
    'BootstrapCustomBadge': typeof import("../../components/bootstrap/customBadge.vue")['default']
    'BootstrapCustomBreadcrumb': typeof import("../../components/bootstrap/customBreadcrumb.vue")['default']
    'BootstrapCustomButton': typeof import("../../components/bootstrap/customButton.vue")['default']
    'BootstrapCustomCard': typeof import("../../components/bootstrap/customCard.vue")['default']
    'BootstrapCustomCheckbox': typeof import("../../components/bootstrap/customCheckbox.vue")['default']
    'BootstrapCustomChooseFile': typeof import("../../components/bootstrap/customChooseFile.vue")['default']
    'BootstrapCustomCollapse': typeof import("../../components/bootstrap/customCollapse.vue")['default']
    'BootstrapCustomDropdown': typeof import("../../components/bootstrap/customDropdown.vue")['default']
    'BootstrapCustomForm': typeof import("../../components/bootstrap/customForm.vue")['default']
    'BootstrapCustomImage': typeof import("../../components/bootstrap/customImage.vue")['default']
    'BootstrapCustomInput': typeof import("../../components/bootstrap/customInput.vue")['default']
    'BootstrapCustomModal': typeof import("../../components/bootstrap/customModal.vue")['default']
    'BootstrapCustomOffcanvas': typeof import("../../components/bootstrap/customOffcanvas.vue")['default']
    'BootstrapCustomPlaceholder': typeof import("../../components/bootstrap/customPlaceholder.vue")['default']
    'BootstrapCustomProgress': typeof import("../../components/bootstrap/customProgress.vue")['default']
    'BootstrapCustomRadioButton': typeof import("../../components/bootstrap/customRadioButton.vue")['default']
    'BootstrapCustomSearch': typeof import("../../components/bootstrap/customSearch.vue")['default']
    'BootstrapCustomSelect': typeof import("../../components/bootstrap/customSelect.vue")['default']
    'BootstrapCustomSpinner': typeof import("../../components/bootstrap/customSpinner.vue")['default']
    'BootstrapCustomTable': typeof import("../../components/bootstrap/customTable.vue")['default']
    'BootstrapCustomTabs': typeof import("../../components/bootstrap/customTabs.vue")['default']
    'BootstrapCustomTooltip': typeof import("../../components/bootstrap/customTooltip.vue")['default']
    'BootstrapLayoutFooterWebSite': typeof import("../../components/bootstrap/layout/footerWebSite.vue")['default']
    'BootstrapLayoutHeaderWebSite': typeof import("../../components/bootstrap/layout/headerWebSite.vue")['default']
    'BootstrapSectionsAdminPanelFormSection': typeof import("../../components/bootstrap/sections/adminPanel/formSection.vue")['default']
    'BootstrapSectionsWebSiteFeaturesSection': typeof import("../../components/bootstrap/sections/webSite/featuresSection.vue")['default']
    'BootstrapSectionsWebSiteHeroSection': typeof import("../../components/bootstrap/sections/webSite/heroSection.vue")['default']
    'BootstrapSectionsWebSiteSplitHero': typeof import("../../components/bootstrap/sections/webSite/splitHero.vue")['default']
    'BootstrapSlidersCustomCarousel': typeof import("../../components/bootstrap/sliders/customCarousel.vue")['default']
    'ElementPlusCustomAccordion': typeof import("../../components/elementPlus/customAccordion.vue")['default']
    'ElementPlusCustomAlert': typeof import("../../components/elementPlus/customAlert.vue")['default']
    'ElementPlusCustomButton': typeof import("../../components/elementPlus/customButton.vue")['default']
    'ElementPlusCustomCard': typeof import("../../components/elementPlus/customCard.vue")['default']
    'ElementPlusCustomDropdown': typeof import("../../components/elementPlus/customDropdown.vue")['default']
    'ElementPlusCustomInput': typeof import("../../components/elementPlus/customInput.vue")['default']
    'ElementPlusCustomModal': typeof import("../../components/elementPlus/customModal.vue")['default']
    'ElementPlusCustomSelect': typeof import("../../components/elementPlus/customSelect.vue")['default']
    'ElementPlusCustomTable': typeof import("../../components/elementPlus/customTable.vue")['default']
    'ElementPlusCustomTabs': typeof import("../../components/elementPlus/customTabs.vue")['default']
    'ElementPlusSlidersCustomCarousel': typeof import("../../components/elementPlus/sliders/customCarousel.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyBootstrapCustomAccordion': LazyComponent<typeof import("../../components/bootstrap/customAccordion.vue")['default']>
    'LazyBootstrapCustomAlert': LazyComponent<typeof import("../../components/bootstrap/customAlert.vue")['default']>
    'LazyBootstrapCustomAvatar': LazyComponent<typeof import("../../components/bootstrap/customAvatar.vue")['default']>
    'LazyBootstrapCustomBadge': LazyComponent<typeof import("../../components/bootstrap/customBadge.vue")['default']>
    'LazyBootstrapCustomBreadcrumb': LazyComponent<typeof import("../../components/bootstrap/customBreadcrumb.vue")['default']>
    'LazyBootstrapCustomButton': LazyComponent<typeof import("../../components/bootstrap/customButton.vue")['default']>
    'LazyBootstrapCustomCard': LazyComponent<typeof import("../../components/bootstrap/customCard.vue")['default']>
    'LazyBootstrapCustomCheckbox': LazyComponent<typeof import("../../components/bootstrap/customCheckbox.vue")['default']>
    'LazyBootstrapCustomChooseFile': LazyComponent<typeof import("../../components/bootstrap/customChooseFile.vue")['default']>
    'LazyBootstrapCustomCollapse': LazyComponent<typeof import("../../components/bootstrap/customCollapse.vue")['default']>
    'LazyBootstrapCustomDropdown': LazyComponent<typeof import("../../components/bootstrap/customDropdown.vue")['default']>
    'LazyBootstrapCustomForm': LazyComponent<typeof import("../../components/bootstrap/customForm.vue")['default']>
    'LazyBootstrapCustomImage': LazyComponent<typeof import("../../components/bootstrap/customImage.vue")['default']>
    'LazyBootstrapCustomInput': LazyComponent<typeof import("../../components/bootstrap/customInput.vue")['default']>
    'LazyBootstrapCustomModal': LazyComponent<typeof import("../../components/bootstrap/customModal.vue")['default']>
    'LazyBootstrapCustomOffcanvas': LazyComponent<typeof import("../../components/bootstrap/customOffcanvas.vue")['default']>
    'LazyBootstrapCustomPlaceholder': LazyComponent<typeof import("../../components/bootstrap/customPlaceholder.vue")['default']>
    'LazyBootstrapCustomProgress': LazyComponent<typeof import("../../components/bootstrap/customProgress.vue")['default']>
    'LazyBootstrapCustomRadioButton': LazyComponent<typeof import("../../components/bootstrap/customRadioButton.vue")['default']>
    'LazyBootstrapCustomSearch': LazyComponent<typeof import("../../components/bootstrap/customSearch.vue")['default']>
    'LazyBootstrapCustomSelect': LazyComponent<typeof import("../../components/bootstrap/customSelect.vue")['default']>
    'LazyBootstrapCustomSpinner': LazyComponent<typeof import("../../components/bootstrap/customSpinner.vue")['default']>
    'LazyBootstrapCustomTable': LazyComponent<typeof import("../../components/bootstrap/customTable.vue")['default']>
    'LazyBootstrapCustomTabs': LazyComponent<typeof import("../../components/bootstrap/customTabs.vue")['default']>
    'LazyBootstrapCustomTooltip': LazyComponent<typeof import("../../components/bootstrap/customTooltip.vue")['default']>
    'LazyBootstrapLayoutFooterWebSite': LazyComponent<typeof import("../../components/bootstrap/layout/footerWebSite.vue")['default']>
    'LazyBootstrapLayoutHeaderWebSite': LazyComponent<typeof import("../../components/bootstrap/layout/headerWebSite.vue")['default']>
    'LazyBootstrapSectionsAdminPanelFormSection': LazyComponent<typeof import("../../components/bootstrap/sections/adminPanel/formSection.vue")['default']>
    'LazyBootstrapSectionsWebSiteFeaturesSection': LazyComponent<typeof import("../../components/bootstrap/sections/webSite/featuresSection.vue")['default']>
    'LazyBootstrapSectionsWebSiteHeroSection': LazyComponent<typeof import("../../components/bootstrap/sections/webSite/heroSection.vue")['default']>
    'LazyBootstrapSectionsWebSiteSplitHero': LazyComponent<typeof import("../../components/bootstrap/sections/webSite/splitHero.vue")['default']>
    'LazyBootstrapSlidersCustomCarousel': LazyComponent<typeof import("../../components/bootstrap/sliders/customCarousel.vue")['default']>
    'LazyElementPlusCustomAccordion': LazyComponent<typeof import("../../components/elementPlus/customAccordion.vue")['default']>
    'LazyElementPlusCustomAlert': LazyComponent<typeof import("../../components/elementPlus/customAlert.vue")['default']>
    'LazyElementPlusCustomButton': LazyComponent<typeof import("../../components/elementPlus/customButton.vue")['default']>
    'LazyElementPlusCustomCard': LazyComponent<typeof import("../../components/elementPlus/customCard.vue")['default']>
    'LazyElementPlusCustomDropdown': LazyComponent<typeof import("../../components/elementPlus/customDropdown.vue")['default']>
    'LazyElementPlusCustomInput': LazyComponent<typeof import("../../components/elementPlus/customInput.vue")['default']>
    'LazyElementPlusCustomModal': LazyComponent<typeof import("../../components/elementPlus/customModal.vue")['default']>
    'LazyElementPlusCustomSelect': LazyComponent<typeof import("../../components/elementPlus/customSelect.vue")['default']>
    'LazyElementPlusCustomTable': LazyComponent<typeof import("../../components/elementPlus/customTable.vue")['default']>
    'LazyElementPlusCustomTabs': LazyComponent<typeof import("../../components/elementPlus/customTabs.vue")['default']>
    'LazyElementPlusSlidersCustomCarousel': LazyComponent<typeof import("../../components/elementPlus/sliders/customCarousel.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
