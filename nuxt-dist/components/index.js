export { default as Carousel } from '../..\\components\\carousel.vue'
export { default as Famoslogo } from '../..\\components\\famoslogo.vue'
export { default as FooterFamos } from '../..\\components\\footerFamos.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyCarousel = import('../..\\components\\carousel.vue' /* webpackChunkName: "components_carousel" */).then(c => c.default || c)
export const LazyFamoslogo = import('../..\\components\\famoslogo.vue' /* webpackChunkName: "components_famoslogo" */).then(c => c.default || c)
export const LazyFooterFamos = import('../..\\components\\footerFamos.vue' /* webpackChunkName: "components_footerFamos" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
