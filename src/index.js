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
// Vue init
const app = new Vue({
  el: '#app'
})
