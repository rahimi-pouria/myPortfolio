
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


export const BootstrapCustomAccordion: typeof import("../components/bootstrap/customAccordion.vue")['default']
export const BootstrapCustomAlert: typeof import("../components/bootstrap/customAlert.vue")['default']
export const BootstrapCustomAvatar: typeof import("../components/bootstrap/customAvatar.vue")['default']
export const BootstrapCustomBadge: typeof import("../components/bootstrap/customBadge.vue")['default']
export const BootstrapCustomBreadcrumb: typeof import("../components/bootstrap/customBreadcrumb.vue")['default']
export const BootstrapCustomButton: typeof import("../components/bootstrap/customButton.vue")['default']
export const BootstrapCustomCard: typeof import("../components/bootstrap/customCard.vue")['default']
export const BootstrapCustomCheckbox: typeof import("../components/bootstrap/customCheckbox.vue")['default']
export const BootstrapCustomChooseFile: typeof import("../components/bootstrap/customChooseFile.vue")['default']
export const BootstrapCustomCollapse: typeof import("../components/bootstrap/customCollapse.vue")['default']
export const BootstrapCustomDropdown: typeof import("../components/bootstrap/customDropdown.vue")['default']
export const BootstrapCustomForm: typeof import("../components/bootstrap/customForm.vue")['default']
export const BootstrapCustomImage: typeof import("../components/bootstrap/customImage.vue")['default']
export const BootstrapCustomInput: typeof import("../components/bootstrap/customInput.vue")['default']
export const BootstrapCustomModal: typeof import("../components/bootstrap/customModal.vue")['default']
export const BootstrapCustomOffcanvas: typeof import("../components/bootstrap/customOffcanvas.vue")['default']
export const BootstrapCustomPlaceholder: typeof import("../components/bootstrap/customPlaceholder.vue")['default']
export const BootstrapCustomProgress: typeof import("../components/bootstrap/customProgress.vue")['default']
export const BootstrapCustomRadioButton: typeof import("../components/bootstrap/customRadioButton.vue")['default']
export const BootstrapCustomSearch: typeof import("../components/bootstrap/customSearch.vue")['default']
export const BootstrapCustomSelect: typeof import("../components/bootstrap/customSelect.vue")['default']
export const BootstrapCustomSpinner: typeof import("../components/bootstrap/customSpinner.vue")['default']
export const BootstrapCustomTable: typeof import("../components/bootstrap/customTable.vue")['default']
export const BootstrapCustomTabs: typeof import("../components/bootstrap/customTabs.vue")['default']
export const BootstrapCustomTooltip: typeof import("../components/bootstrap/customTooltip.vue")['default']
export const BootstrapLayoutFooterWebSite: typeof import("../components/bootstrap/layout/footerWebSite.vue")['default']
export const BootstrapLayoutHeaderWebSite: typeof import("../components/bootstrap/layout/headerWebSite.vue")['default']
export const BootstrapSectionsAdminPanelFormSection: typeof import("../components/bootstrap/sections/adminPanel/formSection.vue")['default']
export const BootstrapSectionsWebSiteFeaturesSection: typeof import("../components/bootstrap/sections/webSite/featuresSection.vue")['default']
export const BootstrapSectionsWebSiteHeroSection: typeof import("../components/bootstrap/sections/webSite/heroSection.vue")['default']
export const BootstrapSectionsWebSiteSplitHero: typeof import("../components/bootstrap/sections/webSite/splitHero.vue")['default']
export const BootstrapSlidersCustomCarousel: typeof import("../components/bootstrap/sliders/customCarousel.vue")['default']
export const ElementPlusCustomAccordion: typeof import("../components/elementPlus/customAccordion.vue")['default']
export const ElementPlusCustomAlert: typeof import("../components/elementPlus/customAlert.vue")['default']
export const ElementPlusCustomButton: typeof import("../components/elementPlus/customButton.vue")['default']
export const ElementPlusCustomCard: typeof import("../components/elementPlus/customCard.vue")['default']
export const ElementPlusCustomDropdown: typeof import("../components/elementPlus/customDropdown.vue")['default']
export const ElementPlusCustomInput: typeof import("../components/elementPlus/customInput.vue")['default']
export const ElementPlusCustomModal: typeof import("../components/elementPlus/customModal.vue")['default']
export const ElementPlusCustomSelect: typeof import("../components/elementPlus/customSelect.vue")['default']
export const ElementPlusCustomTable: typeof import("../components/elementPlus/customTable.vue")['default']
export const ElementPlusCustomTabs: typeof import("../components/elementPlus/customTabs.vue")['default']
export const ElementPlusSlidersCustomCarousel: typeof import("../components/elementPlus/sliders/customCarousel.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyBootstrapCustomAccordion: LazyComponent<typeof import("../components/bootstrap/customAccordion.vue")['default']>
export const LazyBootstrapCustomAlert: LazyComponent<typeof import("../components/bootstrap/customAlert.vue")['default']>
export const LazyBootstrapCustomAvatar: LazyComponent<typeof import("../components/bootstrap/customAvatar.vue")['default']>
export const LazyBootstrapCustomBadge: LazyComponent<typeof import("../components/bootstrap/customBadge.vue")['default']>
export const LazyBootstrapCustomBreadcrumb: LazyComponent<typeof import("../components/bootstrap/customBreadcrumb.vue")['default']>
export const LazyBootstrapCustomButton: LazyComponent<typeof import("../components/bootstrap/customButton.vue")['default']>
export const LazyBootstrapCustomCard: LazyComponent<typeof import("../components/bootstrap/customCard.vue")['default']>
export const LazyBootstrapCustomCheckbox: LazyComponent<typeof import("../components/bootstrap/customCheckbox.vue")['default']>
export const LazyBootstrapCustomChooseFile: LazyComponent<typeof import("../components/bootstrap/customChooseFile.vue")['default']>
export const LazyBootstrapCustomCollapse: LazyComponent<typeof import("../components/bootstrap/customCollapse.vue")['default']>
export const LazyBootstrapCustomDropdown: LazyComponent<typeof import("../components/bootstrap/customDropdown.vue")['default']>
export const LazyBootstrapCustomForm: LazyComponent<typeof import("../components/bootstrap/customForm.vue")['default']>
export const LazyBootstrapCustomImage: LazyComponent<typeof import("../components/bootstrap/customImage.vue")['default']>
export const LazyBootstrapCustomInput: LazyComponent<typeof import("../components/bootstrap/customInput.vue")['default']>
export const LazyBootstrapCustomModal: LazyComponent<typeof import("../components/bootstrap/customModal.vue")['default']>
export const LazyBootstrapCustomOffcanvas: LazyComponent<typeof import("../components/bootstrap/customOffcanvas.vue")['default']>
export const LazyBootstrapCustomPlaceholder: LazyComponent<typeof import("../components/bootstrap/customPlaceholder.vue")['default']>
export const LazyBootstrapCustomProgress: LazyComponent<typeof import("../components/bootstrap/customProgress.vue")['default']>
export const LazyBootstrapCustomRadioButton: LazyComponent<typeof import("../components/bootstrap/customRadioButton.vue")['default']>
export const LazyBootstrapCustomSearch: LazyComponent<typeof import("../components/bootstrap/customSearch.vue")['default']>
export const LazyBootstrapCustomSelect: LazyComponent<typeof import("../components/bootstrap/customSelect.vue")['default']>
export const LazyBootstrapCustomSpinner: LazyComponent<typeof import("../components/bootstrap/customSpinner.vue")['default']>
export const LazyBootstrapCustomTable: LazyComponent<typeof import("../components/bootstrap/customTable.vue")['default']>
export const LazyBootstrapCustomTabs: LazyComponent<typeof import("../components/bootstrap/customTabs.vue")['default']>
export const LazyBootstrapCustomTooltip: LazyComponent<typeof import("../components/bootstrap/customTooltip.vue")['default']>
export const LazyBootstrapLayoutFooterWebSite: LazyComponent<typeof import("../components/bootstrap/layout/footerWebSite.vue")['default']>
export const LazyBootstrapLayoutHeaderWebSite: LazyComponent<typeof import("../components/bootstrap/layout/headerWebSite.vue")['default']>
export const LazyBootstrapSectionsAdminPanelFormSection: LazyComponent<typeof import("../components/bootstrap/sections/adminPanel/formSection.vue")['default']>
export const LazyBootstrapSectionsWebSiteFeaturesSection: LazyComponent<typeof import("../components/bootstrap/sections/webSite/featuresSection.vue")['default']>
export const LazyBootstrapSectionsWebSiteHeroSection: LazyComponent<typeof import("../components/bootstrap/sections/webSite/heroSection.vue")['default']>
export const LazyBootstrapSectionsWebSiteSplitHero: LazyComponent<typeof import("../components/bootstrap/sections/webSite/splitHero.vue")['default']>
export const LazyBootstrapSlidersCustomCarousel: LazyComponent<typeof import("../components/bootstrap/sliders/customCarousel.vue")['default']>
export const LazyElementPlusCustomAccordion: LazyComponent<typeof import("../components/elementPlus/customAccordion.vue")['default']>
export const LazyElementPlusCustomAlert: LazyComponent<typeof import("../components/elementPlus/customAlert.vue")['default']>
export const LazyElementPlusCustomButton: LazyComponent<typeof import("../components/elementPlus/customButton.vue")['default']>
export const LazyElementPlusCustomCard: LazyComponent<typeof import("../components/elementPlus/customCard.vue")['default']>
export const LazyElementPlusCustomDropdown: LazyComponent<typeof import("../components/elementPlus/customDropdown.vue")['default']>
export const LazyElementPlusCustomInput: LazyComponent<typeof import("../components/elementPlus/customInput.vue")['default']>
export const LazyElementPlusCustomModal: LazyComponent<typeof import("../components/elementPlus/customModal.vue")['default']>
export const LazyElementPlusCustomSelect: LazyComponent<typeof import("../components/elementPlus/customSelect.vue")['default']>
export const LazyElementPlusCustomTable: LazyComponent<typeof import("../components/elementPlus/customTable.vue")['default']>
export const LazyElementPlusCustomTabs: LazyComponent<typeof import("../components/elementPlus/customTabs.vue")['default']>
export const LazyElementPlusSlidersCustomCarousel: LazyComponent<typeof import("../components/elementPlus/sliders/customCarousel.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.19.2_@parcel+watcher_7e51f20dbf562e6d1f316a0b26e2633b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
