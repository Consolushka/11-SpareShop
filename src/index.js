// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component("aside-navigation", require("./js/components/global/aside-navigation.vue").default)
Vue.component("header-component", require("./js/components/global/header-component.vue").default)
Vue.component("production", require("./js/components/page_index/production.vue").default)
Vue.component("promo", require("./js/components/page_index/promo.vue").default)
Vue.component("shares", require("./js/components/page_index/shares.vue").default)
Vue.component("categories", require("./js/components/global/categories.vue").default)
Vue.component("type-card", require("./js/components/page_index/type-card.vue").default)
Vue.component("popular", require("./js/components/global/popular.vue").default)
Vue.component("card-product", require("./js/components/cards/card-product.vue").default)
Vue.component("types-panel", require("./js/components/page_index/types-panel.vue").default)
Vue.component("advertising", require("./js/components/global/advertising.vue").default)
Vue.component("product-similar", require("./js/components/page_product/product-similar-comp.vue").default)
Vue.component("footer-comp", require("./js/components/global/footer-comp.vue").default)
Vue.component("card-share", require("./js/components/cards/card-share.vue").default)
Vue.component("route", require("./js/components/global/route.vue").default)
Vue.component("category", require("./js/components/global/category.vue").default)
Vue.component("category-page", require("./js/components/page_category/category-page.vue").default)
Vue.component("category-advert", require("./js/components/page_category/category-advert.vue").default)
Vue.component("categoryFilters", require("./js/components/page_category/category-filters.vue").default)
Vue.component("product-page", require("./js/components/page_product/product-page.vue").default)
Vue.component("time-dynamic", require("./js/components/page_index/time-dynamic.vue").default)
Vue.component("comparison", require("./js/components/page_product/product-comparison.vue").default)

import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

Vue.use(VueSimpleAccordion, {
  // ... Options go here
});

export const eventBus = new Vue();

// Vue init
const app = new Vue({
  el: '#app',
  data() {
    return {
      database: require('./js/db.js').default
    }
  }
})
