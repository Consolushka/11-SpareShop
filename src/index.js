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
Vue.component("product-type", require("./js/components/product-type.vue").default)
Vue.component("type-card", require("./js/components/type-card.vue").default)
Vue.component("popular", require("./js/components/popular.vue").default)
Vue.component("product-card", require("./js/components/product-card.vue").default)
// Vue init
const app = new Vue({
  el: '#app',
  data() {
    return {
      database: require('./js/db').default
    }
  },
  mounted() {
  },
  methods:{
    test() {
      this.database.products['1133'].title='123123123';
    }
  }
})
