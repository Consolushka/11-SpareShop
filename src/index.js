// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component("header-component", require("./js/components/header-component.vue").default)
Vue.component("production", require("./js/components/production.vue").default)
Vue.component("promo", require("./js/components/promo.vue").default)
Vue.component("shares", require("./js/components/shares.vue").default)
Vue.component("categories", require("./js/components/categories.vue").default)
Vue.component("type-card", require("./js/components/type-card.vue").default)
Vue.component("popular", require("./js/components/popular.vue").default)
Vue.component("card-product", require("./js/components/card-product.vue").default)
Vue.component("types-panel", require("./js/components/types-panel.vue").default)
Vue.component("advertising", require("./js/components/advertising.vue").default)
Vue.component("similar", require("./js/components/similar-comp.vue").default)
Vue.component("footer-comp", require("./js/components/footer-comp.vue").default)
Vue.component("card-share", require("./js/components/card-share.vue").default)
Vue.component("route", require("./js/components/route.vue").default)
Vue.component("category-product", require("./js/components/category-product.vue").default)
Vue.component("category-page", require("./js/components/category-page.vue").default)
Vue.component("category-advert", require("./js/components/category-advert.vue").default)

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
