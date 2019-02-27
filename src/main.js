import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('./views/Homepage.vue').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('./views/Homepage.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: require('./views/Homepage.vue')
    },
    {
      path: '/mosquees',
      name: 'mosquees',
      component: require('./views/Mosquee.vue').default
    },
    {
      path: '/mosquees/ajout',
      name: 'mosquees.add',
      component: require('./views/Nouvelle-mosquee.vue').default
    },
    {
      path: '/puits',
      name: 'puits',
      component: require('./views/Homepage.vue')
    },
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
